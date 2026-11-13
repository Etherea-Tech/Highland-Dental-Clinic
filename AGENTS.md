# Highland Hills Dental Centre

## Collaboration
- Work step by step. Discuss a new phase before implementing it; complete already approved changes without repeated permission requests.
- Current approved phase: finalize and test the approved responsive homepage and push its source to the existing GitHub remote. Preserve the personally designed icons and testimonial card styling.
- Keep this project local unless the user explicitly requests publication.
- Preserve unrelated user changes, including existing package-lock.json changes.

## Brand and UI
- Use the existing original logo at public/logo.png; do not redraw or replace it with a text wordmark.
- Use the full name Highland Hills Dental Centre consistently.
- Brand palette: slate #4a597a, teal #4c9cb5, white #fefefe. These are existing project colours, not independently verified archival CSS values.
- Use deeper teal #34768a for readable button backgrounds and small text. Dark supporting slate is #26364a.
- Prefer calm, readable layouts, generous space, accessible links, and responsive navigation.
- Light is the default; an explicit theme preference uses the clinic-specific highland-colour-theme storage key.
- Do not invent staff, reviews, ratings, patient numbers, opening hours, availability guarantees, or clinical claims. Ask the user to verify existing placeholders before launch.

## Project
- React 19, Vite 7, Tailwind CSS 4, React Router.
- Active navigation: src/Components/Header.jsx. Navigation.jsx is a separate legacy component.
- Shared legacy colours: src/index.css. Stitch homepage styling: src/clinic.css. Shared contact details: src/clinicDetails.js. Routes: src/App.jsx.
- Preserve all existing inline SVG elements and src/assets/icons files exactly unless the user explicitly requests an icon change. Do not substitute Stitch service/menu icons.
- Stitch images in public/images/stitch are demo assets from the user export; confirm staff identity, real photography and testimonial authenticity before publication.
- The appointment form currently prepares a mailto draft; do not claim a booking or email was sent. Server-side form delivery is not configured.
- Use npm run build to verify UI changes. Check the affected desktop and mobile layouts when browser tooling is available.
