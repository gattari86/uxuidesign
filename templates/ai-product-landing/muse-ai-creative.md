# Muse AI Creative

Landing page tailored for AI-assisted creative tools (design, copy, motion). Inspired by vibrant 2025 portfolio product launches featuring hybrid 2D/3D storytelling.

## Inspiration Highlights
- Bold typographic hero with animated word swaps (“design”, “render”, “write”).  
- Immersive gallery mixing motion loops and stills with color-synced backgrounds.  
- Community-centric proof (creator spotlights, template marketplace).

## Page Structure
1. **Hero Statement** – Full-width headline with rotating verbs, single CTA (“Try editor”) + secondary link (“Browse templates”).  
2. **Live Canvas Demo** – Embedded editor preview (image carousel or interactive Figma embed) framed inside Mac-style window.  
3. **Template Marketplace** – Masonry grid (3 columns desktop, single column mobile) showcasing templates with category chips (Poster, Social, Motion, Decks).  
4. **Creator Spotlight** – Profile cards with portrait, specialty tags, and mini galleries (use horizontal scroll).  
5. **Workflow Steps** – 1-2-3 cards describing “Spark”, “Compose”, “Publish”.  
6. **Plans for Creators & Teams** – Pricing cards with toggles for `Creator`, `Studio`, `Enterprise`.  
7. **Community Callout** – Discord/Slack invitation, event calendar, resource downloads.  
8. **Footer** – Product links, resources, community, legal.

## Visual Language
- **Color**: Vibrant gradient backgrounds such as `#FF6FD8 → #3813C2`, with pastel neutrals for content blocks.  
- **Typography**: `General Sans` or `Space Grotesk` for headings, `Cabinet Grotesk` accent for rotating words; body set in `Inter` 18px.  
- **Imagery**: Combine 3D elements (3dicons) with rendered UI cards. Use blend modes (`mix-blend-mode: screen`) for hero overlays.  
- **Iconography**: Lucide icons with 2px strokes and rounded caps.

## Component Stack (Open Source)
- Base: `@picocss/pico` with custom CSS variables (`--brand-1`, `--brand-2`).  
- Masonry: `css-grid` with `grid-auto-rows` technique; optional `Masonry.js` for older browsers.  
- Carousel: `embla-carousel` or CSS snap scroll for galleries.  
- Animation: `Splitting.js` for word rotation; fallback to CSS keyframes.  
- Icons: `lucide-react` for creative set; combine with `3dicons` for hero objects.

## Interaction & Motion
- Hero word rotation every 2.5s with fade+slide effect; ensure `prefers-reduced-motion` swaps to static copy.  
- Template cards lift on hover and reveal metadata overlay (size, category, rating).  
- Creator spotlight uses auto-scroll marquee with pause on hover.  
- CTA buttons use gradient border animation using `background-position` shifting.

## Customization Checklist
- [ ] Curate actual template thumbnails and link to live demos.  
- [ ] Swap gradient tokens to align with product palette.  
- [ ] Feature real community members; include consent + credits.  
- [ ] Localize event times and market-specific perks.  
- [ ] Wire pricing buttons to checkout or onboarding flow.

## Quick Component Markup
```html
<section class="template-marketplace container">
  <header>
    <h2>Create with 1,200+ ready-to-remix templates.</h2>
    <div class="chips">
      <button class="chip active">All</button>
      <button class="chip">Poster</button>
      <button class="chip">Social</button>
      <button class="chip">Motion</button>
    </div>
  </header>
  <div class="masonry">
    <article class="template-card">
      <img src="/artboards/poster01.png" alt="Gradient poster template">
      <div class="meta">
        <span>Poster</span>
        <p>Dreamstate Festival Launch Kit</p>
      </div>
    </article>
    <!-- Repeat -->
  </div>
</section>
```
