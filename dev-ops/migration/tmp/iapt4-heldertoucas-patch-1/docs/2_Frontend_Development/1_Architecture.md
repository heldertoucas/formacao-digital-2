1\. Frontend Architecture
=========================

This document outlines the high-level architecture of the "IA para Todos" frontend. Understanding these core concepts is essential for building new features that are consistent, maintainable, and scalable.

1.1. Philosophy and Folder Structure
------------------------------------

Our architecture is designed to be modular and intuitive, with a clear separation of concerns.

-   **/components**: This is the heart of the application, containing all React components, organized by function.

    -   **/ui**: Small, reusable, and generic components like `Button.tsx` and `Card.tsx`. These are the fundamental building blocks of the interface.

    -   **/layout**: Components that define the structure of the application. This includes the persistent `<AppLayout.tsx>` which acts as the shell for all pages, and the unified `<Navbar.tsx>` component.

    -   **/learning**: Specialized components designed for educational and interactive experiences, like `MissionBlock.tsx` and the entire `prompt-factory/` suite.

    -   **/pages**: Large components that represent a full page or view within the application (e.g., `HomePage.tsx`, `PromptFactoryPage.tsx`).

    -   **/illustrations**: Standalone, reusable SVG illustration components.

-   **/hooks**: Contains all custom React hooks. This is our primary pattern for encapsulating and reusing stateful logic, such as data fetching (`useManifestoData.ts`) or gamification state (`useGamificationV2.ts`).

-   **/services**: Holds the logic for communicating with external services. This includes initializing the Supabase client (`supabaseClient.ts`) and managing all calls to the various AI APIs (`prompt-factory-api.ts`).

-   **/src/config**: Contains the global application configuration, most importantly `appConfig.ts`.

-   **/docs**: All developer and instructional design documentation resides here, organized into subfolders by topic.

-   **/gemini-sessions**: Contains logs of interactions with the Gemini CLI agent, providing a chronological record of development sessions.

1.2. Routing System
-------------------

The application operates as a **Single Page Application (SPA)**. The core of the application's structure and routing is managed through a hierarchy of three key components:

-   **`components/App.tsx`**: The root component. It manages the main `route` state (based on `window.location.hash`) and the global `navigateTo` function.

    -   **`components/layout/AppLayout.tsx`**: A persistent layout component that wraps the entire application. It receives the current `route` and renders the consistent page structure, including the unified `<Navbar>`. It determines which variant of the navbar to display (`landing` or `internal`) based on the route. This variant prop primarily controls the navbar's content (e.g., simple links vs. dropdown menus), while the visual behavior (a transparent background at the top of the page that becomes solid on scroll) is now consistent across all variants.
-   **`components/AppRouter.tsx`**: This component sits inside the `AppLayout`. Its sole responsibility is to look at the current `route` and render the correct page component (e.g., `HomePage`, `PromptFactoryPage`).

This architecture ensures that the main layout and navigation are stable, preventing the re-rendering of the navbar during page transitions and fixing layout-related bugs.

1.3. State Management
---------------------

We follow a pragmatic approach to state management, preferring React's built-in tools over a large, external library.

-   **Local State:** For state that is confined to a single component, we use the standard `useState` and `useEffect` hooks.

-   **Shared & Complex State:** For logic that is shared across components or involves complex interactions (like data fetching or gamification), we use **custom hooks**. This is the primary state management pattern in the project. It encapsulates the logic, making the components that use it cleaner and more focused on the UI.

    -   **Example:** `hooks/useManifestoData.ts` fetches and manages all data related to the manifesto principles and suggestions.

    -   **Example:** `hooks/useGamificationV2.ts` handles the logic for tracking points, unlocking medals, and showing notifications.

-   **Persistent State:** For simple, non-critical data that needs to persist across browser sessions (like gamification points), we use the `localStorage` API directly within our custom hooks.

1.4. Application Configuration & Feature Flags
----------------------------------------------

The file `src/config/appConfig.ts` acts as the central control panel for the application's global behavior and features.

-   **Feature Flags:** The `featureFlags` object allows you to enable or disable entire sections or pages of the application with a simple boolean switch. This is invaluable for phased rollouts, A/B testing, or simplifying the application for specific demos.

-   **Page Theming:** The `pageThemes` object maps routes to specific color themes defined in `index.css`. This allows each page to have a unique accent color while maintaining a consistent overall design system.

-   **Development Toggles:** Flags like `useStudioNav` are used to enable developer-only features, such as the page navigation dropdown, which should be turned off in production builds.

1.5. AI-Assisted Development Workflow
-------------------------------------

The development process in this project is significantly enhanced by an AI assistant, which follows a structured workflow guided by specific Markdown documents in the `/ai-dev-tasks` directory. This ensures a consistent and efficient approach to feature development from conception to completion.

-   **Product Requirements Document (PRD) Creation (`create-prd.md`):
    The AI assists in generating detailed PRDs based on user prompts and clarifying questions. These PRDs serve as the foundational blueprint for new features, outlining goals, user stories, functional requirements, and technical considerations.

-   **Task List Generation (`generate-tasks.md`):
    Once a PRD is approved, the AI generates a step-by-step task list. This breaks down the feature implementation into manageable sub-tasks, guiding developers through the necessary code changes and verifications.

-   **Task Management and Execution (`process-task-list.md`):
    The AI actively manages the task list, guiding the developer through each sub-task. It ensures adherence to coding standards, prompts for testing, and facilitates structured commits. This process includes protocols for marking task completion and maintaining an accurate record of progress.

-   **Session Logging:
    All significant interactions and completed feature implementations are logged in the `/gemini-sessions` directory. These logs provide a comprehensive, chronological history of development sessions, offering valuable context for future work and ensuring continuity across AI interactions.

This workflow aims to improve clarity, reduce onboarding time for new contributors, and maintain high standards of code quality and documentation.
