3\. Component Library Guide
===========================

This is a practical guide for developers building features for the "IA para Todos" application. It focuses on the purpose and common use cases of our core components to help you choose the right tool for the job quickly.

For a complete inventory of all components and their props, refer to the [**Styling, Theming, and Component Inventory**](https://www.google.com/search?q=./2_Styling_and_Theming.md "null") document.

1\. How to Choose the Right Component
-------------------------------------

Our component library is designed to be modular. The key to efficient development is understanding the role of each component. This guide is structured to help you answer the question: "What am I trying to build?"

-   Need to structure a page? See **Layout & Structure**.

-   Need to display a piece of content? See **Core Content Containers**.

-   Building a course or a lesson? See **Building E-Learning Experiences**.

2. Layout & Structure
----------------------

These components form the skeleton of the application.

-   **`<AppLayout>`**: This is the root layout for the entire application and is rendered automatically in `App.tsx`. As a developer creating a new page, you do not need to interact with this component directly. It handles rendering the global `Navbar` and providing a `<main>` area for your page content.

-   **`<PageSection>`**: This is your primary container for any major content block on a page. Use it to wrap sections like "About Us," "Our Features," or "FAQ." It automatically handles consistent vertical spacing, padding, and the animated entrance for the section title.

-   **`<LearningUnitLayout>`**: Use this component **only** when building an e-learning or course page that requires a persistent sidebar for gamification or progress tracking. It creates the necessary two-column structure.

3\. Core Content Containers
---------------------------

These are your go-to components for displaying information within a `PageSection`.

-   **`<Card>`**: This is the default container for any distinct piece of content.

    -   **Use it when:** You need to display a list of items, such as team member profiles, feature descriptions, or course modules in a grid.

-   **`<Accordion>`**: Use this when you need to show or hide supplementary information that isn't critical for the user to see immediately.

    -   **Use it when:** Building an FAQ section or providing optional "hints" within a quiz.

-   **`<TabbedContent>`**: Use this when you need to organize information into distinct, selectable sections within the same component.

    -   **Use it when:** Comparing items side-by-side (like "Good vs. Bad" examples) or separating content by user level (e.g., "Beginner," "Advanced").

-   **`<QuoteBlock>`**: This is specifically for highlighting a quotation.

    -   **Use it when:** You have a testimonial, an expert quote, or a key statement that needs to stand out from the regular text.

4\. Building E-Learning Experiences
-----------------------------------

These specialized components are the building blocks for all our educational missions.

-   **`<MissionBlock>`**: This is the **fundamental wrapper** for all learning activities. Every step in a course should be enclosed in a `MissionBlock`.

    -   **How to use:** Set the `category` prop (`aprender`, `desafio`, `descobrir`, `partilhar`) to define the block's purpose and automatically apply the correct styling and icon.

-   **Interactive Checks**: To test a user's knowledge or decision-making.

    -   **Use `<InlineQuiz>` when:** You need a simple, scenario-based multiple-choice question with immediate feedback.

    -   **Use `<InteractiveNarrative>` when:** You want to start a lesson with a story where the user's choice determines the initial feedback.

-   **Gamification**: To reward progress and engagement.

    -   **Implementation:** Use the `useGamificationV2` hook to manage the user's score.

    -   **Displaying Progress:** Use `<PointsTrackerV2>` and `<GamificationSidebar>` (within a `<LearningUnitLayout>`) to show the user's points and progress.

    -   **Notifications:** The `GamificationNotificationV2` component is automatically triggered by the hook to display reward messages.

5\. Showcase & Marketing Components
-----------------------------------

When building marketing-focused pages or visually rich dashboards, use the components from the `/showcase` directory.

-   **Use `<StatsGroup>` when:** You need to display key metrics or KPIs in an impactful banner.

-   **Use `<ProgressCard>` when:** You need a dashboard-style card to show the status of a project.

-   **Use `<EmailCaptureBanner>` when:** You need to add a newsletter subscription form.
