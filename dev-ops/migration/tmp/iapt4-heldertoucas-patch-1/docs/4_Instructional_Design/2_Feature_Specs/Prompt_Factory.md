Functional Specifications: AI Prompt Factory
============================================

1\. Overview and Objective
--------------------------

The objective of this application is to create a pedagogical and interactive tool that teaches novice users how to build effective prompts for Artificial Intelligence models. The application guides the user through a structured process, from selecting a general goal to creating a specific prompt and generating a result.

The primary focus is on **learning by doing**, demystifying "prompt engineering" through a system of templates and reusable components.

2\. Core User Flow
------------------

The user experience is divided into four main states, following a logical progression.

-   **State 0: Welcome Screen**

    -   **Objective:** Create a focused and inviting entry point.

    -   **Functionality:** A full-screen hero section with a dynamic title. The main application is revealed only after the user clicks the "Start Creating" button.

-   **State 1: Category Selection**

    -   **Objective:** Allow the user to choose the type of task they want to perform.

    -   **Functionality:** The app presents a list of prompt "Categories" (e.g., "Generate Ideas," "Write Emails").

-   **State 2: Recipe Selection**

    -   **Objective:** Within a category, the user chooses a specific prompt template ("Recipe").

    -   **Functionality:** Displays a list of "Recipes" based on the previous category, showing an icon, title, and average user rating.

-   **State 3: Prompt Construction and Generation**

    -   **Objective:** The user customizes the recipe by filling in its variables and generates a result.

    -   **Functionality:**

        1.  **Prompt Assembly:** The recipe is presented with dropdown menus for each variable, and the "Final Prompt" is updated in real-time.

        2.  **Content Generation:** The "Generate with AI" button sends the final prompt to the API service. The response (text or image) is displayed, with support for text streaming.

        3.  **Context:** The prompt that generated the response is displayed above the result.

3\. Technical Implementation Details
------------------------------------

### Component Breakdown

The user flow is implemented using a set of specialized React components:

-   **`PromptFactoryApp.tsx`**: The main state machine that manages the current step (`category`, `recipe`, `create`, `result`) and orchestrates the entire user experience.

-   **`CategorySelector.tsx`**: Renders the grid of available categories for the first step.

-   **`RecipeSelector.tsx`**: Renders the list of available "recipes" for the selected category.

-   **`PromptBuilder.tsx`**: The core interactive component where users customize the selected recipe using dropdowns to build the final prompt.

-   **`GenerationResult.tsx`**: Displays the output from the AI, whether it's text or an image. It also contains the `Rating` component for user feedback.

### Data Models (`types/prompt-factory.ts`)

-   **`Category`**: Defines the structure for a prompt category, including an `id`, `title`, and `icon_name`.

-   **`Recipe`**: Defines the structure for a prompt template, including its `id`, `categoryId`, `title`, `template` string, `placeholders` (an array of objects defining the dropdowns), `advanced_tips`, and `fallback_outputs`.

### API Logic (`services/prompt-factory-api.ts`)

The application's backend logic is handled on the frontend for simplicity, with security managed by environment variables.

-   **Content Generation (`api.generate`)**:

    -   Orchestrates a fallback cascade of calls to AI providers (Gemini → OpenRouter → Hugging Face).

    -   Handles text streaming and image response formatting.

    -   Implements the final fallback to a static response from the database if all services fail.

-   **Recipe Rating (`api.rateRecipe`)**:

    -   Calls a secure Remote Procedure Call (RPC) function in Supabase (`increment_recipe_rating`) to update a recipe's score without exposing direct write permissions.

4\. Gamification and Feedback Mechanisms
----------------------------------------

### Points and Reward System (`hooks/useGamification.ts`)

-   **Objective:** To encourage experimentation and reward user progress.

-   **Logic:**

    1.  **Point Accumulation:** The user earns 1 point for each successful **AI generation** and for each **prompt copy**. Points are stored in `localStorage`.

    2.  **Progression Bar:** The `PointsTracker.tsx` component displays the user's progress toward the goal of 15 points.

    3.  **Notifications:** The `GamificationNotification.tsx` component displays encouraging messages at key milestones (1, 5, and 10 points).

    4.  **Final Reward:** Upon reaching 15 points, the `MedalPopup.tsx` is displayed, providing a link to claim a digital badge.

### Recipe Rating System

-   **Objective:** To allow the community to identify the most useful recipes (social proof).

-   **Logic:**

    -   After each generation, the `Rating.tsx` component allows the user to rate the recipe from 1-5 stars.

    -   The vote is securely registered in the database via the RPC function.

    -   The average rating is displayed in the `RecipeSelector.tsx` component.
