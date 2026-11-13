# Approved homepage validation — November 13, 2026

The approved design is the permanent React Router `/` route. It is not dependent on a temporary demo server or comparison snapshot.

## Checks completed

- `npm run build`: passes; Vite retains its existing large-JavaScript-chunk advisory.
- ESLint on App, all homepage components, shared clinic details, and team data: passes.
- `git diff --check`: passes.
- Custom icon preservation: SHA-256 comparison against the pre-redesign snapshot passes for all eight tracked component/icon groups.
- Chrome desktop: header, hero, clinic image, slider selection, contact section, and footer checked.
- Chrome emulated 393px phone: hero copy, slider overlay, dots, emergency section, rating badge, and mobile navigation checked. Reviews navigation closes the menu and reaches the correct anchor.
- Chrome emulated 320px: compact header, fixed contact actions, contact heading/details/hours checked. Added narrow-screen wrapping and shrink safeguards.
- Chrome emulated 768px: header and two-column team layout checked.
- Appointment CTA reaches `/#contact`. Submitting an empty form displays native required-field validation and focuses First name; no email was sent.
- Hero/team responsive variants: generated 14 JPEGs (about 1.44 MB combined), with `srcSet`/`sizes` selection on the homepage. Original uploads are preserved.

## Remaining limitations

- Direct clinic email delivery is not connected; the form still prepares a `mailto:` draft. Do not present it as a confirmed booking.
- Repository-wide `npm run lint` still flags legacy files: lowercase `motion` JSX usage, a CommonJS helper, an unused state value in a service page, and the mixed hook/component export in ThemeContext. The scoped homepage check passes.
- Browser checks were manual Chrome viewport checks, not real-device or cross-browser certification. No automated full-page overflow audit was performed.
- Ratings/reviews are a static snapshot. Profile images and web fonts require their external hosts.
- Pushing Git source does not by itself establish a new hosted client-preview URL. Existing host integrations may deploy independently.
