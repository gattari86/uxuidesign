# Terra Home Decor Experience

Nature-inspired furniture store with AR previews and sustainability storytelling, echoing 2025 eco-luxury commerce trends.

## Inspiration Highlights
- Soft earthy palette with botanical illustrations.
- Augmented reality/3D viewer integrated directly on product pages.
- Sustainability impact dashboard showcasing materials and certifications.

## Layout Blueprint
1. **Hero Carousel** – Edge-to-edge carousel featuring styled rooms; overlay CTA “View in your space” and ambient sound toggle.  
2. **Material Story** – Section with layered cards describing craftsmanship, sourced materials, and artisan stories.  
3. **Product Spotlight** – Featured product with 3D model viewer (use `<model-viewer>`), variant selector, and sticky buy module.  
4. **Impact Dashboard** – Infographic row displaying CO₂ savings, recycled content, certifications (FSC, Fair Trade).  
5. **Room Bundles** – Grid of bundle cards with nested item list and “Add entire room” CTA.  
6. **Editorial Journal** – Blog previews with photography, to be maintained via CMS.  
7. **Footer** – Sustainability report download, care guides, support.

## Visual Language
- **Color**: Sand `#E6DCCA`, moss `#6F8A6D`, charcoal `#2F2A26`, terracotta `#C66C4E`.  
- **Typography**: `Serif` (e.g., `Recoleta`, `Fraunces`) for display, `Source Sans 3` for body.  
- **Imagery**: Natural light photography, macro material textures. Use subtle paper grain background.

## Component Stack (Open Source)
- Styling: `simple.css` base to emphasize content, extend with CSS variables.  
- 3D: [`<model-viewer>` component](https://github.com/google/model-viewer) for AR and 3D interactions.  
- Icons: `Iconoir` for eco and lifestyle glyphs.  
- Charts: `Chart.js` doughnut charts for impact metrics.  
- Animations: CSS `scroll-triggered` fade; optional `GSAP ScrollTrigger`.

## Interaction & Motion
- Hero carousel crossfades between rooms; ambient audio toggles with icon change.  
- Model viewer rotates on hover (desktop) and allows pinch/zoom on mobile; “View in room” button launches AR Quick Look.  
- Impact metrics count up when entering viewport; include accessible text for screen readers.  
- Journal cards reveal excerpt on hover with `transform: translateY(-8px)` effect.

## Customization Checklist
- [ ] Swap imagery with brand photography; compress for performance.  
- [ ] Supply glTF/USDZ files for 3D viewer; ensure fallback static image.  
- [ ] Update impact metrics with verified sourcing data.  
- [ ] Connect CMS for journal entries (Contentful, Sanity).  
- [ ] Localize measurement units (inches vs. cm) and AR region support.

## Example Markup
```html
<section class="impact-dashboard container">
  <article class="impact-card">
    <h3>CO₂ saved</h3>
    <canvas id="co2Chart"></canvas>
    <p>Each Terra sofa offsets 47kg of CO₂ through regenerative forestry.</p>
  </article>
  <article class="impact-card">
    <h3>Certified materials</h3>
    <ul>
      <li>FSC-certified oak</li>
      <li>Organic cotton upholstery</li>
      <li>Non-toxic finishes</li>
    </ul>
  </article>
</section>
```
