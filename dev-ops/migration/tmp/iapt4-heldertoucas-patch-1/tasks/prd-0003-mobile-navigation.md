# PRD 0003: Responsive Mobile Navigation for Navbar2

## 1. Introduction/Overview

Currently, the `Navbar2` component is not responsive. On screen sizes smaller than the medium breakpoint (768px), the main navigation links disappear, leaving no way for users on mobile or tablet devices to navigate the site. 

This PRD outlines the requirements for adding a responsive "burger" menu to `Navbar2`. This will provide a standard, user-friendly mobile navigation experience by displaying a menu icon that, when tapped, reveals the site navigation in a slide-down panel.

## 2. Goals

*   **Achieve Full Responsiveness:** Make the site fully navigable on all screen sizes, including mobile and tablet.
*   **Provide an Intuitive Mobile UX:** Implement a standard burger menu pattern that is immediately recognizable to mobile users.
*   **Maintain Brand Consistency:** Ensure the mobile menu's design is consistent with the application's existing visual identity.
*   **Improve Accessibility:** Provide a clear and accessible navigation path for users on smaller viewports.

## 3. User Stories

*   **As a mobile user,** I want to see a menu icon so that I can easily find and access the site's navigation options.
*   **As a mobile user,** I want to tap a link in the menu and be taken to the page while the menu closes automatically, so I can have a seamless browsing experience.
*   **As a site administrator,** I want the site's name ("IA para Todos") to remain visible on all screen sizes to maintain brand presence.

## 4. Functional Requirements

1.  **Breakpoint-Based Display:**
    *   On screens **wider than 768px** (`md` breakpoint), the existing desktop navigation with category links must be visible.
    *   On screens **smaller than 768px**, the desktop navigation must be hidden.
    *   On screens **smaller than 768px**, a "burger" menu icon button must be displayed on the far right of the navbar.

2.  **Brand Name Visibility:**
    *   The text "IA para Todos" next to the logo **must** remain visible on all screen sizes, including the smallest mobile breakpoints.

3.  **Mobile Menu Panel:**
    *   Tapping the burger icon must toggle the visibility of a mobile navigation panel.
    *   The panel must slide down from the top, appearing directly below the navbar.
    *   The panel must have a solid, opaque background color (e.g., white).
    *   The panel's visibility will be controlled by a JavaScript state variable (e.g., `isMobileMenuOpen`).

4.  **Panel Content:**
    *   The panel must contain a list of all navigable page links.
    *   The links must be grouped visually under their respective category titles ("Participar", "Aprender", etc.). The category titles themselves will be non-clickable headers.
    *   The panel must include a "Close" icon button (`X`) to allow users to close it manually.

5.  **Interaction Logic:**
    *   Tapping a navigation link inside the panel **must** navigate the user to the corresponding page AND automatically close the mobile menu panel.
    *   Tapping the "Close" icon **must** close the panel.

## 5. Non-Goals (Out of Scope)

*   The functionality of the desktop navigation (for screens > 768px) will not be changed.
*   The navigation links themselves (URLs, labels) will not be altered.

## 6. Design Considerations

*   **Icons:** The burger menu and close icons should be implemented using the existing `<RemixIcon>` component.
*   **Animation:** The slide-down panel should use a smooth CSS transition on the `transform` and `opacity` properties.
*   **Layout:** The links inside the panel should be styled as a clear, easy-to-tap vertical list.

## 7. Technical Considerations

*   **State Management:** A new `useState` hook will be added to `Navbar2.tsx` to manage the open/closed state of the mobile menu.
*   **Responsive Classes:** Tailwind's responsive prefixes (`md:`, `hidden`, etc.) will be used to control the visibility of the desktop navigation vs. the mobile burger icon.
*   **Component Structure:** A new component, `MobileMenuPanel.tsx`, could be created to encapsulate the logic and layout of the slide-down menu for better code organization.

## 8. Success Metrics

*   The burger menu icon correctly appears on screens smaller than 768px, and the desktop navigation disappears.
*   The slide-down panel opens and closes correctly when the burger/close icons are tapped.
*   All navigation links are present and functional within the mobile menu.
*   Clicking a link in the mobile menu successfully navigates and closes the menu.
*   The "IA para Todos" text remains visible next to the logo on all screen sizes.

## 9. Open Questions

*   None at this time.

## 10. Tasks

- [x] **Task 1: Create the `MobileMenuPanel` component**
    - [x] Create a new file `components/layout/MobileMenuPanel.tsx`.
    - [x] Implement the basic structure of the component, accepting `isOpen`, `onClose`, and `navigationData` as props.
    - [x] Style the panel to slide down from the top, with a solid background.
    - [x] Add a close button to the panel.
- [x] **Task 2: Implement the navigation links in the mobile panel**
    - [x] Render the `navigationData` in the panel, grouped by category.
    - [x] Style the links for mobile readability.
    - [x] Ensure clicking a link calls `onClose` and navigates to the correct page.
- [x] **Task 3: Finalize the integration and styling**
    - [x] Ensure the slide-down animation is smooth.
    - [x] Verify that the "IA para Todos" text remains visible on all screen sizes.
    - [x] Test the entire flow on different screen sizes.