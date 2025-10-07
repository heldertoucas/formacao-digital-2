# V2 Docs: 2. Local Setup

This guide provides the setup instructions for the new V2 project.

## 2.1. Installation

1.  **Clone the Repository:** Clone the project repository to your local machine.
2.  **Install Dependencies:** Run `npm install` from the root of the project directory.

## 2.2. Environment Variables (Critical Step)

To connect to the project's shared backend, you must configure your local environment variables.

1.  **Create the File:** In the root directory, create a file named `.env.local`.

2.  **Add Variables:** Add the following variables to the file. **You must use the exact same Supabase credentials as the "IA para Todos" project.**

    ```
    # Supabase Credentials (Required)
    # Use the same keys from the original project to connect to the shared database.
    VITE_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
    VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_PUBLIC_KEY"

    # Add any new, V2-specific API keys below, if needed.
    # VITE_NEW_SERVICE_API_KEY="YOUR_KEY"
    ```

## 2.3. Running the Development Server

Once your dependencies are installed and environment variables are set, run the local development server:

```
npm run dev
```
