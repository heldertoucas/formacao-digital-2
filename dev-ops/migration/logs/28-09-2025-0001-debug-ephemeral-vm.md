# Session Summary: Debugging Ephemeral VM Environment

**Date:** `2025-09-28`
**Session Focus:** To scientifically test the hypothesis that the Google Cloud Shell environment is ephemeral and does not persist `node_modules` or globally installed tools between sessions.

---

### Accomplishments

-   Created a detailed task file to manage the experiment: `dev-ops/tasks/tasks-debug-ephemeral-environment.md`.
-   **Experiment Step 0.1:** Successfully verified the baseline state, confirming `node_modules` was absent.
-   **Experiment Step 1.1:** Discovered that the `pnpm` package manager itself was not installed.
-   **Experiment Step 1.2 & 1.3:** Successfully installed `pnpm` globally (`npm install -g pnpm`) and then ran `pnpm install` to generate the `node_modules` directory.
-   **Investigation:** Confirmed that configuration files for `Vite` (`vitest.config.ts`) and `Storybook` (`.storybook/main.ts`) are present and correctly located.

### Lessons Learned

-   **Insight:** The ephemeral nature of the Google Cloud Shell environment is more fundamental than initially assumed. It affects not only the project-specific `node_modules` directory but also **globally installed npm packages**.
-   **Action:** The required setup for any new Cloud Shell session must include installing the package manager itself before installing project dependencies.

### Directives for Future Sessions

-   The correct bootstrap procedure for a new Cloud Shell session is:
    1.  `npm install -g pnpm`
    2.  `pnpm install`
