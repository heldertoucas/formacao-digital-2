1\. Production Deployment Guide
===============================

This document provides a definitive guide for configuring and deploying the "IA para Todos" application to a production environment using Vercel.

1.1. Pre-Deployment Checklist
-----------------------------

Before deploying, you must perform these critical configuration and validation steps to ensure the application is secure, optimized, and builds successfully.

### Step 1: Disable Developer Navigation

The application includes a special navigation dropdown (`StudioNav`) for easily switching between pages during development. This must be disabled in production.

1.  **Open:** `src/config/appConfig.ts`

2.  **Change:** Set the `useStudioNav` flag to `false`.

    ```
    // src/config/appConfig.ts
    export const appConfig: AppConfig = {
        // --- GENERAL SETTINGS ---
        useStudioNav: false, // <-- MUST BE false FOR PRODUCTION
        // ...
    };

    ```

### Step 2: Verify `package.json` Dependencies

An invalid package name in `package.json` can cause the `npm install` step to fail during the Vercel build.

1.  **Open:** `package.json`.

2.  **Confirm:** Ensure all dependency names are valid and do not contain characters like `/` (e.g., `"react-dom"`, not `"react-dom/client"`).

3.  **Validate:** Run `npm install` locally one last time to confirm the file is correct.

### Step 3: Validate the Local Build

Build errors, such as malformed JSX, often only appear during the production build process.

1.  **Run the build command** in your terminal:

    ```
    npm run build

    ```

2.  **Fix any errors** that the Vite compiler reports. A successful local build is a strong indicator of a successful deployment.

1.2. Environment Variables for Production
-----------------------------------------

**This is the most critical step for a successful deployment.** Our application uses Vite, which requires that all environment variables exposed to the browser be prefixed with `VITE_`.

1.  **Log in to Vercel** and navigate to your project's **Settings > Environment Variables**.

2.  **Add the following variables.** Ensure the names match exactly, including the `VITE_` prefix.

| Variable Name | Value | Required |
| :---- | :---- | :---- |
| VITE\_SUPABASE\_URL | Your Supabase Project URL | **Yes** |
| VITE\_SUPABASE\_ANON\_KEY | Your Supabase Anon Public Key | **Yes** |
| VITE\_API\_KEY | Your Google Gemini API Key | **Yes** |
| VITE\_OPENROUTER\_API\_KEY | Your OpenRouter API Key | Optional |
| VITE\_HUGGINGFACE\_API\_KEY | Your Hugging Face API Key | Optional |

**Note:** If these variables are missing the `VITE_` prefix, the application will fail to connect to the backend services. After adding or updating variables, you must trigger a new deployment for the changes to take effect.

1.3. Deployment Process
-----------------------

With the pre-deployment checklist complete, you are ready to deploy.

1.  **Commit and Push Your Code:**

    ```
    git add .
    git commit -m "feat: Prepare for production deployment"
    git push

    ```

2.  **Deploy on Vercel:**

    -   If you have already linked your GitHub repository to a Vercel project, the `git push` will automatically trigger a new deployment.

    -   If this is the first time, go to your Vercel dashboard, import the GitHub repository, ensure the framework preset is set to **Vite**, and configure the environment variables as described above before clicking **Deploy**.
