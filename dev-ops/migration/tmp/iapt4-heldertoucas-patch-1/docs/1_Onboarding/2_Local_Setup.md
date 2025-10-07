2\. Local Development Setup
===========================

This guide provides step-by-step instructions to get the "IA para Todos" application running on your local machine. Following these steps will ensure your environment is configured correctly to work with all the project's features.

2.1. Prerequisites
------------------

Before you begin, ensure you have the following installed on your system:

-   **Node.js:** Version 18.x or higher is recommended.

-   **npm:** This is the Node.js package manager and is included with your Node.js installation.

You can verify your Node.js version by running `node -v` in your terminal.

2.2. Installation
-----------------

1.  Clone the Repository:

    Open your terminal, navigate to the directory where you want to store the project, and run the following command:

    ```
    git clone https://github.com/your-username/ia-para-todos.git
    cd ia-para-todos

    ```

2.  Install Dependencies:

    This project uses npm to manage its dependencies. Run the following command from the root of the project directory to install them:

    ```
    npm install

    ```

3.  **Gemini Session Logs:**

    This project uses the Gemini CLI agent, and session logs are stored in the `/gemini-sessions` directory. These logs provide a chronological record of changes made and tasks completed during development sessions, forming a key part of our AI-assisted development workflow.

2.3. Environment Variables (Critical Step)
------------------------------------------

The application requires API keys and service URLs to connect to the database and AI services. These are managed through a local environment file.

1.  Create the Environment File:

    In the root directory of the project, create a new file named .env.local.

    > **Note:** The project's `.gitignore` file is already configured to ignore `.env.local`, so you can be sure your secret keys will never be committed to version control.

2.  Add the Variables:

    Copy the following template into your new .env.local file. You will need to replace the placeholder text with your actual keys and URLs.

    **IMPORTANT:** Because this project is built with **Vite**, all environment variables that need to be accessed in the frontend code **must** be prefixed with `VITE_`.

    ```
    #
    # Supabase Credentials (Required for database interaction)
    #
    VITE_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
    VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_PUBLIC_KEY"

    #
    # AI Service API Keys (Required for the "Fábrica de Prompts")
    # The application has a fallback system, but at least one is recommended for full functionality.
    #
    VITE_API_KEY="YOUR_GOOGLE_GEMINI_API_KEY"
    VITE_OPENROUTER_API_KEY="YOUR_OPENROUTER_API_KEY"
    VITE_HUGGINGFACE_API_KEY="YOUR_HUGGINGFACE_API_KEY"

    ```

    You can find your Supabase keys in your project's **Settings > API** dashboard. The AI service keys must be obtained from their respective platforms.

2.4. Running the Development Server
-----------------------------------

Once the dependencies are installed and your environment variables are configured, you can start the local development server:

```
npm run dev

```

The application should now be running and accessible at **http://localhost:5173**. The server supports Hot Module Replacement (HMR), so most changes you make to the code will be reflected in the browser instantly without a full page reload.
