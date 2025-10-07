# PRD 0001: Global Header Burger Menu Navigation

## 1. Introduction/Overview

This document outlines the requirements for refactoring the `GlobalHeader` component. The current implementation features a horizontally-aligned mega menu in the center of the navigation bar. This feature will be replaced by a more compact and modern navigation pattern, where a single burger icon on the left toggles a dropdown menu containing all navigation links. This change aims to simplify the header's visual appearance while maintaining full access to all navigation options.

## 2. Goals

*   **Improve UI Minimalism:** Reduce the visual clutter in the main navigation bar, creating a cleaner and more focused interface.
*   **Centralize Navigation:** Consolidate all navigation links into a single, on-demand menu, providing a clear and consistent access point for users.
*   **Modernize User Experience:** Adopt a widely recognized navigation pattern (burger menu) that is intuitive for users across devices.

## 3. User Stories

*   **As a user,** I want to see a clean and uncluttered navigation bar so that I can focus on the page content.
*   **As a user,** I want to be able to find all main navigation options in one predictable place so that I can easily navigate the application.

## 4. Functional Requirements

1.  The `GlobalHeader` component must display a "burger" menu icon on the far left, positioned before the application logo and title.
2.  The existing, horizontally-aligned mega menu navigation in the center of the header must be removed.
3.  Clicking the burger menu icon must toggle the visibility of a dropdown navigation menu.
4.  The dropdown menu must appear directly below the header.
5.  The dropdown menu must contain all the navigation categories ("Participar", "Aprender", "Experimentar", "O Programa") and their corresponding links.
6.  The content within the dropdown menu must be organized with the categories arranged in a grid of columns.
7.  The dropdown menu must feature a smooth fade-in and fade-out animation upon opening and closing.
8.  The menu must be closable through the following actions:
    *   Clicking an 'X' close icon located within the menu.
    *   Clicking on the area outside of the menu's content (e.g., a semi-transparent backdrop).
    *   Pressing the "Escape" key on the keyboard.

## 5. Non-Goals (Out of Scope)

*   This change will **not** affect the separate `Header` component used on the main landing page (`HomePage`).
*   The content of the navigation (the specific links, labels, and descriptions) will **not** be changed.
*   The display of the current page title on the right side of the `GlobalHeader` will remain unchanged.
*   The design will not be responsive for mobile devices in this iteration.

## 6. Design Considerations

*   **Iconography:** The burger menu icon should be implemented using the existing `RemixIcon` component (e.g., `<RemixIcon name="menu-line" />`).
*   **Dropdown Appearance:** The dropdown should span a significant portion of the viewport width and have a backdrop to create focus.
*   **Animation:** The fade transition should be handled via CSS for smooth performance.

## 7. Technical Considerations

*   A `useState` hook should be implemented within the `GlobalHeader.tsx` component to manage the open/closed state of the dropdown menu.
*   Event listeners will be required to handle the closing of the menu (e.g., for the 'Escape' key and clicks outside the menu).
*   The existing `navigationData` array within `GlobalHeader.tsx` should be reused to populate the new dropdown menu.

## 8. Success Metrics

*   The new burger menu and dropdown are successfully implemented in the `GlobalHeader` component.
*   All navigation links within the new menu are present and navigate to the correct pages/sections.
*   The menu's open/close functionality and animations work as specified across all required user actions.
*   The previous centered navigation is no longer visible.

## 9. Open Questions

*   None at this time.
