2\. Styling, Theming, and Component Inventory
=============================================

This guide explains the styling philosophy and provides a definitive catalog of the design system, visual assets, and reusable components for the "IA para Todos" application. It is the source of truth for any developer focusing on the application's style and user interface.

2.1. Core Philosophy & Design Rules
-----------------------------------

Our approach is designed for consistency, maintainability, and rapid development.

### Design Philosophy

We use a **utility-first** approach with Tailwind CSS, built upon a system of **CSS variables (design tokens)** defined in `index.css`. This ensures that our styling is not arbitrary; it follows a predefined system, which makes the entire application theme-aware and visually consistent.

### Design Rules

1.  **Token First:** Always prefer using the application's design tokens (e.g., `bg-pcd-accent`, `text-pcd-text-dark`) over hardcoded Tailwind colors (e.g., `bg-blue-500`). This is the most important rule for ensuring theme compatibility.

2.  **Component First:** Before creating a new UI element, always check the inventory below to see if a suitable component already exists.

3.  **Consistency over Customization:** Adhere to the established patterns for typography, spacing, and shadows to maintain a cohesive user experience.

2.2. Design Tokens & Primitives
-------------------------------

All our design tokens are defined as CSS variables in `index.css` and mapped to Tailwind classes in `index.html`.

### Color Themes & Palette

-   **Why:** A themable system allows the application's visual identity to be changed easily for different contexts (e.g., different courses or events) without refactoring components.

-   **Implementation:** The application has five theme variants: **Blue** (default), **Purple**, **Green**, **Pink**, and **Orange**. Applying a theme class (e.g., `.theme-purple`) to a container swaps the `--pcd-accent-color` and `--pcd-accent-light-color` variables for all child elements.

-   **Relevant Files:** `index.css` (for variable definitions), `src/config/appConfig.ts` (for mapping themes to routes).

-   **UI & Text Colors:**

    -   `--pcd-page-bg`: #F8F9FE (Page Background)

    -   `--pcd-card-bg`: #FFFFFF (Card Background)

    -   `--pcd-bg-soft`: #F9FAFB (Soft Background)

    -   `--pcd-border`: #E5E7EB (Borders)

    -   `--pcd-text-dark`: #111827 (Primary Text)

    -   `--pcd-text-light`: #6B7280 (Secondary Text)

### Typography

-   **Why:** Using a distinct font for headings (**Lexend**) and another for body text (**Inter**) creates a clear visual hierarchy and improves readability.

-   **Implementation:** Fonts are imported in `index.html` and applied via the `font-lexend` and `font-sans` Tailwind classes.

### Shadows

-   **Why:** Standardized shadows create a consistent sense of depth and elevation across the UI.

-   **Implementation:** Defined in the `tailwind.config` script in `index.html`.

    -   `shadow-card`: The standard shadow for card elements.

    -   `shadow-hero`: A more pronounced shadow for hero sections.

2.3. Visual Assets Inventory
----------------------------

### Logos

-   **Why:** Centralized logo components ensure brand consistency.

-   **Implementation:**

    -   `StaticLogo.tsx`: The standard, non-animated logo.

    -   `AnimatedLogo.tsx`: The animated version used in the main header.

-   **Location:** `/components/`

### Iconography

-   **Why:** Using a single icon library with a consistent style creates a clean and predictable visual language for users.

-   **Implementation:**

    -   **Library:** **Remix Icon**, implemented via the `<RemixIcon />` component.

    -   **Style Convention:** We exclusively use the **Line** style (e.g., `user-line`) for a modern aesthetic.

-   **Location:** `components/ui/RemixIcon.tsx`

### Illustrations

-   **Why:** Custom illustrations give the application a unique personality and help to visually explain concepts.

-   **Implementation:** Each illustration is a standalone React component.

-   **Location:** `/components/illustrations/`

-   **Inventory:** `AchievementIllustration`, `CopilotHeroV3Illustration`, `ManifestoIllustration`, `TeamworkIllustration`, `LearningIllustration`, `ProjectShowcaseIllustration`, `PromptIllustration`, `CourseCompletionIllustration`, `PotentialIllustration`.

2.4. Component Inventory
------------------------

### Core UI Components

-   **Why:** These are the foundational, general-purpose building blocks of the UI, designed for maximum reusability.

-   **Location:** `/components/ui/`

