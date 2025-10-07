# V2 Docs: 3. New Design System

This document is the single source of truth for the new website's visual identity. All new components must adhere to these rules.

## 3.1. New Color Palette

Define the new CSS variables for the color scheme in `index.css`. These will replace the existing `pcd-` prefixed variables.

*   **Instructions:** List the new color tokens below. Provide names and hex codes.
*   **Example:**
    ```css
    /* In index.css, inside the :root selector */
    --v2-background: #1A1A1A;
    --v2-text-primary: #FFFFFF;
    --v2-text-secondary: #A9A9A9;
    --v2-accent: #00BFFF;
    --v2-card-background: #2C2C2C;
    --v2-border-color: #3D3D3D;
    ```

## 3.2. New Typography

Define the fonts, sizes, and weights for the new design.

*   **Instructions:** Specify the font families for headings and body text, and the base font sizes.
*   **Example:**
    *   **Heading Font:** `Inter`, `700` (Bold)
    *   **Body Font:** `Roboto`, `400` (Regular)
    *   **Base Font Size:** `16px`

## 3.3. Core UI Component Inventory

This is the initial list of new, foundational UI components to be built for the V2 project. **Do not reuse components from the original project.**

*   **Instructions:** List the new base components to be created.
*   **Example:**
    *   `NewButton.tsx` - (Primary, Secondary, and Ghost variants)
    *   `NewCard.tsx` - (The base container for content blocks)
    *   `NewHeader.tsx` - (The main site navigation header)
    *   `NewFooter.tsx` - (The main site footer)
    *   `NewPageSection.tsx` - (The standard wrapper for page sections)
