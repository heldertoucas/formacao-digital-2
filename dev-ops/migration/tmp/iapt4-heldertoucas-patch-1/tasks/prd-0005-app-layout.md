# PRD: Persistent Application Layout

## 1. Introduction/Overview

This document outlines the requirements for creating a new, persistent layout component, `AppLayout.tsx`. This component is the cornerstone of Phase 2 of our navigation refactor. Its primary purpose is to solve the critical "double navbar" rendering bug by establishing a single, stable layout structure that wraps the entire application. It will consume the unified `Navbar.tsx` component (created in Phase 1) and will be responsible for selecting the correct navbar variant to display.

## 2. Goals

*   **Eliminate Rendering Bugs:** Fix the core bug that causes layout corruption and duplicate navbars when navigating between the landing page and internal pages.
*   **Simplify Routing Logic:** Decouple the application's routing logic from its layout structure by moving layout responsibilities out of the router and into the new `AppLayout`.
*   **Establish a Consistent Page Structure:** Create a single, reliable shell for all pages, ensuring that global elements like the header and footer are rendered consistently.
*   **Improve Performance and UX:** Provide a smoother, faster, and more reliable navigation experience for the user.

## 3. User Stories

*   **As a user,** I want to navigate between the home page and any internal page without experiencing visual glitches, broken layouts, or content shifts.
*   **As a developer,** I want the global page structure (header and footer) to be managed in one central layout component so that I don't have to import and manage them on every individual page.
*   **As a developer,** I want the routing component to only be responsible for selecting a page, not for managing layouts, to make the application's control flow easier to understand and debug.

## 4. Functional Requirements

1.  **Create `AppLayout.tsx`:** A new file must be created at `components/layout/AppLayout.tsx`.

2.  **Define Layout Structure:** The `AppLayout` component must render the following in order:
    *   The unified `<Navbar />` component at the top.
    *   The main page content (passed as `children`).
    *   The `<Footer />` component at the bottom.

3.  **Implement Variant Logic:** The `AppLayout` must contain the logic to determine if the current route is the landing page (`#\/`). Based on this, it must pass the correct `variant` prop (`'landing'` or `'internal'`) to the `<Navbar />` component.

4.  **Refactor Application Root:** The application's main entry point (`App.tsx`) must be refactored to render the `<AppLayout />` as its primary child, wrapping the routing mechanism.

5.  **Refactor `AppRouter.tsx`:** The `AppRouter.tsx` component must be simplified. All layout-related logic (e.g., rendering `InternalPageLayout`) must be removed. The router's sole responsibility will be to determine the correct `PageComponent` and pass it as a child to the `AppLayout`.

## 5. Non-Goals (Out of Scope)

*   This PRD does not involve making any changes to the `Navbar.tsx` or `Footer.tsx` components themselves.
*   The old `InternalPageLayout.tsx` file will be deprecated and its usage removed from the codebase, but it will **not be deleted** from the filesystem in this phase.

## 6. Technical Considerations

*   The primary technical task is the refactoring of `App.tsx` and `AppRouter.tsx`. Careful attention must be paid to ensure the page components are correctly passed as `children` to the new `AppLayout`.
*   The `AppLayout` will likely need access to the current route to implement the navbar variant logic. This state should be passed down from `App.tsx`.

## 7. Success Metrics

*   **Bug Resolution:** The "double navbar" and layout corruption bug is confirmed to be 100% resolved.
*   **Seamless Navigation:** Navigating between the landing page and all internal pages is visually smooth, fast, and free of any content or layout shifts.
*   **Correct Variant Display:** The `landing` variant of the `Navbar` is correctly displayed only on the landing page, and the `internal` variant is displayed on all other pages.
*   **Simplified Router:** The `AppRouter.tsx` component has been successfully simplified to only handle page selection, with all layout responsibilities removed.

## 9. Open Questions

*   None at this time.
