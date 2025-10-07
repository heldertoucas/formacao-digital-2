1\. Supabase Backend Guide
==========================

This document is the complete guide to the Supabase backend for the "IA para Todos" application. It covers project setup, database schema, and the established patterns for interacting with the data from the frontend.

1.1. Introduction & Setup
-------------------------

Supabase serves as our Backend-as-a-Service (BaaS), providing a PostgreSQL database, authentication, and secure API endpoints that allow us to build features quickly without managing a traditional server.

### Initial Project Setup

1.  **Create a Project:** Go to [Supabase](https://supabase.com/ "null") and create a new project.

2.  **Get API Keys:** In your project's dashboard, navigate to **Settings > API**. You will need the **Project URL** and the **`anon` public** key.

3.  **Configure Environment:** Add these keys to your `.env.local` file, making sure to use the `VITE_` prefix as required by our build tool.

    ```
    VITE_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
    VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_PUBLIC_KEY"

    ```

### Client Initialization

The Supabase client is initialized in `services/supabaseClient.ts`. This file contains important logic to gracefully handle missing or invalid credentials, allowing the application to run with local fallback data if a connection to Supabase cannot be established.

1.2. Database Schema
--------------------

The database schema for this application is designed to be modular and will evolve as new features are added. The tables listed here represent the core functionality for the initial pages.

### An Evolving Schema

It is crucial to understand that due to the app's modular nature, the database schema is not static. The tables defined in the setup script below are a **starting point**, not an exhaustive list. As new pages and features (like new courses or interactive tools) are developed, they will likely require new tables and relations. Always refer to the latest version of this guide and the SQL setup script for the most current schema.

### Core Tables

-   **`categories`**: Stores the high-level categories for the "Fábrica de Prompts" (e.g., "Gerar Ideias", "Escrever E-mails").

-   **`recipes`**: Stores the individual prompt templates ("recipes"), linked to a category. Contains the template string, placeholders, and community voting data.

-   **`hero_content`**: Stores dynamic text and emojis for the hero section of the "Fábrica de Prompts".

-   **`manifesto_principles`**: Stores the core principles of the manifesto, including all related content for the co-creation page.

-   **`manifesto_suggestions`**: Stores user-submitted suggestions for the manifesto, along with their status and upvote count.

1.3. Data Access Patterns
-------------------------

To ensure consistency, security, and separation of concerns, all interactions with the Supabase database are handled through custom React hooks.

### Data Fetching (SELECT)

The standard pattern is to create a custom hook (e.g., `usePromptFactoryData`) that encapsulates all the logic for fetching and managing a specific set of data. This keeps our components clean and focused on rendering the UI.

Example: hooks/usePromptFactoryData.ts

This hook fetches both categories and recipes, handles loading and error states, and returns the data ready for use in a component.

```
// Simplified example of the data fetching pattern

export const usePromptFactoryData = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!supabase) {
                setIsLoading(false); // Gracefully handle unconfigured client
                return;
            }
            try {
                const { data: catData, error: catError } = await supabase.from('categories').select('*');
                if (catError) throw catError;
                setCategories(catData || []);

                // ... fetch recipes similarly ...
            } catch (err) {
                // Handle error state
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return { categories, recipes, isLoading };
};

```

### Data Mutation (INSERT, UPDATE)

Direct updates or inserts to tables are restricted by **Row Level Security (RLS)** policies. To securely modify data, we use **Supabase RPC (Remote Procedure Call)** functions. This allows us to define secure, fine-grained operations on the server side.

Example: hooks/useManifestoData.ts

When a user votes on a suggestion, the voteOnSuggestion function doesn't write to the table directly. Instead, it calls a secure PostgreSQL function (vote_on_suggestion) that handles the logic on the server.

```
// Simplified example of the data mutation pattern

const voteOnSuggestion = async (suggestionId: string) => {
    if (!supabase) return;

    // Call the secure server-side function instead of a direct update
    const { error } = await supabase.rpc('vote_on_suggestion', {
        s_id: suggestionId,
        vote_type: 'up',
    });

    if (error) {
        console.error("Error voting on suggestion:", error);
    }
};

```

1.4. Full Setup & Security SQL
------------------------------

This script contains the necessary SQL to set up the **initial** tables for a new Supabase project. Run this in the **SQL Editor** in your Supabase dashboard.

```
-- =================================================================
-- Table Creation
-- =================================================================
CREATE TABLE public.categories (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  icon_name TEXT
);

CREATE TABLE public.recipes (
  id TEXT PRIMARY KEY,
  category_id TEXT REFERENCES public.categories(id),
  title TEXT NOT NULL,
  icon_name TEXT,
  template TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('text', 'image')),
  placeholders JSONB,
  advanced_tips TEXT[],
  fallback_outputs TEXT[],
  total_score INTEGER DEFAULT 0,
  vote_count INTEGER DEFAULT 0
);

-- ... other table creation scripts for manifesto, etc. ...

-- =================================================================
-- Row Level Security (RLS)
-- =================================================================
-- Enable RLS for all tables
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
-- ... enable for all other tables ...

-- Create policies to allow public read-only access
CREATE POLICY "Allow public read-only access to categories" ON public.categories FOR SELECT USING (true);
-- ... create read policies for all other tables ...

-- Create policy to allow anonymous users to insert suggestions
CREATE POLICY "Allow users to insert their own suggestions" ON public.manifesto_suggestions FOR INSERT WITH CHECK (true);

-- =================================================================
-- RPC Functions for Secure Mutations
-- =================================================================
CREATE OR REPLACE FUNCTION increment_recipe_rating(recipe_id_in TEXT, rating_value INT)
RETURNS void AS $$
BEGIN
  UPDATE public.recipes
  SET
    total_score = total_score + rating_value,
    vote_count = vote_count + 1
  WHERE id = recipe_id_in;
END;
$$ LANGUAGE plpgsql;

-- Grant permissions for anonymous users to call the function
GRANT EXECUTE ON FUNCTION public.increment_recipe_rating(TEXT, INT) TO anon;

-- ... other RPC functions and grants ...

```
