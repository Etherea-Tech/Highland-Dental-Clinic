# Highland Hills Dental Centre

Local redesign of the clinic website, built with React, Vite, Tailwind CSS, and React Router.

## Development

```sh
npm install
npm run dev -- --port 3000
```

The current review URL is http://localhost:3000. Production build: `npm run build`. Build preview: `npm run preview`.

## Agreed design direction

Preserve the original logo in `public/logo.png`. Build a lighter homepage around slate blue, teal, and white, with a calm header and an approachable hero. Work through later changes with the user step by step. The approved design is the permanent `/` homepage. The source is maintained on GitHub; deployment and domain changes are separate from this source update.

| Use | Colour |
| --- | --- |
| Original project slate | `#4a597a` |
| Original project teal | `#4c9cb5` |
| White | `#fefefe` |
| Deeper teal for readable text and buttons | `#34768a` |
| Supporting dark slate | `#26364a` |

These brand values came from the existing project; exact archived CSS values have not been independently verified.

## Current homepage implementation

The approved Stitch export has been integrated into the existing React components at http://localhost:3000. It includes the availability banner, stronger call action, light hero with the patient-focused card, emergency panel, team grid, service cards, contact form, and Etheria Tech footer credit.

The testimonials use three equal-height cards with up to eight visible lines, profile images, Google Maps links, and the original quotation-mark styling. Shared rating badges display 4.9/5 from 812 Google reviews. Review provenance is recorded in `REVIEW_SOURCES.md`. All original inline SVGs and icon files were compared against the pre-implementation snapshot and are unchanged. The original logo already has transparency and is reused without modification.

Homepage styles live in `src/clinic.css`. Contact details and opening hours are shared through `src/clinicDetails.js`. Sub-service content and its custom icons remain in place. The homepage uses the fonts from Stitch (Plus Jakarta Sans and Inter); legacy service pages retain Poppins.

The form currently prepares an email draft. Direct email delivery remains a follow-up task; it does not submit a confirmed booking. No server-side mail delivery or appointment scheduling service is configured.

## Comparison snapshots

- Original project: http://localhost:3001, running from `/private/tmp/highland-original-x8mgvjes`.
- Earlier revised design: http://localhost:3002, running from `/private/tmp/highland-revised-0777ln66`.
- Temporary comparison snapshots are outside the repository and are not permanent backups.

## Before publication

- Confirm staff names, biographies, credentials, and photography. The homepage uses the user-supplied clinic, treatment, and staff images; unused Stitch demo assets are retained separately.
- Reviews and ratings were checked on Google Maps on November 13, 2026; full displayed review text and profile images were supplied by the user. They are static, not a live feed.
- Confirm phone, email, address, opening hours, social profiles, and emergency arrangements with the clinic. The homepage uses the archive/footer details consistently and does not promise 24/7 or guaranteed same-day treatment.
- Connect the appointment form to the chosen delivery or booking service if an email-draft flow is not desired.
- Domain recovery/ownership and final hosting have not been handled.

## Reference

[Archived clinic website, January 23, 2025](https://web.archive.org/web/20250123174527/https://highlandhillsdentalcentre.com/)

## Validation

Production build and scoped homepage lint pass. The homepage was visually checked in Chrome at 320px, 393px, 768px, and desktop widths. Mobile navigation, the appointment anchor, slider selection, and required-field validation were checked. See `QA.md` for scope and limitations. Icon preservation and logo transparency were checked directly against the source assets. The production build retains a bundle-size advisory; route splitting is a separate performance improvement.

Responsive JPEG variants in `public/images/responsive` let the browser choose smaller hero and team images. The original uploads remain in their original folders.
