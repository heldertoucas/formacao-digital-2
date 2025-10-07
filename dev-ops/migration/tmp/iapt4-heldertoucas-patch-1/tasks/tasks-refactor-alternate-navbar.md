## Relevant Files

- `components/layout/AlternateHeader.tsx` - This component will be modified to handle the new active state logic, dropdown alignment, and layout changes.
- `components/layout/HoverDropdown.tsx` - This component will be updated to accept props for alignment and active state highlighting.
- `components/pages/ComponentLibraryPage.tsx` - This page will be updated to pass the necessary `activePath` prop to the `AlternateHeader`.

### Notes

- The focus is on fixing CSS and layout issues first, then implementing the new styling for active states.
- The solution for the disappearing menu will involve using padding to create space, rather than margin.

## Tasks

- [x] 1.0 **Fix Dropdown Functionality**
  - [x] 1.1 In `AlternateHeader.tsx`, add padding to the bottom of the `relative group` div that wraps each category link to create a visual gap and fix the disappearing menu issue.
  - [x] 1.2 In `HoverDropdown.tsx`, remove the `mt-2` class to prevent the unwanted margin.
  - [x] 1.3 In `AlternateHeader.tsx`, when mapping the navigation data, detect the last item and pass an `align="right"` prop to the `HoverDropdown` component.
  - [x] 1.4 In `HoverDropdown.tsx`, update the component to accept the `align` prop and conditionally apply `right-0` instead of `left-1/2 -translate-x-1/2` for positioning.

- [x] 2.0 **Update Header Layout**
  - [x] 2.1 In `AlternateHeader.tsx`, remove the JSX element that renders the page title inside the colored pill.

- [x] 3.0 **Implement Active State Styling**
  - [x] 3.1 In `AlternateHeader.tsx`, update the component's props to accept `activePath: string`.
  - [x] 3.2 When mapping the navigation data, determine if a category is active by checking if any of its links match the `activePath`.
  - [x] 3.3 Apply a bottom border style (e.g., `border-b-2 border-pcd-accent`) to the category button if it is active.
  - [x] 3.4 Pass the `activePath` prop down to the `HoverDropdown` component.
  - [x] 3.5 In `HoverDropdown.tsx`, update the component to accept the `activePath` prop.
  - [x] 3.6 When rendering links inside the dropdown, check if a link's `href` matches the `activePath` and, if so, wrap its label in a `<span>` with pill styling.

- [x] 4.0 **Final Integration**
  - [x] 4.1 In `ComponentLibraryPage.tsx`, pass the `activePath` prop (which the page already receives) to the `<AlternateHeader />` component.
