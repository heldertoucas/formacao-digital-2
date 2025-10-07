# V2 Docs: 1. Project Genesis

## 1.1. Project Vision

*   **Project Goal:** `[Describe the new project's primary goal here. What is its purpose? Who is it for?]`
*   **Example:** "This project is a marketing website for a new AI-powered writing assistant. The target audience is content creators and marketing professionals."

## 1.2. Critical Relationship to "IA para Todos"

This section contains essential instructions for the development agent.

*   **Shared Backend:** This new project uses the **exact same Supabase database** as the "IA para Todos" project. **Do not alter the database schema in any way.** All data fetching and manipulation must be done through the existing, approved API patterns.

*   **Separate Frontend:** This project has a **completely different and independent design and user interface.** **Do not reuse any React components from the `/components` directory of the original project.** All new components must be built from scratch according to the new design system defined in `docs-v2/3_New_Design_System.md`.

## 1.3. Core Design Philosophy

*   **Aesthetic:** `[Describe the new design aesthetic here. Be specific. Examples: "The design is minimalist, with a dark-mode theme, sharp corners, and a focus on typography." or "The design is professional and corporate, using a light theme with a blue accent color and soft, rounded corners."]`

## 1.4. Technology Stack

The technology stack for this project is identical to the "IA para Todos" project:

*   **Framework:** React (with TypeScript)
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Backend & Database:** Supabase
