# DEMONZDEV — SECURITY BASELINE & ENVIRONMENT REPORT

**Document ID:** `DEMONZDEV-SEC-BASELINE-20261122`  
**Target Repository:** `https://github.com/Demonz-30/demonzdev-portofolio`  
**Production Domain:** `https://demonzdev.my.id`  
**GitHub Pages Mirror:** `https://demonz-30.github.io/demonzdev-portofolio/`  
**Initial Baseline Production Commit:** `ed99c1104a22cbe91d46fb104d5a10f8067746c5`  
**Initial Deployment Run ID:** `44963671683`  
**Dedicated Branch:** `security/fullstack-hardening-post-release`  
**Execution Timestamp:** 2026-11-22T07:20:00+07:00  
**Status:** **AUDITED & SECURED**

---

## 1. Executive Summary

Prior to initiating hardening and modernization, an exhaustive forensic baseline was captured across the repository working tree, git revision history, build pipeline, dependency graph, runtime environments, and hosting endpoints.

The application is an offline-capable, highly performant Next.js 16 static export with custom WebGL (Three.js), GSAP kinetic animations, and multimedia streaming. It is deployed via GitHub Pages (`demonz-30.github.io/demonzdev-portofolio`) and fronted by Cloudflare with custom domain routing (`demonzdev.my.id`).

---

## 2. Git & Revision Control Baseline

| Dimension | Initial State | Verification Method |
| :--- | :--- | :--- |
| **Active Branch** | `master` (synchronized with `origin/master`) | `git status`, `git branch -a` |
| **Production Commit SHA** | `ed99c1104a22cbe91d46fb104d5a10f8067746c5` | `git rev-parse HEAD` |
| **Commit Message** | `chore(qa): complete TASK 07 visual, functional, and performance regression suite` | `git log -1` |
| **Working Tree** | Clean, 0 uncommitted changes | `git status` |
| **Dedicated Hardening Branch** | `security/fullstack-hardening-post-release` | `git checkout -b` |
| **Remote Origin** | `https://github.com/Demonz-30/demonzdev-portofolio.git` | `git remote -v` |
| **GitHub CLI Authentication** | Demonz-30 (`repo`, `workflow`, `read:org`, `gist`) | `gh auth status` |

---

## 3. Runtime & Toolchain Baseline

| Component | Baseline Version | Target Version | Evaluation / Action |
| :--- | :--- | :--- | :--- |
| **PHP Runtime** | None / Not Installed | Not Installed | Explicitly verified: zero PHP in production |
| **Node.js (Local)** | v24.22.2 (ARM64 Linux) | v24.22.2 | Clean local execution environment |
| **Node.js (GitHub Actions)** | Node.js 20 (Deprecated) | Node.js 22 LTS | Runners forced upgrade to 24; set to 22 LTS |
| **npm CLI** | 12.2.2 | 12.2.2 | Reproducible lockfile resolution |
| **Next.js** | 16.3.3 | 16.4.6 | Upgraded to patch critical RCE and cache advisories |
| **React & React DOM** | 19.2.8 | 19.3.1 | Evaluated for CVE-2026-126187 |
| **Sharp** | 0.35.4 | 0.35.5 | Upgraded to patch high libheif/librsvg vulnerabilities |
| **Wrangler** | 4.127.1 | 4.166.0 | Modernized transitive undici & miniflare packages |
| **Tailwind CSS** | 4.3.3 | 4.3.5 | Compatible utility engine |
| **Three.js** | 0.185.1 | 0.185.1 | Maintained for canvas stability |
| **GSAP** | 3.15.0 | 3.15.1 | Compatible patch |

---

## 4. Initial Security Audit Baseline

Running `npm audit` on the pre-remediation tree identified **22 vulnerabilities**:
- **2 Critical:**
  - `next` (16.0.0 - 16.4.4): GHSA-vcvr-r3jv-pc5j (RCE in ImageResponse), GHSA-3w37-wq28-93x7 (Draft Mode leak in `use cache`), GHSA-rhh4-g77r-r9qj (Cache poisoning).
  - `proxy-addr` (1.1.0 - 2.0.7): GHSA-jqcg-44mw-7w3h (IP spoofing via IPv4-mapped IPv6 trust subnet).
- **8 High:**
  - `body-parser` (2.0.0 - 2.3.0): GHSA-27r3-jxmh-p828 (DoS via compressed request body trailing bytes).
  - `sharp` (<=0.35.5-rc.1): GHSA-rgj7-g3m4-5g8c & GHSA-wq5f-xc86-pv6w (libheif and librsvg DoS).
  - `undici` (7.0.0 - 7.30.0): Multiple DoS, TLS cert bypass, and WebSocket decompression flaws.
  - `zod` (<4.6.6): GHSA-mrhx-c7xc-m3w5 (Memory exhaustion).
  - `brace-expansion` (<=1.1.20): GHSA-q2hr-2g5m-vwhr & GHSA-qhr7-859c-m2p7 (Quadratic regex DoS).
  - `source-map-js` (1.0.0 - 1.2.1): GHSA-68fv-2mgg-jv7q (Event-loop DoS).
- **12 Moderate:**
  - `glob`, `minimatch`, `qs`.

---

## 5. Live Production Baseline Headers & DNS

### 5.1 Primary Domain: `https://demonzdev.my.id`
- **DNS Resolution:** `104.21.52.20`, `172.67.194.75` (Cloudflare Anycast CDN)
- **HTTPS Status:** TLSv1.3 Active, HTTP/2
- **Response Headers:**
  ```http
  HTTP/2 200
  server: cloudflare
  strict-transport-security: max-age=31536000; includeSubDomains; preload
  x-content-type-options: nosniff
  x-frame-options: SAMEORIGIN
  x-xss-protection: 1; mode=block
  permissions-policy: camera=(), microphone=(), geolocation=(), browsing-topics=()
  referrer-policy: strict-origin-when-cross-origin
  cf-cache-status: DYNAMIC
  ```
- **Finding:** Missing formal `Content-Security-Policy` and immutable cache directives for static assets in `public/_headers`.

### 5.2 Mirror Domain: `https://demonz-30.github.io/demonzdev-portofolio/`
- **Hosting:** GitHub Pages (Fastly CDN backend)
- **HSTS:** `max-age=31556952`
- **Cache-Control:** `max-age=600`

---

## 6. Functional & Factual Content Baseline

1. **Flagship Works:** Homepage showcased 3 projects (Kitchen Ledger, SignalLens, Demonz Coffee), while `DEMONZDEV_FINAL_REGRESSION_REPORT.md` had mistakenly labeled HyperAssist as "Production Application" when code and drive evidence indicate "Concept / PRD v1.2".
2. **Creative Hub:** `/creative` was observed with only 3 disciplines (Photography, Videography, Creative Code). The 4th pillar (Graphic Design) was documented in drive audit files but missing from the web directory.
