# Deployment with Vercel

Deploying our Next.js application is a straightforward process using **Vercel**, the platform created by the makers of Next.js.

### Prerequisites

*   Your project code has been pushed to a GitHub repository.
*   You have an account with Vercel (you can sign up with your GitHub account).

### One-Time Setup

1.  **Log in to Vercel:** Go to [vercel.com](https://vercel.com/) and log in.
2.  **Import Project:** From your Vercel dashboard, click "Add New..." -> "Project".
3.  **Import Git Repository:** Find and select the GitHub repository for this project. Vercel will automatically detect that it is a Next.js application.
4.  **Configure Project:** Vercel will pre-fill all the necessary build settings. You do not need to change anything.
5.  **Deploy:** Click the "Deploy" button.

That's it! Vercel will now build and deploy your application. Once finished, you will be provided with a public URL.

### Continuous Deployment

After the initial setup, every time you push a new commit to the `main` branch of your GitHub repository, Vercel will automatically trigger a new build and deploy the changes. This means your live application will always be in sync with your main codebase.
