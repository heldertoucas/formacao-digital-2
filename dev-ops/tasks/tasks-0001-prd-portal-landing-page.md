## Relevant Files

-   `src/app/page.tsx` - The primary file where the landing page sections (Hero, About, etc.) will be built and composed.
-   `src/app/layout.tsx` - The root layout file, which will be modified to include the site-wide Header and Footer.
-   `src/app/not-found.tsx` - A new file to create a custom, user-friendly 404 page.
-   `src/components/layout/SiteHeader.tsx` - A new component to be created for the main site navigation header.
-   `src/components/layout/SiteFooter.tsx` - A new component to be created for the main site footer.
-   `src/components/common/Card.tsx` - A new, reusable card component for displaying program and testimonial content.

### Notes

-   All new components should be built using Mantine components from our theme to ensure a professional and consistent design.
-   Focus on creating responsive layouts from the start, using Mantine's responsive style props (e.g., `hiddenFrom="sm"`) and layout components (`Grid`, `SimpleGrid`, `Group`).
-   Testing has not been configured yet. Once it is, unit tests should be created for new components.

## Tasks

-   [x] 1.0 Create Foundational Layout & Navigation Components
    -   [x] 1.1 Create the `SiteHeader.tsx` component in `src/components/layout/`. It should include the site logo/title and navigation links ("About", "Contact") using Mantine's `AppShell`, `Group`, and `Anchor` components.
    -   [x] 1.2 Create the `SiteFooter.tsx` component in `src/components/layout/`. It should display the contact information and social media links from the PRD.
    -   [x] 1.3 Create a generic and reusable `Card.tsx` component in `src/components/common/` using `Mantine.Card`. It should be flexible enough to be used for both program and testimonial cards.
    -   [x] 1.4 Modify the root layout at `src/app/layout.tsx` to integrate the new `SiteHeader` and `SiteFooter`, making them persistent across the entire site.
-   [x] 2.0 Implement the Main Hero Section
    -   [x] 2.1 In `src/app/page.tsx`, build the structure for the Hero Section.
    -   [x] 2.2 Add the main headline and sub-headline using appropriately sized Mantine `Title` and `Text` components.
    -   [x] 2.3 Use a Mantine `SimpleGrid` or `Grid` to create the three-column layout for the program cards.
    -   [x] 2.4 For each of the three programs, use the new `Card` component and populate it with the title, text, "Ideal for," and button content specified in the PRD.
    -   [x] 2.5 Ensure the buttons in the program cards use Next.js's `<Link>` component for client-side navigation to `/passaporte`, `/futuro`, and `/ia`.
-   [x] 3.0 Build Static Content Sections (About, Testimonials, Contact)
    -   [x] 3.1 Build the "About" section with the `<section id="about">` tag, using Mantine components to style the title and text content from the PRD.
    -   [x] 3.2 Build the "Testimonials" section with the `<section id="testimonials">` tag.
    -   [x] 3.3 Use a `Grid` or `SimpleGrid` to lay out the three testimonials, rendering each one inside the reusable `Card` component.
    -   [x] 3.4 Build the "Contact" section with the `<section id="contact">` tag.
    -   [x] 3.5 Display the contact details (Email, Phone, Address) and add placeholder icons for the social media links using Mantine `Group`, `Text`, and `ActionIcon` components.
-   [x] 4.0 Implement Page Interactivity and Routing
    -   [x] 4.1 Use the `useWindowScroll` hook from `@mantine/hooks` to implement smooth-scrolling functionality for the "About" and "Contact" links in the `SiteHeader`.
    -   [x] 4.2 Thoroughly test all links on the page to ensure they navigate to the correct routes or scroll to the correct sections.
    -   [x] 4.3 Create the `src/app/not-found.tsx` file and build a simple, professionally styled 404 page.
-   [ ] 5.0 Finalize Styling, Responsiveness, and Accessibility
    -   [ ] 5.1 Review the entire landing page on desktop, tablet, and mobile screen sizes to ensure the layout is fully responsive and visually polished.
    -   [ ] 5.2 Check that all interactive elements are keyboard-accessible and have appropriate `aria-label`s.
    -   [ ] 5.3 Use your browser's developer tools to run a Lighthouse audit and ensure the page scores above 90 for Performance, Accessibility, and Best Practices.
    -   [ ] 5.4 Remove any console logs or temporary code and perform a final review.