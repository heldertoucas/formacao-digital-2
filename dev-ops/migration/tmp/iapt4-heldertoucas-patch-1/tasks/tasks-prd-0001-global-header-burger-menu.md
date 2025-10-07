## Relevant Files

- `components/layout/GlobalHeader.tsx` - This is the main component that will be modified to include the new burger menu, state management, and dropdown integration.
- `components/layout/GlobalMenuDropdown.tsx` - This will be a new component created to house the UI and logic for the dropdown menu itself.
- `components/ui/RemixIcon.tsx` - This existing component will be used to render the burger and close icons.

### Notes

- The main logic will be contained within `GlobalHeader.tsx` and the new `GlobalMenuDropdown.tsx`.
- We will use React's `useState` and `useEffect` hooks for state management and handling side effects like keyboard listeners.
- Styling will be done using Tailwind CSS, adhering to the project's existing design system.

## Tasks

- [x] 1.0 **State Management and Initial Structure**
  - [x] 1.1 In `GlobalHeader.tsx`, import the `useState` and `useEffect` hooks from React.
  - [x] 1.2 In the `GlobalHeader` component, create a state variable `isMenuOpen` and its setter `setIsMenuOpen`, initializing it to `false`.
  - [x] 1.3 Create a new file named `GlobalMenuDropdown.tsx` inside the `components/layout/` directory.
  - [x] 1.4 In `GlobalMenuDropdown.tsx`, define a new functional component that accepts `isOpen` (boolean), `onClose` (function), and `navigationData` (array) as props.

- [x] 2.0 **Build the Dropdown Menu UI**
  - [x] 2.1 In `GlobalMenuDropdown.tsx`, implement the main container. It should be conditionally rendered based on the `isOpen` prop.
  - [x] 2.2 Style the container as a dropdown that appears below the header, with a semi-transparent backdrop. Apply a fade-in/out transition using CSS classes.
  - [x] 2.3 Add a close button (using `RemixIcon` with `name="close-line"`) to the top-right of the dropdown menu.
  - [x] 2.4 Inside the dropdown, map over the `navigationData` prop to create a grid of columns for the categories.
  - [x] 2.5 For each category, display its title and the list of associated links, including their icons, labels, and descriptions, styled appropriately.

- [x] 3.0 **Integrate Burger Menu and Remove Old Navigation**
  - [x] 3.1 In `GlobalHeader.tsx`, import the new `GlobalMenuDropdown` component.
  - [x] 3.2 Add a `<button>` element to the far left of the header, before the `StaticLogo`.
  - [x] 3.3 Place a `RemixIcon` with `name="menu-line"` inside the button to serve as the burger icon.
  - [x] 3.4 Add an `onClick` handler to the burger menu button that sets `isMenuOpen` to `true`.
  - [x] 3.5 Delete the `<nav>` element and its contents (the `MegaMenu` components) from the center of the header.
  - [x] 3.6 Render the `<GlobalMenuDropdown />` component within `GlobalHeader`, passing the `isMenuOpen`, `navigationData`, and an `onClose` handler that sets `isMenuOpen` to `false`.

- [x] 4.0 **Implement Closing Logic**
  - [x] 4.1 In `GlobalMenuDropdown.tsx`, ensure the `onClose` function is called by the `onClick` handler of both the close button and the backdrop element.
  - [x] 4.2 In `GlobalHeader.tsx`, create a `useEffect` hook that adds a `keydown` event listener to the `document`.
  - [x] 4.3 In the effect, check if the pressed key is 'Escape' and if `isMenuOpen` is true. If so, call the function to set `isMenuOpen` to `false`.
  - [x] 4.4 Ensure the `useEffect` hook cleans up the event listener when the component unmounts.
