# PRD 0002: Navbar2 - Click-Activated Navigation

## 1. Introduction/Overview

This document outlines the requirements for creating a new, robust navigation component named `Navbar2`. Previous attempts to build a hover-based dropdown menu (`AlternateHeader`) resulted in persistent usability issues, specifically the menu disappearing unintentionally. 

To solve this definitively, `Navbar2` will be built from scratch using a more reliable click-based trigger mechanism managed by JavaScript state. This new component will incorporate all the visual features of the previous "alternate navbar" but with a focus on functional stability and a predictable user experience.

## 2. Goals

*   **Create a Bug-Free Navigation Experience:** Eliminate the disappearing dropdown issue by moving from a CSS hover implementation to a JavaScript click-based one.
*   **Improve Usability:** Implement a standard and intuitive click-to-open, click-away-to-close pattern for the dropdown menus.
*   **Encapsulate Logic:** Build the new navbar in entirely separate files (`Navbar2.tsx`, `Navbar2Dropdown.tsx`) to prevent any style or logic conflicts with existing header components.
*   **Maintain Desired Aesthetics:** Successfully implement all visual requirements from the previous design, including layout, active state styling, and animations.

## 3. User Stories

*   **As a user,** I want to click on a navigation category to see its links, so that the menu stays open while I decide where to go.
*   **As a user,** I want the menu to close automatically when I click somewhere else on the page, so I can easily get back to the content.
*   **As a user,** I want to see which category and page I am currently on, so I can easily orient myself within the application.

## 4. Functional Requirements

1.  **Component Structure:**
    *   A new primary component `Navbar2.tsx` will be created.
    *   A new dropdown component `Navbar2Dropdown.tsx` will be created.

2.  **Layout:**
    *   The logo will be on the far left.
    *   The main navigation links (categories) will be on the far right.

3.  **Dropdown Triggering:**
    *   The dropdown menu for a category **must** appear only when the user **clicks** the category title.
    *   The visibility of the dropdowns will be controlled by JavaScript state (e.g., a `useState` hook in `Navbar2.tsx`).
    *   Only one dropdown menu can be open at a time. Clicking a new category should close any currently open menu and open the new one.

4.  **Dropdown Closing Behavior:**
    *   The open dropdown menu **must** close if the user performs any of the following actions:
        *   Clicks the same category title again.
        *   Clicks anywhere on the page outside of the open dropdown panel.
        *   Presses the 'Escape' key.

5.  **Styling and Appearance:**
    *   The dropdown panel will be a simple rectangular pane with no triangular pointer.
    *   The dropdown will appear with a smooth fade-in/fade-out animation.
    *   The active category title will be styled with a colored "pill" background.
    *   The active link *inside* a dropdown menu will also be styled with a colored "pill" background.

## 5. Non-Goals (Out of Scope)

*   This component will not be responsive for mobile devices in this first iteration.
*   The navigation data (links, descriptions, icons) will not change and should be copied from the existing `AlternateHeader`.

## 6. Design Considerations

*   The overall visual design should match the final state of the `AlternateHeader` (right-aligned navigation, pill-style active states, etc.).
*   The fade-in/fade-out animation should be handled with CSS transitions tied to the component's open/closed state.

## 7. Technical Considerations

*   **State Management:** A `useState` hook in `Navbar2.tsx` should track which category dropdown (if any) is currently open (e.g., `const [openMenu, setOpenMenu] = useState<string | null>(null);`).
*   **Event Handling:** A `useEffect` hook will be required to add a global `mousedown` event listener to the `document`. This listener will handle the "click-away-to-close" functionality by checking if the click occurred outside the bounds of the navbar component.
*   **Code Encapsulation:** All logic and styling will be contained within the new `Navbar2.tsx` and `Navbar2Dropdown.tsx` files to ensure no conflicts with other site components.

## 8. Success Metrics

*   The dropdown menus open and close reliably on click, with no unexpected disappearing.
*   All closing mechanisms (re-click, click away, Escape key) function correctly.
*   Active state styling is correctly applied to both the category titles and the links within the dropdowns.
*   The new navbar can be successfully integrated into the `ComponentLibraryPage` for testing.

## 9. Open Questions

*   None at this time.
