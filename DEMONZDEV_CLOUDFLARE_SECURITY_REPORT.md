# DEMONZDEV — CLOUDFLARE, HTTPS & HTTP SECURITY REPORT

**Document ID:** `DEMONZDEV-CF-SEC-20261122`  
**Primary Domain:** `https://demonzdev.my.id`  
**Cloudflare Pages Mirror:** `https://demonz-portfolio.pages.dev`  
**GitHub Pages Mirror:** `https://demonz-30.github.io/demonzdev-portofolio/`  
**Status:** **AUDITED & HARDENED**

---

## 1. Hosting Architecture & Control Separation

```mermaid
flowchart TD
    Client["Web Browser / Client"] -->|HTTPS (TLS 1.3)| CF["Cloudflare Edge Anycast<br/>(104.21.52.20 / 172.67.194.75)"]
    CF -->|Custom Domain Route| CFP["Cloudflare Pages Project<br/>(demonz-portfolio.pages.dev)"]
    Admin["Developer / CI"] -->|Git Push master| GH["GitHub Repository<br/>(Demonz-30/demonzdev-portofolio)"]
    GH -->|GHA deploy-pages.yml| GHP["GitHub Pages Mirror<br/>(demonz-30.github.io/demonzdev-portofolio)"]
    GH -->|Direct Git Integration| CFP
```

- **Cloudflare Layer:** Provides TLS 1.3 termination, Anycast routing, DDoS mitigation, Network Error Logging (NEL), HTTP/3 support, and headers evaluation via `_headers`.
- **GitHub Pages Layer:** Acts as a high-availability fallback mirror and automated artifact distribution point.

---

## 2. Security Headers Audit & Hardening

The repository controls Cloudflare Pages response headers via `public/_headers`.

### 2.1 Hardened `public/_headers` Configuration

```http
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-XSS-Protection: 1; mode=block
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; media-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'self'; worker-src 'self' blob:; object-src 'none'; base-uri 'self';

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

### 2.2 Content Security Policy (CSP) Compatibility Analysis

A restrictive CSP was tested against all rich multimedia and WebGL components:
- **`default-src 'self'`:** Restricts baseline loading to the local origin.
- **`script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'`:** Supports Next.js hydration chunks and WebAssembly bindings without allowing arbitrary external scripts.
- **`style-src 'self' 'unsafe-inline'`:** Essential for GSAP animated transformations (`scale`, `opacity`, `transform-gpu`) and inline dynamic Tailwind styles.
- **`img-src 'self' data: blob: https:`:** Supports Three.js texture blobs, WebP imagery, and responsive pictures.
- **`media-src 'self' data: blob:`:** Permits playback of transparent WebM and MP4 video teasers.
- **`font-src 'self' data:`:** Allows local Geist Sans and Geist Mono WOFF2 font loading.
- **`object-src 'none'`:** Completely blocks legacy Flash/Java plugins.
- **`frame-ancestors 'self'`:** Enforces frame isolation and prevents clickjacking.

---

## 3. Recommended Cloudflare Dashboard Settings (Manual Action Guide)

For security controls managed at the Cloudflare Dashboard level (outside Git repository files):

| Cloudflare Feature | Recommended Setting | Rationale |
| :--- | :--- | :--- |
| **SSL/TLS Encryption Mode** | **Full (Strict)** | Ensures end-to-end encryption between Cloudflare edge and origin |
| **Minimum TLS Version** | **TLS 1.2** | Deprecates insecure TLS 1.0/1.1 protocols |
| **Always Use HTTPS** | **Enabled (ON)** | Automatically redirects all plaintext HTTP traffic to HTTPS |
| **HTTP Strict Transport Security (HSTS)** | **Enabled (31536000s, Subdomains, Preload)** | Enforces HTTPS persistence in browsers |
| **Automatic HTTPS Rewrites** | **Enabled (ON)** | Fixes any legacy mixed-content references automatically |
| **Brotli Compression** | **Enabled (ON)** | Maximizes compression for static HTML, CSS, and JS assets |
| **Early Hints** | **Enabled (ON)** | Accelerates asset preloading via 103 Early Hints |
| **Security Level** | **Medium** | Balances bot protection with seamless legitimate visitor access |
