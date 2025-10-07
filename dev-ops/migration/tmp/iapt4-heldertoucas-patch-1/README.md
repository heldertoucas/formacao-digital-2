IA para Todos - Aplicação Web (React SPA)
=========================================

This repository contains the official web application for "IA para Todos," a Single Page Application (SPA) built with React, TypeScript, and Vite. The project serves as an educational platform, a public manifesto for a more humane AI, and a hub for interactive tools like the "Fábrica de Prompts."

Quick Start
-----------

Before you begin, ensure you have **Node.js v18.x or higher** installed.

1.  **Clone and Install:**

    ```
    git clone https://github.com/your-username/ia-para-todos.git
    cd ia-para-todos
    npm install

    ```

2.  Configure Environment:

    Create a .env.local file in the root directory. See the full Local Setup Guide for details on the required variables.

3.  **Run Development Server:**

    ```
    npm run dev

    ```

    The application will be available at `http://localhost:5173`.

Developer Documentation
-----------------------

This project is documented through a series of focused guides located in the `/docs` directory. Whether you're a new developer, an instructional designer, or a project manager, these documents provide all the necessary information to understand, run, and contribute to the project.

### Gemini Session Logs

This project maintains a log of interactions with the Gemini CLI agent. These logs are stored in the `/gemini-sessions` directory and provide a chronological record of changes made, tasks completed, and decisions taken during development sessions. Each log file is a Markdown document summarizing the session's activities, intended to provide context for future interactions with the agent.

### AI-Assisted Development Guidelines

This project leverages an AI assistant to streamline the development workflow. Key processes are guided by Markdown documents located in the `/ai-dev-tasks` directory:

-   **`create-prd.md`**: Defines the process for generating comprehensive Product Requirements Documents (PRDs) from initial user prompts.
-   **`generate-tasks.md`**: Outlines the methodology for creating detailed, step-by-step task lists based on approved PRDs.
-   **`process-task-list.md`**: Provides guidelines for managing and executing tasks, including protocols for marking completion, running tests, and committing changes.

These guidelines ensure consistency and efficiency in how features are planned, implemented, and tracked.

### 1\. Onboarding

-   [**1.1. Introduction**](https://www.google.com/search?q=./docs/1_Onboarding/1_Introduction.md "null")**:** Start here for a high-level overview of the project's vision, pedagogical philosophy, and technology stack.

-   [**1.2. Local Setup Guide**](https://www.google.com/search?q=./docs/1_Onboarding/2_Local_Setup.md "null")**:** A complete, step-by-step guide to getting the project running on your local machine.

### 2\. Frontend Development

-   [**2.1. Frontend Architecture**](https://www.google.com/search?q=./docs/2_Frontend_Development/1_Architecture.md "null")**:** A deep dive into the application's structure, including routing, state management, and feature flags.

-   [**2.2. Styling, Theming, and Component Inventory**](https://www.google.com/search?q=./docs/2_Frontend_Development/2_Styling_and_Theming.md "null")**:** The definitive guide to the design system, covering design tokens, visual assets, and a complete inventory of all reusable components.

-   [**2.3. Component Library Guide**](https://www.google.com/search?q=./docs/2_Frontend_Development/3_Component_Library.md "null")**:** A practical guide focused on the purpose and common use cases of the core UI components.

-   [**2.4. Playbook: Creating New Pages**](https://www.google.com/search?q=./docs/2_Frontend_Development/4_Creating_New_Pages.md "null")**:** A step-by-step checklist for creating and integrating new pages into the application.

### 3\. Backend and APIs

-   [**3.1. Supabase Backend Guide**](https://www.google.com/search?q=./docs/3_Backend_and_APIs/1_Supabase_Guide.md "null")**:** Covers the database schema, security rules, and the established patterns for fetching and mutating data.

-   [**3.2. External AI Services Guide**](https://www.google.com/search?q=./docs/3_Backend_and_APIs/2_External_AI_Services.md "null")**:** Explains the resilient fallback cascade system for integrating with services like Google Gemini, OpenRouter, and Hugging Face.

### 4\. Instructional Design

-   [**4.1. Pedagogical Guide**](https://www.google.com/search?q=./docs/4_Instructional_Design/1_Pedagogical_Guide.md "null")**:** The official manual for designing learning missions, detailing our pedagogical principles and the modular block system.

-   [**4.2. Feature Specs: Prompt Factory**](https://www.google.com/search?q=./docs/4_Instructional_Design/2_Feature_Specs/Prompt_Factory.md "null")**:** The functional and technical specifications for the "Fábrica de Prompts" interactive tool.

### 5\. Deployment and Maintenance

-   [**5.1. Production Deployment Guide**](https://www.google.com/search?q=./docs/5_Deployment_and_Maintenance/1_Production_Deployment.md "null")**:** A checklist for configuring and deploying the application to a production environment on Vercel.
