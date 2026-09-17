"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

// Modernize THREE.Clock deprecation by providing a THREE.Timer-backed implementation
if (typeof window !== "undefined" && typeof THREE !== "undefined") {
  // @ts-expect-error - Replace deprecated THREE.Clock with modern THREE.Timer mechanism
  if (!THREE.Clock.__modernized) {
    class ModernTimerClock {
      timer: THREE.Timer;
      autoStart: boolean;
      startTime: number;
      oldTime: number;
      elapsedTime: number;
      running: boolean;
      static __modernized = true;

      constructor(autoStart = true) {
        this.timer = new THREE.Timer();
        this.autoStart = autoStart;
        this.startTime = 0;
        this.oldTime = 0;
        this.elapsedTime = 0;
        this.running = false;
        if (autoStart) {
          this.start();
        }
      }

      start() {
        this.timer.reset();
        this.startTime = performance.now();
        this.oldTime = this.startTime;
        this.elapsedTime = 0;
        this.running = true;
      }

      stop() {
        this.getElapsedTime();
        this.running = false;
        this.autoStart = false;
      }

      getElapsedTime() {
        this.getDelta();
        return this.elapsedTime;
      }

      getDelta() {
        let diff = 0;
        if (this.autoStart && !this.running) {
          this.start();
          return 0;
        }
        if (this.running) {
          this.timer.update();
          diff = this.timer.getDelta();
          this.elapsedTime = this.timer.getElapsed();
          this.oldTime = performance.now();
        }
        return diff;
      }
    }

    // @ts-expect-error - Assign modernized class to THREE.Clock
    THREE.Clock = ModernTimerClock;
  }
}

const vertexShader = `
uniform float uTime;
uniform float uProgress;
uniform float uScroll;
uniform vec2 uMouse;

varying vec2 vUv;
varying vec3 vPos;

// Simplex noise function
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vUv = uv;
  vec3 pos = position;

  // Breathing distortion
  float noise = snoise(pos.xy * 2.0 + uTime * 0.5) * 0.05;
  pos.z += noise;

  // Mouse repulsion
  float dist = distance(pos.xy, uMouse * 2.0);
  float repulsion = smoothstep(0.8, 0.0, dist);
  pos.z += repulsion * 0.3;
  pos.xy += normalize(pos.xy - (uMouse * 2.0)) * repulsion * 0.1;

  // Scroll explosion (camera push through)
  // When uScroll > 0, disperse particles outward based on distance from center
  float expDist = distance(pos.xy, vec2(0.0));
  vec2 expDir = normalize(pos.xy);
  float scrollExp = smoothstep(0.0, 1.0, uScroll);
  
  pos.xy += expDir * scrollExp * (1.0 + snoise(pos.xy * 5.0)) * 5.0;
  pos.z += snoise(pos.xy * 10.0 + uTime) * scrollExp * 5.0;

  // Materialization entrance (uProgress 0 to 1)
  float yProg = smoothstep(0.0, 1.0, (pos.y + 1.0) / 2.0);
  float entrance = smoothstep(yProg - 0.5, yProg + 0.5, uProgress);
  pos.z += (1.0 - entrance) * (snoise(pos.xy * 4.0) * 2.0 + 1.0);
  pos.xy += (1.0 - entrance) * snoise(pos.xy * 3.0) * 0.5;

  vPos = pos;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
uniform sampler2D uTexture;
uniform float uProgress;
uniform float uScroll;

varying vec2 vUv;
varying vec3 vPos;

void main() {
  vec4 texColor = texture2D(uTexture, vUv);
  
  // Isolate purple/brightness to remove black background softly
  float brightness = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
  
  // If it's pure black, we discard or fade it
  float alpha = smoothstep(0.01, 0.1, brightness);
  
  // Apply materialization fade
  alpha *= uProgress;

  // Apply scroll fade out when dispersing
  alpha *= (1.0 - uScroll);
  
  // Increase contrast/glow slightly
  vec3 finalColor = texColor.rgb * 1.5;

  gl_FragColor = vec4(finalColor, alpha * texColor.a);
}
`;

function LogoMesh({ scrollProgress, active }: { scrollProgress: React.MutableRefObject<number>, active: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const texture = useTexture("/assets/brand/demonz-logo.jpg");
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uProgress: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uScroll: { value: 0 },
    uTexture: { value: texture }
  }), [texture]);

  // Target values for smooth lerping
  const targetMouse = useRef(new THREE.Vector2(0, 0));
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!active || !materialRef.current) return;

    // Track mouse
    targetMouse.current.x = (state.pointer.x * viewport.width) / 2;
    targetMouse.current.y = (state.pointer.y * viewport.height) / 2;

    materialRef.current.uniforms.uMouse.value.lerp(targetMouse.current, 0.1);
    materialRef.current.uniforms.uTime.value += delta;
    
    // Entrance materialization animation
    materialRef.current.uniforms.uProgress.value = THREE.MathUtils.lerp(
      materialRef.current.uniforms.uProgress.value,
      1,
      0.05
    );

    // Update scroll progress mapping
    materialRef.current.uniforms.uScroll.value = scrollProgress.current;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[5, 5, 128, 128]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

export function DemonzLogo({ scrollProgress, active = true }: { scrollProgress: React.MutableRefObject<number>, active?: boolean }) {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        frameloop={active ? "always" : "demand"}
      >
        <LogoMesh scrollProgress={scrollProgress} active={active} />
      </Canvas>
    </div>
  );
}
