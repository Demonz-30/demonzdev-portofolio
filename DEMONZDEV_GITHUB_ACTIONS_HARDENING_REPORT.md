# DEMONZDEV — GITHUB ACTIONS & SUPPLY-CHAIN HARDENING REPORT

**Document ID:** `DEMONZDEV-GHA-HARDENING-20261122`  
**Target:** Continuous Integration & Deployment Pipelines (`.github/workflows/`)  
**Standard:** GitHub Actions Security Hardening Guidelines & CIS GitHub Actions Benchmark  
**Status:** **PASSED — PINNED & LEAST PRIVILEGE ENFORCED**

---

## 1. Supply-Chain Hardening Strategy

Unpinned GitHub Actions referenced by mutable tags (such as `@v4` or `@v5`) are subject to tag-mutation supply chain attacks where a compromised upstream repository could execute malicious code inside the runner.

To enforce deterministic supply-chain integrity:
1. Every third-party GitHub Action was pinned to its immutable, full-length 40-character commit SHA verified through the official GitHub API.
2. Least privilege was applied to workflow jobs, restricting `permissions` to read-only (`contents: read`) where write access is not required.
3. Node.js runner version was explicitly aligned with Node.js 22 LTS, eliminating Node.js 20 deprecation warnings.

---

## 2. Pinned Commit SHA Verification Table

| Action Name | Semver Tag | Verified Commit SHA | Verification Source |
| :--- | :--- | :--- | :--- |
| `actions/checkout` | `v4.2.2` | `11bd71901bbe5b1630ceea73d27597364c9af683` | `repos/actions/checkout/commits/v4.2.2` |
| `actions/setup-node` | `v4.1.0` | `39370e3970a6d050c480ffad4ff0ed4d3fdee5af` | `repos/actions/setup-node/commits/v4.1.0` |
| `actions/upload-artifact` | `v4.4.3` | `b4b15b8c7c6ac21ea08fcf65892d2ee8f75cf882` | `repos/actions/upload-artifact/commits/v4.4.3` |
| `actions/configure-pages` | `v5.0.0` | `983d7736d9b0ae728b81ab479565c72886d7745b` | `repos/actions/configure-pages/commits/v5.0.0` |
| `actions/upload-pages-artifact`| `v3.0.1` | `56afc609e74202658d3ffba0e8f6dda462b719fa` | `repos/actions/upload-pages-artifact/commits/v3.0.1`|
| `actions/deploy-pages` | `v4.0.5` | `d6db90164ac5ed86f2b6aed7e0febac5b3c0c03e` | `repos/actions/deploy-pages/commits/v4.0.5` |

---

## 3. Workflow Modifications

### 3.1 `ci.yml` (Isolated Linux CI Verification)
- **Top-Level Permissions:** Restricted to `contents: read`.
- **Job Permissions:** Explicitly assigned `permissions: contents: read`.
- **Node.js Setup:** Updated to `node-version: 22` with `cache: npm`.
- **Integrity Assertions:** Expanded static export validation to include the 4th creative pillar (`out/creative/graphic-design/index.html`).

### 3.2 `deploy-pages.yml` (Deploy Next.js to GitHub Pages)
- **Privilege Separation:**
  - Build Job: Granted strictly `contents: read` and `pages: write` (for artifact staging).
  - Deploy Job: Granted `pages: write` and `id-token: write` (only when triggering GitHub Pages environment deployment).
- **All Steps:** 100% pinned to commit SHAs.
- **Race Condition Protection:** Concurrency group `pages` with `cancel-in-progress: true` prevents concurrent deployment collisions.
