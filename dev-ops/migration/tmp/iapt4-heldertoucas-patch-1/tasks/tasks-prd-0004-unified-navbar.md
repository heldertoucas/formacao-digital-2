## Relevant Files

- `components/layout/Navbar.tsx` - New file. This will contain the unified, from-scratch navigation component.
- `components/layout/Navbar.test.tsx` - New file. Unit and integration tests for the new `Navbar` component.
- `components/pages/HomePage.tsx` - To be modified. The old `<Header>` will be replaced with the new `<Navbar variant='landing' />`.
- `components/layout/InternalPageLayout.tsx` - To be modified. The old `<Navbar2>` will be replaced with the new `<Navbar variant='internal' />`.
- `components/ui/RemixIcon.tsx` - Existing component that will be used for the mobile menu (burger and close) icons.

### Notes

- This implementation should be done from scratch as requested, using the existing `Header.tsx` and `Navbar2.tsx` only as visual and functional references.
- State management for dropdowns, scroll position, and the mobile menu should be handled with React hooks (`useState`, `useEffect`).
- Styling should be implemented with Tailwind CSS, leveraging responsive prefixes (`md:`) for mobile-specific views.

## Tasks

- [x] **1.0 Create the basic scaffolding for the new `Navbar.tsx` component.**
  - [x] 1.1 Create the new file `components/layout/Navbar.tsx`.
  - [x] 1.2 Define the component's props interface (`NavbarProps`), which must include `variant: 'landing' | 'internal'` and props for passing navigation data.
  - [x] 1.3 Set up the basic JSX structure, including a `<header>`, a `<nav>`, and placeholder elements for the logo, navigation links, and mobile menu button.
  - [x] 1.4 Create a corresponding test file `components/layout/Navbar.test.tsx` and write a simple test to ensure the component renders without crashing.

- [x] **2.0 Implement the desktop layout and logic for the `internal` variant.**
  - [x] 2.1 Add a `useState` hook to manage the open/closed state of dropdown menus.
  - [x] 2.2 When `variant === 'internal'`, map over the navigation data to render the category titles.
  - [x] 2.3 Implement the `onClick` handler on category titles to toggle the visibility of their respective dropdowns.
  - [x] 2.4 Implement a `useEffect` hook to add a `mousedown` event listener to the document, which will close any open dropdown when a click occurs outside the navbar.
  - [x] 2.5 Apply the semi-transparent, blurred background style conditionally when `variant === 'internal'`.
  - [x] 2.6 Implement the logic to apply a specific text color to the active category title.
  - [x] 2.7 Inside the dropdowns, implement the logic to apply the "pill" background shape to the active link.

- [x] **3.0 Implement the desktop layout and logic for the `landing` variant.**
  - [x] 3.1 Add a `useState` hook (`const [isScrolled, setIsScrolled] = useState(false);`) to track the page's scroll state.
  - [x] 3.2 Add a `useEffect` hook that attaches a `scroll` event listener to the `window` object. This effect should update `isScrolled` to `true` if `window.scrollY > 0` and `false` otherwise.
  - [x] 3.3 Apply conditional styling to the navbar's background. It should be transparent if `variant === 'landing'` AND `!isScrolled`, and a solid color in all other cases.
  - [x] 3.4 When `variant === 'landing'`, render simple top-level navigation links instead of dropdown categories.

- [x] **4.0 Implement the responsive mobile navigation and "burger" menu behavior.**
  - [x] 4.1 Add a `useState` hook (`const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);`) to manage the mobile menu's state.
  - [x] 4.2 Add a `<button>` for the "burger" menu icon. Use responsive classes (`md:hidden`) to ensure it is only visible on screens narrower than 768px.
  - [x] 4.3 Hide the desktop navigation links on screens narrower than 768px (e.g., using `hidden md:flex`).
  - [x] 4.4 Implement the mobile menu panel, which renders as an overlay. Its visibility should be tied to the `isMobileMenuOpen` state.
  - [x] 4.5 Populate the mobile menu panel with all necessary navigation links, grouped by category.
    - [x] 4.6 Ensure that clicking a link inside the mobile menu closes the panel.

- [x] **5.0 Integrate the new `Navbar.tsx` component and deprecate the old components.**
  - [x] 5.1 In `components/pages/HomePage.tsx`, remove the import for `Header.tsx` and replace its usage with `<Navbar variant='landing' />`, passing the required props.
  - [x] 5.2 In `components/layout/InternalPageLayout.tsx`, remove the import for `Navbar2.tsx` and replace its usage with `<Navbar variant='internal' />`, passing the required props.
  - [x] 5.3 Manually test the application by navigating between the home page and several internal pages. Verify that the correct navbar variant appears and functions as expected on both desktop and mobile screen sizes.