-   **Inventory:**

    -   `Button.tsx`: Standard button with `primary`, `secondary`, and `ghost` variants.

    -   `Card.tsx`: The base container for most content blocks.

    -   `Accordion.tsx`: For expandable content sections.

    -   `TabbedContent.tsx`: For organizing content into selectable tabs.

    -   `QuoteBlock.tsx`: A styled component for featuring quotations.

    -   `GuidelineCard.tsx`: A large, visually distinct card for important rules or guidelines.

    -   `Carousel.tsx`: A generic slider for any content.

    -   `SlideCarousel.tsx`: A "PowerPoint-style" carousel with background images.

### E-learning & Gamification Components

-   **Why:** These specialized components are designed to make the learning experience active, engaging, and rewarding.

-   **Location:** `/components/learning/`

-   **Inventory:**

    -   `MissionBlock.tsx`: The primary wrapper for all learning activities, styled by category (`aprender`, `desafio`, `descobrir`, `partilhar`).

    -   `InlineQuiz.tsx`: For multiple-choice knowledge checks.

    -   `InteractiveNarrative.tsx`: A scenario-based component with selectable options.

    -   `SentenceBuilder.tsx`: A simulation of AI next-token prediction.

    -   `PromptCard.tsx`: Displays a sample prompt with a "copy and open" action.

    -   `CourseTaskCard.tsx`: A card for displaying a course task with an image and prompt.

    -   `GamificationSidebar.tsx` & `PointsTrackerV2.tsx`: Components for displaying user points and progress.

    -   `GamificationNotificationV2.tsx`: A toast-like notification for rewards.

    -   `StatInfographic.tsx` & `NewsSummaryBlock.tsx`: For displaying data and AI-generated news summaries.

    -   `PrincipleCard.tsx`, `SuggestionCard.tsx`, `SuggestionForm.tsx`: A suite of components for the manifesto co-creation feature.

### Showcase Components

-   **Why:** These are modern, visually distinct components, often inspired by external examples, adapted to our design system. They are useful for building marketing pages or dashboards.

-   **Location:** `/components/showcase/`

-   **Inventory:**

    -   `StatsGroup.tsx`: A banner for displaying key metrics or KPIs.

    -   `ProgressCard.tsx`: A dashboard card for tracking project progress.

    -   `ListingCard.tsx`: A card for items that require an image gallery and CTA (e.g., a marketplace).

    -   `GradientBorderCard.tsx`: A card with a gradient border to draw special attention.

    -   `EmailCaptureBanner.tsx`: A banner with an input field for newsletter subscriptions.

    -   `FeatureGridSection.tsx`: A two-column section to highlight key features.

2.5. Layouts & Full Page Sections
---------------------------------

### Layouts

-   **Why:** Layout components define the main structure of pages, ensuring a consistent and responsive design.

-   **Location:** `/components/layout/`

-   **Inventory:**

    -   `AppLayout.tsx`: The primary, persistent layout component that acts as the shell for the entire application. It renders the `Navbar` and the main page content.

    -   `Navbar.tsx`: The unified navigation component. It features a dynamic background that is transparent when at the top of a page and becomes a solid color on scroll.

    -   `PageSection.tsx`: The standard wrapper for all major content sections within a page.

    -   `LearningUnitLayout.tsx`: The two-column layout for course pages that require a sidebar.

    -   `Footer.tsx`: The standard application footer.

    -   `StudioNav.tsx`: The developer-only navigation dropdown.

### Pre-built Sections

-   **Why:** The application includes a wide variety of pre-composed sections that can be quickly assembled to build new pages.

-   **Locations:** `/components/heros/`, `/components/`

-   **Examples:**

    -   **Hero Sections:** `HeroSection` (Main), `ComponentLibraryHero`, `PromptFactoryHero`, `CopilotCourseHero` (V1, V2, V3), and `ManifestoCoCreationHero`.

    -   **Content Sections:** `ManifestoSection`, `AboutSection` (V1-V5), `PilarV1_FeatureSplit` (and all other Pilar variations), `FeaturesSection`, `FaqSection`, `StatsSection`, etc.

2.6. Hooks & Effects
--------------------

### Custom Hooks

-   **Why:** Custom hooks encapsulate complex UI logic, keeping components clean and focused.

-   **Location:** `/hooks/`

-   **Inventory:**

    -   `useCountUp.ts`: Animates a number counting up when it becomes visible.

    -   `useGamificationV2.ts`: Manages the logic for the points system.

    -   `useFloatingEmoji.ts`: Triggers a floating emoji animation from a source element.

