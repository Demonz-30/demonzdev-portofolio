# DEMONZDEV — SECURITY MAINTENANCE PLAYBOOK

**Document ID:** `DEMONZDEV-SEC-PLAYBOOK-20261122`  
**Purpose:** Standard Operating Procedures (SOP) for Routine Security & Dependency Maintenance  
**Target:** DEMONZDEV Portfolio Production Operations  
**Audience:** Site Maintainer, DevOps & Engineering Team  

---

## 1. Routine Maintenance Schedule

| Cadence | Operational Task | Tool / Command | Verification Criteria |
| :--- | :--- | :--- | :--- |
| **Weekly** | Dependency Vulnerability Scan | `npm audit` | 0 Critical, 0 High vulnerabilities |
| **Bi-Weekly** | GitHub Actions Health Check | `gh run list --limit 10` | 100% CI pass rate |
| **Monthly** | Upstream Dependency Review | `npm outdated` | Review new semver patches for Next.js, React, Sharp |
| **Monthly** | Security Headers & SSL Check | `curl -I https://demonzdev.my.id` | HSTS, CSP, and X-Content-Type-Options active |
| **Quarterly** | Action Pin Hash Renewal | GitHub API / `gh api` | Update pinned commit SHAs to latest verified releases |
| **Bi-Annual** | Asset & Portfolio Integrity Audit | Evidence matrix review | Verify all claims against live repositories and drives |

---

## 2. Standard Operating Procedures (SOP)

### SOP-01: Applying Dependency Patches
1. Create a dedicated branch:
   ```bash
   git checkout -b security/dep-update-$(date +%Y%m%d)
   ```
2. Inspect outdated packages:
   ```bash
   npm outdated
   ```
3. Update specific packages manually in `package.json` to compatible minor/patch releases. **Never run `npm audit fix --force`**.
4. Install and regenerate lockfile:
   ```bash
   npm install
   ```
5. Run code verification suite:
   ```bash
   npm run lint
   npx tsc --noEmit
   npm run build
   ```
6. Verify static output integrity:
   ```bash
   test -f out/index.html && test -f out/sitemap.xml
   ```

### SOP-02: Updating GitHub Actions Pinned Commits
1. Identify new action releases (e.g. `actions/checkout@v4.3.0`).
2. Query the exact commit SHA:
   ```bash
   gh api repos/actions/checkout/commits/v4.3.0 --jq .sha
   ```
3. Update `.github/workflows/*.yml` with the full 40-character SHA and comment:
   ```yaml
   uses: actions/checkout@<FULL_40_CHAR_SHA> # v4.3.0
   ```
4. Test in a pull request before merging to `master`.

### SOP-03: Responding to a Security Vulnerability / Secret Incident
1. **Secret Exposure:**
   - Immediately revoke and rotate the secret in the third-party provider dashboard (e.g., GitHub, Cloudflare, OpenAI).
   - Remove the secret from working code.
   - Run `git log` and `git filter-repo` / BFG Repo-Cleaner if accidentally committed to history.
   - Push updated commits and notify stakeholders.
2. **Framework Vulnerability (Next.js / React):**
   - Check official Next.js advisories: `https://github.com/vercel/next.js/security/advisories`.
   - Upgrade `next` in `package.json` to the patched release.
   - Validate build and static export output.
   - Deploy immediately through the standard CI pipeline.

---

## 3. Rollback Playbook

If a production deployment introduces regressions or unexpected rendering issues:

### Rapid Rollback via Git:
1. Revert `master` to the last known-good production commit:
   ```bash
   git checkout master
   git reset --hard ed99c1104a22cbe91d46fb104d5a10f8067746c5
   git push origin master --force-with-lease
   ```
   *(Note: Only use in genuine emergency rollback scenarios; preferred method is `git revert`)*.

### Preferred Rollback via Git Revert:
```bash
git checkout master
git revert -m 1 <BAD_MERGE_SHA>
git push origin master
```

### Cloudflare Pages Dashboard Rollback:
1. Log in to Cloudflare Dashboard $\rightarrow$ **Workers & Pages**.
2. Select **`demonz-portfolio`**.
3. Under **Deployments**, locate the last known-good deployment (e.g. `ed99c11`).
4. Click **Manage deployment** $\rightarrow$ **Rollback to this deployment**.
