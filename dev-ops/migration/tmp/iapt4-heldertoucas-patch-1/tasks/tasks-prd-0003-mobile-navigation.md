## Relevant Files

- `components/layout/Navbar2.tsx` - This main component will be updated to manage the mobile menu's state and to conditionally render the desktop nav vs. the mobile burger icon.
- `components/layout/MobileMenuPanel.tsx` - This new file will contain the slide-down panel, its styling, and the logic for displaying the navigation links.
- `components/ui/RemixIcon.tsx` - Will be used for the burger and close icons.

### Notes

- The core of this task is using Tailwind's responsive prefixes (`md:`, `hidden`) to swap between two distinct layouts within `Navbar2.tsx`.
- State will be managed in the parent (`Navbar2.tsx`) and passed down as props to the new child component (`MobileMenuPanel.tsx`).

## Tasks

- [x] 1.0 **Responsive Visibility Setup**
  - [x] 1.1 In `Navbar2.tsx`, modify the `<nav>` element for the desktop links by adding the `hidden` class and prefixing the existing `md:flex` class to ensure it only appears on medium screens and larger.
  - [x] 1.2 In `Navbar2.tsx`, add a new `<button>` element that will serve as the burger menu icon. This button should be visible only on screens *smaller* than the `md` breakpoint (e.g., using `md:hidden`).
  - [x] 1.3 Place a `<RemixIcon name="menu-line" />` inside the new button.
  - [x] 1.4 In `Navbar2.tsx`, find the `<span>` containing the text "IA para Todos" and remove the `hidden sm:inline` classes to ensure it is always visible.

- [x] 2.0 **Mobile Menu Scaffolding**
  - [x] 2.1 Create a new file named `MobileMenuPanel.tsx` in the `components/layout/` directory.
  - [x] 2.2 In the new file, create a functional component that accepts `isOpen: boolean` and `onClose: () => void` as props.
  - [x] 2.3 Implement the main panel `div`. It should have a solid background, be positioned absolutely below the header, and span the full width of the screen.
  - [x] 2.4 Add CSS classes to handle the slide-down animation. The panel's `transform` and `opacity` should be toggled based on the `isOpen` prop.
  - [x] 2.5 Add a "Close" button containing a `<RemixIcon name="close-line" />` to the top-right of the panel.

- [x] 3.0 **State and Interaction Logic**
  - [x] 3.1 In `Navbar2.tsx`, add a new `useState` hook for the mobile menu: `const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);`.
  - [x] 3.2 Attach an `onClick` handler to the burger menu button that calls `setMobileMenuOpen(true)`.
  - [x] 3.3 Render the `<MobileMenuPanel />` component within `Navbar2.tsx`, passing the `isOpen={isMobileMenuOpen}` and `onClose={() => setMobileMenuOpen(false)}` props.
  - [x] 3.4 In `MobileMenuPanel.tsx`, ensure the `onClose` prop is called by the "Close" button's `onClick` handler.

- [x] 4.0 **Finalize Content and Styling**
  - [x] 4.1 In `MobileMenuPanel.tsx`, accept the `navigationData` as a prop.
  - [x] 4.2 Inside the panel, map over the `navigationData` to render the content. For each category, display the `title` as a non-clickable header.
  - [x] 4.3 Below each category title, render a vertical list of the associated page `links`.
  - [x] 4.4 Ensure that when a user clicks on any `<a>` link within the panel, the `onClose` function is also called to automatically close the menu after navigation.

- [ ] 5.0 **Verification and Cleanup**
  - [ ] 5.1 Run the local development server (`npm run dev`) and thoroughly test the new mobile navigation on a small screen size.
  - [ ] 5.2 Confirm that the desktop navigation is unaffected on larger screen sizes.
  - [ ] 5.3 Run the production build command (`npm run build`) locally to ensure there are no build errors before attempting to deploy.
