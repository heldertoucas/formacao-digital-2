# V2 Docs: 4. Backend Interaction Guide

This document provides critical instructions for interacting with the shared Supabase backend to ensure data integrity and prevent conflicts with the original "IA para Todos" project.

## 4.1. The Cardinal Rule: Read, Don't Recreate

**The Supabase database is a shared resource.** Your primary responsibility is to prevent breaking the existing application.

*   **Instruction:** **You must not modify the database schema.** Do not add, remove, or alter tables or columns. All data structures are to be treated as read-only from a structural perspective.

## 4.2. Reusing Existing Data Logic

To ensure data consistency and development efficiency, you **must** reuse the existing data-fetching logic.

*   **Instruction:** For fetching data, **always use the existing data-fetching hooks** from the `/hooks` directory and the API services from the `/services` directory. Do not create new functions or hooks to fetch data that is already handled by the existing logic.
*   **Key Files to Reuse:**
    *   `services/supabaseClient.ts`: The initialized Supabase client.
    *   `hooks/useManifestoData.ts`: For all data related to the manifesto.
    *   `hooks/usePromptFactoryData.ts`: For all data related to the prompt factory.
    *   `services/prompt-factory-api.ts`: For interacting with external AI services.

## 4.3. Data Models (Types)

All data structures are already defined by TypeScript types.

*   **Instruction:** Refer to the files in the `/types` directory (e.g., `types/prompt-factory.ts`) as the single source of truth for the shape of the data you receive from the backend hooks.

## 4.4. Creating New Logic

If the new V2 website requires features that interact with **entirely new data**, you must first get approval to create new tables in the Supabase schema. Once approved, you can create new hooks and services to interact with those new tables, following the existing architectural patterns.