### CSS Animations

-   **Why:** Reusable keyframe animations provide a consistent motion language.

-   **Location:** `index.css`

-   **Inventory:**

    -   `pulse-glow`: A pulsing shadow effect for buttons.

    -   `fade-in-down`: For notifications.

    -   `travel-highlight`: A scanning light effect for generated content.

    -   `fizz-effect`: For reward emojis.

    -   `gentle-float`: A subtle floating animation for decorative shapes.

    -   `mission-reveal-wrapper`: A staggered animation for revealing learning blocks.

2.7. Key UI Patterns
--------------------

Beyond individual components, the application uses established patterns for structuring user experiences.

### Course Progress Pattern

-   **Why:** This pattern gives students a clear and immediate understanding of their journey and progress within a course.

-   **Implementation:** It is implemented in the `MissionMapSidebar` component.

-   **Elements:**

    -   **Overall Progress Bar:** A percentage-based bar showing total course completion.

    -   **Module Checklist:** An itemized list of all learning blocks or modules in the course.

    -   **Status Indicators:** Each module is marked with an icon (e.g., a checkmark) to indicate its status (completed, in-progress, locked).4\. Playbook: Creating New Pages
================================

This guide provides a step-by-step process for creating a new page and integrating it into the "IA para Todos" application. Following this playbook ensures that new pages are consistent with the existing architecture and design system.

Prerequisites
-------------

Before creating a new page, make sure you are familiar with:

-   The project's frontend architecture, especially the hash-based routing system detailed in `1_Architecture.md`.

-   The available content components like `<PageSection>`, documented in the `3_Component_Library.md`.

Step 1: Create the Page Component File
--------------------------------------

All page components reside in the `/components/pages/` directory.

1.  **Create a new file** using PascalCase naming (e.g., `NewExamplePage.tsx`).

2.  **Use the following template** as a starting point. It includes the standard `PageSection` wrapper and the necessary props for navigation. Notice that you no longer need to add a header or footer, as this is handled globally by `AppLayout`.

```
// components/pages/NewExamplePage.tsx

import React from 'react';
import PageSection from '../layout/PageSection';
import type { PageProps } from '../App'; // Import the shared PageProps type

// All pages receive PageProps, which can be used for navigation if needed
const NewExamplePage = ({ navigateTo }: PageProps) => {
    return (
        <>
            <PageSection
                id="section1"
                title={<>Welcome to the <span className="text-pcd-accent">New Page</span></>}
                subtitle="This is where the main content of your page will go."
            >
                {/* Add your components and content here */}
            </PageSection>
            {/* You can add more PageSections or other components here */}
        </>
    );
};

export default NewExamplePage;

```

Step 2: Register the Page in the Router
---------------------------------------

To make your page accessible via a URL, you must add it to the router's configuration.

1.  **Open `src/components/App.tsx`**.

2.  **Import your new page component** at the top of the file.

    ```
    import NewExamplePage from './pages/NewExamplePage';

    ```

3.  **Add a new entry** to the `allPages` array. This object tells the router about your page's path, its label for navigation menus, and which component to render.

    ```
    // src/components/App.tsx

    const allPages: PageDefinition[] = [
        { label: "Página Principal", path: '#/', component: HomePage },
        { label: "Fábrica de Prompts", path: '#/prompt-factory', component: PromptFactoryPage },
        // ... other pages
        // Add your new page definition here
        { label: "New Example Page", path: '#/new-example', component: NewExamplePage },
    ];

    ```

Step 3: (Optional) Assign a Theme
---------------------------------

If you want your page to have a specific accent color, you can assign a theme to its route.

1.  **Open `src/config/appConfig.ts`**.

2.  **Add a new entry** to the `pageThemes` object, mapping your new path to one of the available theme classes (e.g., `'theme-green'`).

    ```
    // src/config/appConfig.ts

    pageThemes: {
        '#/': '',
        '#/prompt-factory': 'theme-purple',
        // ... other themes
        // Add the theme for your new page here
        '#/new-example': 'theme-green',
    },

    ```

Step 4: Test Your New Page
--------------------------

Run the development server (`npm run dev`) and navigate to the hash path you defined (e.g., `http://localhost:5173/#/new-example`). Your new page should now be visible and fully integrated into the application.
--

Run the development server (`npm run dev`) and navigate to the hash path you defined (e.g., `http://localhost:5173/#/new-example`). Your new page should now be visible and fully integrated into the application.
