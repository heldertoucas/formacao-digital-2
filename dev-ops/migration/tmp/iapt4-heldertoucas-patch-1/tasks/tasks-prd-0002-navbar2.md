## Relevant Files

- `components/layout/Navbar2.tsx` - The new, primary navigation bar component. Will contain state management and layout.
- `components/layout/Navbar2Dropdown.tsx` - The new dropdown panel component. Will handle its own appearance and link rendering.
- `components/pages/ComponentLibraryPage.tsx` - The page used to test and integrate the new `Navbar2` component.

### Notes

- This implementation will use JavaScript state (`useState`, `useEffect`) for all open/close logic to ensure reliability.
- We will copy the navigation data and basic layout from `AlternateHeader.tsx` as a starting point to ensure visual consistency.

## Tasks

- [x] 1.0 **Component Scaffolding**
  - [x] 1.1 Create a new file named `Navbar2.tsx` in `components/layout/`.
  - [x] 1.2 Create a new file named `Navbar2Dropdown.tsx` in `components/layout/`.
  - [x] 1.3 In `Navbar2.tsx`, create a basic functional component. Copy the `navigationData` array and the `AlternateHeaderProps` type from `AlternateHeader.tsx` into this file.
  - [x] 1.4 In `Navbar2Dropdown.tsx`, create a basic functional component. It should accept `isOpen: boolean` and `links: MegaMenuLink[]` as props.

- [x] 2.0 **Build Core Dropdown UI**
  - [x] 2.1 In `Navbar2Dropdown.tsx`, implement the JSX for the dropdown panel. It should be a simple, rectangular `div`.
  - [x] 2.2 Apply styling to the dropdown to make it a floating panel with a shadow and rounded corners.
  - [x] 2.3 Use the `isOpen` prop to conditionally apply CSS classes for a fade-in/fade-out transition (e.g., toggling `opacity-0` and `opacity-100`).
  - [x] 2.4 Map over the `links` prop to render the list of links, including their icons, labels, and descriptions. Reuse the styling from `HoverDropdown.tsx`.

- [x] 3.0 **Implement Click-to-Open Logic**
  - [x] 3.1 In `Navbar2.tsx`, add a `useState` hook to manage the open menu state: `const [openMenu, setOpenMenu] = useState<string | null>(null);`.
  - [x] 3.2 In the `map` function that renders the categories, add an `onClick` handler to each category `<button>`.
  - [x] 3.3 The `onClick` handler should check if the current category is already open (`openMenu === category.title`). If it is, it should call `setOpenMenu(null)`. If not, it should call `setOpenMenu(category.title)`.
  - [x] 3.4 Pass an `isOpen` prop to the `Navbar2Dropdown` component, calculated as `isOpen={openMenu === category.title}`.

- [x] 4.0 **Implement Closing Logic**
  - [x] 4.1 In `Navbar2.tsx`, create a `useRef` for the navbar container to detect outside clicks.
  - [x] 4.2 Add a `useEffect` hook to attach a `mousedown` event listener to the `document` when a menu is open (`openMenu !== null`).
  - [x] 4.3 The `mousedown` handler should check if the click target is outside the navbar container (`!navbarRef.current.contains(event.target)`). If it is, it must call `setOpenMenu(null)`.
  - [x] 4.4 In the same `useEffect`, add a `keydown` event listener. If the key is `Escape`, it must call `setOpenMenu(null)`.
  - [x] 4.5 Ensure the `useEffect` hook cleans up both event listeners when the component unmounts or the menu closes.

- [x] 5.0 **Implement Active State Styling**
  - [x] 5.1 In `Navbar2.tsx`, when mapping the categories, determine if a category is active using the `activePath` prop.
  - [x] 5.2 Apply the conditional "pill" styling to the category `<button>` if it is active.
  - [x] 5.3 Pass the `activePath` prop down to the `Navbar2Dropdown` component.
  - [x] 5.5 In `Navbar2Dropdown.tsx`, accept the `activePath` prop and apply the conditional "pill" styling to the link whose `href` matches.

- [x] 6.0 **Final Integration**
  - [x] 6.1 In `ComponentLibraryPage.tsx`, import the new `Navbar2` component.
  - [x] 6.2 Replace the `<AlternateHeader />` component with `<Navbar2 />`, passing the required `title` and `activePath` props.
