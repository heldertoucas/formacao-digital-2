You will act as an **Expert Full-Stack and DevOps Engineer** with specializations in **Turborepo monorepo architecture**, **TypeScript**, and modern frontend tooling. Your task is to conduct a comprehensive audit of my entire codebase to verify that all tools are correctly configured, integrated, and functioning according to best practices.

-----

### \#\# Project Context

The project is a monorepo for a digital literacy platform. It consists of a main `portal` application (Next.js) which consumes several local, shared packages (`ui`, `lib`, `tailwind-config`, etc.). The goal is a clean, scalable, and maintainable architecture. The full file tree is provided at the end of this prompt for your analysis.

-----

### \#\# Sequential Audit Task List

You must perform the following tasks sequentially and report on each one. Do not proceed to the next step if a critical error is found in a previous one.

**1.  Global Health Check:**
\* Analyze the root `package.json`, `turbo.json`, and `pnpm-workspace.yaml`.
\* Simulate running `pnpm install` and `pnpm turbo build` from the root. Report any potential dependency conflicts, workspace issues, or build pipeline errors you foresee.

**2.  Shared Configuration Audit (`packages/*-config`):**
\* **`@repo/typescript-config`**: Verify that `base.json` and `react-library.json` contain robust, standard configurations.
\* **`@repo/eslint-config`**: Verify that `react-internal.js` correctly extends recommended configurations and is properly set up.
\* **`@repo/tailwind-config`**: Verify `tailwind.config.ts` and `postcss.config.js`. Ensure the `content` paths are correctly configured to scan all `apps` and `packages` for class names. Confirm that the `daisyui` plugin is correctly registered.

**3.  Shared Library Audit (`packages/ui` & `lib`):**
\* **`@repo/ui`**:
\* Verify its `package.json` correctly lists dependencies and uses the shared configs (`workspace:*`).
\* Check its local `tailwind.config.ts` and `.eslintrc.js` to confirm they correctly extend the shared configs.
\* **Crucially, audit the `.storybook` configuration** (`main.ts`, `preview.ts`). Verify that it's set up to use Vite, find all stories, and correctly import the global CSS file to apply Tailwind styles.
\* **`@repo/lib`**: Verify its `package.json` and `tsconfig.json` are correctly configured for a non-React, pure TypeScript library.

**4.  Main Application Audit (`apps/portal`):**
\* Verify its `package.json` correctly depends on the shared packages (`@repo/ui`, `@repo/lib`, etc.) using the `workspace:*` protocol.
\* Verify its `tailwind.config.ts`, `postcss.config.mjs`, and `.eslintrc.mjs` correctly extend the shared configurations.
\* Verify its `next.config.ts` is valid.
\* Verify that the global CSS file (`src/app/globals.css`) correctly imports the Tailwind directives and is properly imported into the root layout (`src/app/layout.tsx`).

**5.  Consistency and Best Practices Review:**
\* Scan for any inconsistencies in configuration file extensions (`.js`, `.mjs`, `.ts`).
\* Identify any redundant or conflicting dependencies.
\* Flag any deviations from the established architectural patterns (e.g., a "shared" component hardcoded inside `apps/portal`).

-----

### \#\# Required Output Format

You must provide your audit as a single, detailed markdown report with the following structure:

**\#\# Codebase Configuration Audit Report**

**\#\#\# 1. Overall Status**
A brief, one-paragraph summary of the project's configuration health (e.g., "Excellent," "Good with minor issues," "Critical issues found").

**\#\#\# 2. Issues Found & Analysis**
A detailed list of all issues, categorized by severity. For each issue, provide:

  * **Severity:** `Critical` | `Warning` | `Suggestion`
  * **Package(s) Affected:** (e.g., `apps/portal`, `packages/ui`)
  * **File(s):** (e.g., `tailwind.config.ts`)
  * **Description:** A clear explanation of the problem.

**\#\#\# 3. Recommended Actions**
A sequential, numbered list of actions to fix the identified issues. For each action, provide:

  * The file to be modified.
  * A clear code block showing the **exact changes** (additions or replacements) required.

-----

### \#\# Codebase File Tree

```
[Paste the complete output of your `tree -I "node_modules|..."` command here]
```