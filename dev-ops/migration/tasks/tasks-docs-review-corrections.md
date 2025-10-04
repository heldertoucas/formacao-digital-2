## Relevant Files

- `docs/01-ONBOARDING/01-Getting-Started.md` - Contains the incorrect development server port number.
- `docs/03-DEVELOPMENT-WORKFLOWS/02-Adding-Program-Features.md` - Contains incorrect routing instructions for a Next.js application.

### Notes

- The goal is to correct the documentation to accurately reflect the project's configuration and prevent confusion for developers.

## Tasks

- [x] 1.0 Correct Development Server Port
  - [x] 1.1 Open `docs/01-ONBOARDING/01-Getting-Started.md`.
  - [x] 1.2 Change the URL from `http://localhost:5173` to the Next.js default, `http://localhost:3000`.
- [x] 2.0 Update Routing Instructions for Next.js
  - [x] 2.1 Open `docs/03-DEVELOPMENT-WORKFLOWS/02-Adding-Program-Features.md`.
  - [x] 2.2 Remove the section "Add the Route in the Portal App" which contains `react-router-dom` examples.
  - [x] 2.3 Replace it with a new section explaining how to create a new route in Next.js by creating a new folder and a `page.tsx` file within the `apps/portal/src/app` directory.
  - [x] 2.4 Provide a correct example, such as creating the file `apps/portal/src/app/ia/cyber-security/page.tsx` to make the `CyberSecurityPage` component available at the `/ia/cyber-security` route.
