
## Relevant Files

- `apps/portal/src/app/page.tsx` - The main landing page file where the new sections will be built.
- `apps/portal/src/app/layout.tsx` - The root layout for the portal; may require adjustments for smooth-scrolling.
- `apps/portal/src/app/not-found.tsx` - The custom 404 "Not Found" page.
- `apps/portal/src/app/passaporte/page.tsx` - The placeholder page for the "Passaporte" program route.
- `apps/portal/src/app/futuro/page.tsx` - The placeholder page for the "Futuro Digital" program route.
- `apps/portal/src/app/ia/page.tsx` - The placeholder page for the "IA para Todos" program route.
- `packages/ui/src/organisms/SiteHeader/SiteHeader.tsx` - The header component, which may need modification to handle anchor links.

### Notes

- All new page content will be built using components from the `packages/ui` library to ensure consistency.
- Routing is handled by the Next.js App Router file-system-based routing.

## Tasks

- [x] 1.0 Configure Application Routing
  - [x] 1.1 Create the directory `apps/portal/src/app/passaporte` and add a basic `page.tsx`.
  - [x] 1.2 Create the directory `apps/portal/src/app/futuro` and add a basic `page.tsx`.
  - [x] 1.3 Create the directory `apps/portal/src/app/ia` and add a basic `page.tsx`.

- [x] 2.0 Build Landing Page Layout
  - [x] 2.1 Clear the default content from `apps/portal/src/app/page.tsx`.
  - [x] 2.2 Import and place the `SiteHeader` and `SiteFooter` components.
  - [x] 2.3 Create placeholder `<section>` tags for the Hero, About, Testimonials, and Contact sections, assigning `id="about"` and `id="contact"` respectively.

- [x] 3.0 Populate Sections with Static Content
  - [x] 3.1 Implement the Hero section, using `Card` and `Button` components to display the three programs as described in the PRD.
  - [x] 3.2 Implement the "About Us" section with the title and text from the PRD.
  - [x] 3.3 Implement the Testimonials section, using `Card` components to display the three testimonials.
  - [x] 3.4 Implement the Contact section, displaying the address, email, phone, and social media links.

- [x] 4.0 Implement Page Interactivity
  - [x] 4.1 Configure the `SiteHeader`'s "About" and "Contact" links to smooth-scroll to the `#about` and `#contact` sections on the landing page.
  - [x] 4.2 Verify that the CTA buttons on the three program cards navigate to `/passaporte`, `/futuro`, and `/ia`.

- [x] 5.0 Create Custom 404 Page
  - [x] 5.1 Create the file `apps/portal/src/app/not-found.tsx`.
  - [x] 5.2 Implement a user-friendly 404 page using `SiteHeader`, `SiteFooter`, and a `Card` to display a "Page Not Found" message.
