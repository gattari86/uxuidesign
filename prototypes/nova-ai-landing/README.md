# Nova AI Landing Prototype

Static implementation of the **Nova AI Landing** blueprint using Pico.css, Tabler Icons, and lightweight custom CSS. This prototype demonstrates the layout, color system, and micro-interactions described in `templates/ai-product-landing/nova-ai-landing.md`.

## Preview

Open `index.html` in your browser (double-click or serve via a simple HTTP server, e.g. `npx serve .`) to explore:

- Hero split layout with conversational AI preview card
- Value pillar grid, prompt builder walkthrough, and use-case carousel
- Security highlights and pricing cards with billing toggle

## Stack

- [Pico.css](https://picocss.com/) for semantic defaults
- [Tabler Icons Webfont](https://tabler-icons.io/) for iconography
- Custom styles in `styles.css` for gradients, glassmorphism, and responsive behavior

## Customization Notes

- Update brand colors in `styles.css` (`--accent-primary`, `--accent-secondary`) to match your palette.
- Replace `assets/logo-grid.svg` with real customer logos or trust badges.
- Hook CTAs to real destinations and wire the billing toggle to live pricing if integrating with a backend.

Use this as a foundation for further iteration (React/Vue builds, CMS integration, etc.).
