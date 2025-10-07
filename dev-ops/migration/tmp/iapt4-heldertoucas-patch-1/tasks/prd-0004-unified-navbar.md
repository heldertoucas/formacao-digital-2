# PRD: Unified Navigation Bar Component

## 1. Introduction/Overview

This document outlines the requirements for creating a new, unified navigation bar component, `Navbar.tsx`. This component will be built from scratch to replace the two existing navigation components (`Header.tsx` and `Navbar2.tsx`). The goal is to eliminate code duplication, create a single source of truth for all site navigation, and establish a stable foundation for fixing layout-related bugs in a subsequent phase.

## 2. Goals

*   **Consolidate Code:** Merge the functionality and styles of `Header.tsx` and `Navbar2.tsx` into a single, maintainable component.
*   **Establish a Single Source of Truth:** All navigation logic, styling, and behavior will reside in one component.
*   **Improve Maintainability:** Simplify future updates to navigation by only needing to modify one file.
*   **Define Clear Variants:** The component will support two distinct visual and functional variants (`'landing'` and `'internal'`) controlled by a prop.
*   **Ensure Responsiveness:** The component must be fully responsive, providing an intuitive mobile "burger" menu experience.

## 3. User Stories

*   **As a developer,** I want to manage all navigation logic in a single `Navbar.tsx` component so that I can reduce complexity and speed up future development.
*   **As a user on the landing page,** I want the navigation bar to be transparent when I'm at the top of the page so that I can see the hero image clearly.
*   **As a user on an internal page,** I want to open category dropdowns by clicking them and have them close when I click away, so the interaction feels predictable and stable.
*   **As a mobile user,** I want to see a standard "burger" menu icon that opens an overlay with navigation links, so I can easily navigate the site on my phone.

## 4. Functional Requirements

### 4.1. General Component Behavior

1.  **From Scratch:** The component must be built from scratch in a new file, `components/layout/Navbar.tsx`.
2.  **Variant Prop:** The component must accept a `variant` prop that can be either `'landing'` or `'internal'`.
3.  **Dropdown Trigger:** On desktop, dropdown menus (if present) must open only on **click**.
4.  **Dropdown Closing:** An open dropdown menu must close when the user **clicks anywhere on the page** outside of the navbar component.
5.  **Responsive Breakpoint:** The navbar must transition from the desktop layout to the mobile "burger" menu layout when the screen width is **less than 768px**.
6.  **Mobile Menu:** Tapping the "burger" icon must open a mobile navigation panel. This panel must appear as an **overlay**, covering the page content directly below the navbar.

### 4.2. `variant='landing'` Requirements

1.  **Dynamic Background:** The navbar background must be **transparent** when the user's vertical scroll position is at the top of the page (scrollY is 0).
2.  **Solid Background on Scroll:** The background must transition to a **solid color** as soon as the user scrolls down from the top.
3.  **Navigation Structure:** This variant must render **simple, top-level navigation links** (e.g., "About", "Pricing") and must not render dropdown menus.

### 4.3. `variant='internal'` Requirements

1.  **Static Background:** The navbar must always have a **semi-transparent, blurred background** effect, regardless of scroll position.
2.  **Navigation Structure:** This variant must render navigation links grouped into **categories that open dropdown menus** on click.
3.  **Active Category Styling:** The title of the currently active navigation category must be indicated by changing its **text color**.
4.  **Active Link Styling:** Within an open dropdown, the link for the page the user is currently on must be indicated with a colored **"pill" background shape**.

## 5. Non-Goals (Out of Scope)

*   This PRD does not cover the implementation of the parent `AppLayout` component (this will be handled in Phase 2).
*   This PRD does not include fixing the application's routing logic or the "double navbar" bug. It only concerns the creation of the unified component.
*   The old component files (`Header.tsx`, `Navbar2.tsx`) will be deprecated and removed from the application's rendering, but they will **not be deleted** from the filesystem as part of this task.

## 6. Design Considerations

*   All animations (background color transitions, mobile menu overlay) should be smooth, using standard CSS transitions (e.g., `duration-300`).
*   The component should be styled using Tailwind CSS, adhering to the project's existing design tokens and styles.
*   Icons for the mobile "burger" and "close" buttons should use the existing `<RemixIcon>` component.

## 7. Technical Considerations

*   A `useState` hook will be required to manage the open/closed state of dropdowns.
*   A separate `useState` hook will be required to manage the open/closed state of the mobile menu panel.
*   A `useEffect` hook listening for `scroll` events on the `window` object will be necessary to implement the dynamic background for the `landing` variant.
*   A `useEffect` hook will be needed to add and clean up a global `mousedown` event listener to handle the "click-away-to-close" functionality for dropdowns.

## 8. Success Metrics

*   The new `Navbar.tsx` component is successfully used throughout the application, completely replacing all previous uses of `Header.tsx` and `Navbar2.tsx`.

## 9. Open Questions

*   None at this time.
