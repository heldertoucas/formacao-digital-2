# PRD 0004: Component Library Port & Adaptation

## 1. Introduction/Overview

This document outlines the requirements for a comprehensive component migration project. The goal is to adapt the entire library of high-quality, interactive, and data-driven React components from the "IA para Todos" (`iapt4`) project and integrate them into the existing `formacao-digital-2` website. This initiative will significantly enrich the target website's UI/UX capabilities by leveraging a proven set of components, refactoring them from their original Tailwind CSS implementation to align perfectly with the target project's Mantine UI design system.

## 2. Goals

*   **Enrich User Experience:** Dramatically expand the range of available UI components, enabling the creation of more engaging, interactive, and visually appealing pages.
*   **Accelerate Future Development:** Provide developers with a rich, pre-built library of complex components (e.g., e-learning blocks, showcase sections), reducing the time required to build new features.
*   **Ensure Design Consistency:** Adapt every ported component to the `formacao-digital-2` project's existing Mantine theme, ensuring a seamless and unified visual identity.
*   **Enable Data-Driven Features:** Integrate components that rely on backend data by connecting them to the existing Supabase instance, allowing features like the Manifesto Co-Creation to be used.

## 3. User Stories

*   **As a developer,** I want to have a wide range of pre-built, interactive components available so that I can build new pages and features more quickly and with greater consistency.
*   **As a content manager,** I want to use visually engaging components (like `SlideCarousel` or `StatsGroup`) so that I can create more compelling pages for users without requiring new development.
*   **As an end-user,** I want to interact with educational tools (like the `PromptFactoryApp`) on the `formacao-digital-2` website to enhance my learning experience.

## 4. Functional Requirements

### 4.1. Foundational Setup
1.  A new directory **must** be created at `src/components/ia-ported/` to house all adapted components.
2.  All framework-agnostic utility hooks (e.g., `useAnimatedSection`, `useCountUp`) **must** be ported from the source project to `src/lib/hooks/`.
3.  The `<RemixIcon />` component and its associated CSS font library **must** be integrated into the project.

### 4.2. Backend & Data Integration
1.  The Supabase client configuration (`supabaseClient.ts`) and API key management (`apiConfig.ts`) **must** be ported and adapted.
2.  The project's environment variable setup **must** be updated to include `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
3.  All data-fetching hooks (e.g., `useManifestoData`, `usePromptFactoryData`) **must** be ported to `src/lib/hooks/` and confirmed to work with the shared Supabase instance.

### 4.3. Component Adaptation
1.  All components from the `iapt4` project library **must** be adapted.
2.  The adaptation process **must** follow a "Mantine-first" strategy:
    *   All Tailwind CSS utility classes **must** be removed.
    *   Functionality and styling **must** be reimplemented using Mantine UI components (`<Card>`, `<Button>`, `<Group>`, etc.) and props (`shadow`, `p`, `radius`, etc.).
    *   Any custom styling that cannot be achieved with Mantine props **must** be implemented using CSS Modules, consistent with the target project's conventions.
3.  All navigation logic within the components (e.g., `<a>` tags, `navigateTo` functions) **must** be refactored to use the Next.js `<Link>` component for client-side routing.

### 4.4. Verification
1.  A new page **must** be created at `src/app/dev/ia-ported/page.tsx`.
2.  This page **must** render every single ported component to serve as a comprehensive test bed and visual library.
3.  All components on this page must render without errors and be fully functional.

## 5. Non-Goals (Out of Scope)

*   This project will not alter the existing, original components of the `formacao-digital-2` website.
*   No new features or components will be created; the scope is strictly limited to porting and adapting the existing `iapt4` library.
*   The original source files from the `iapt4` project will not be modified.

## 6. Design Considerations

*   The primary design directive is the "Mantine-first" adaptation strategy.
*   All ported components must be 100% visually consistent with the existing `formacao-digital-2` theme defined in `src/themes/`. There should be no visual discrepancies.

## 7. Technical Considerations

*   The main technical challenge is the translation of a utility-class-based styling system (Tailwind) to a component-prop-based system (Mantine).
*   The project will require environment variables for the Supabase URL and Key to be configured to allow data-dependent components to function.

## 8. Success Metrics

*   All components from the `iapt4` library are successfully adapted and rendered on the `ia-ported` library page without any console errors.
*   The adapted components are fully functional, interactive, and visually indistinguishable from native Mantine components.
*   Data-dependent components (e.g., Manifesto cards) successfully fetch and display live data from the shared Supabase backend.

## 9. Open Questions

*   The final location of the ported components once they are used in production pages is to be determined. For this project, they will reside in `src/components/ia-ported/`.
