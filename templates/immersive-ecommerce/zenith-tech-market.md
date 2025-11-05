# Zenith Tech Marketplace

High-performance electronics retailer with modular product cards, comparison tools, and immersive feature storytelling mirroring 2025 top tech storefronts.

## Signature Traits
- Bold, high-contrast color blocking with diagonal accents.
- Product comparison hub with sticky summary.
- Tech specs presented via interactive modules (hover to highlight).

## Layout Blueprint
1. **Hero Stack** – Rotating hero cards for flagship devices; each card includes performance stat, CTA, and quick spec chips.  
2. **Product Grid with Filters** – Filter bar (Category, Price, Ratings, Availability). Grid uses 3-column layout with quick compare checkboxes.  
3. **Comparison Drawer** – When users select products, slide up panel lists specs side-by-side with call-to-action “Checkout bundle”.  
4. **Feature Storytelling** – Alternating sections combining 3D renders and copy focusing on performance, design, sustainability.  
5. **Customer Benchmarks** – Charts showing benchmark scores vs. competition (bar/radar).  
6. **Support & Warranty** – Accordion for FAQ, warranty coverage, chat support.  
7. **Footer** – Newsletter, store services, community forum.

## Visual Language
- **Color**: Dark slate `#090B13`, electric cyan `#00D1FF`, signal orange `#FF6F3C`, white `#FFFFFF`.  
- **Typography**: `Space Grotesk` or `Sora` for headings, `Inter` for body, `JetBrains Mono` for specs.  
- **Imagery**: High-resolution renders, device exploded views with neon glows.

## Component Stack (Open Source)
- Base: `@picocss/pico` + custom theme tokens.  
- Icons: `Tabler Icons` for device categories, `Lucide` for interaction states.  
- Comparison: Custom CSS grid or `ag-grid` (community) for advanced spec tables.  
- Charts: `Chart.js` radar/bar for benchmarks.  
- 3D: Use WebGL viewer (`react-three-fiber`) or embed pre-rendered animations.

## Interaction & Motion
- Hero cards auto-rotate every 6s; allow manual switch with pagination dots.  
- Comparison drawer slides up with `transform: translateY(0)` when ≥2 items selected; highlight differences in color.  
- Feature sections use `scroll-trigger` animations to reveal spec callouts.  
- Buttons use micro-movement (hover offset 4px) and glow shadow.  
- Provide product quick-view modal with gallery + specs.

## Customization Checklist
- [ ] Bind product data from commerce backend (Commerce Layer, Shopify, custom API).  
- [ ] Populate comparison specs (CPU, GPU, battery, warranty).  
- [ ] Swap hero renders with actual product photography.  
- [ ] Localize currency, shipping estimates, and support content.  
- [ ] Implement analytics events for compare interactions and add-to-cart.

## Example Component
```html
<div class="product-card">
  <img src="/devices/zenith-x1.png" alt="Zenith X1 Ultrabook">
  <h3>Zenith X1</h3>
  <p class="spec">Intel X-Core 14 | 32GB RAM | 2TB NVMe</p>
  <div class="actions">
    <label><input type="checkbox" data-compare> Compare</label>
    <button class="btn primary">Add to cart</button>
  </div>
</div>
```
