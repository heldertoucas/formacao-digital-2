5\. Accessibility Guide
=======================

This guide outlines the best practices and principles we follow to ensure the "IA para Todos" application is accessible to the widest possible range of users. Our approach is based on the Web Content Accessibility Guidelines (WCAG) and the principles of Universal Design for Learning (UDL).

1\. Implemented Accessibility Criteria
--------------------------------------

Our component library and design system have been built with the following criteria in mind:

-   **Adjustable Typography:** We provide a global font scaling mechanism.

    -   **Implementation:** The `fontScale` property in `src/config/appConfig.ts` controls the `--font-scale` CSS variable in `index.css`, allowing the base font size of the entire application to be adjusted.

-   **High-Contrast Colors:** Our color palette was chosen to meet WCAG AA contrast ratio standards.

    -   **Implementation:** The UI and text colors defined as CSS variables in `index.css` (e.g., `--pcd-text-dark` on `--pcd-card-bg`) provide sufficient contrast for readability.

-   **Clear Semantic Structure:** We prioritize the use of semantic HTML to give structure and meaning to our content.

    -   **Implementation:** Components like `<PageSection>` use the `<section>` tag, headers use `<h1>`, `<h2>`, etc., and navigation elements are structured appropriately. This provides a clear document outline for screen readers.

-   **Keyboard Navigation:** The application is fully navigable using only a keyboard.

    -   **Implementation:** By using standard, semantic elements like `<button>` and `<a>` for all interactive controls, we leverage native browser support for keyboard focus and activation (`Tab` and `Enter`/`Space`).

2\. Alignment with Universal Design for Learning (UDL)
------------------------------------------------------

UDL principles guide our instructional design to provide multiple means of representation, expression, and engagement.

-   **Multiple Formats:** We present learning content in various formats to cater to different learning styles.

    -   **Implementation:** A single lesson can combine text (`<p>`), video (`VideoBlock.tsx`), and interactive simulations (`SentenceBuilder.tsx`).

-   **Alternative Descriptions:** All meaningful images and media should have descriptive alternatives.

    -   **Implementation:** All `<img>` tags and illustration components must have a descriptive `alt` prop. Icons used for decoration should have `aria-hidden="true"`.

-   **User Preferences:** The application is designed to respect user preferences where possible.

    -   **Implementation:** The font scaling system is a key example. The flexible, responsive layout also adapts to different screen sizes and zoom levels.

3\. Guidelines for Future Development
-------------------------------------

As we add new features, all developers must adhere to the following guidelines:

-   **Validate Your Work:** Use automated accessibility checking tools like Lighthouse (in Chrome DevTools) or the axe DevTools browser extension to catch common issues before committing code.

-   **Provide Media Controls:** When adding video or audio, ensure there are clear, accessible controls for play/pause and volume, and provide captions or transcripts where possible.

-   **Announce Dynamic Changes:** For components that load content dynamically or change state, use ARIA live regions (`aria-live`) to ensure screen readers announce the updates to users.

-   **Test with Real Users:** Whenever possible, involve users with diverse needs in the testing process to gather invaluable feedback.
