# Flux Fashion Storefront

Immersive apparel experience referencing 2025 runway-inspired e-commerce sites featuring dynamic lookbooks and AI styling assistants.

## Inspiration Highlights
- Full-bleed hero video with layering typography.
- Interactive outfit builder powered by AI recommendations.
- Editorial storytelling sections blending lifestyle imagery and product highlights.

## Layout Blueprint
1. **Hero Lookbook** – Autoplay muted video, overlay headline, tagline, and CTA (“Shop the drop”). Include floating size availability badge.  
2. **AI Stylist Panel** – Split section with chat-like interface suggesting outfits; quick filters (Occasion, Mood, Weather).  
3. **Product Grid** – 4-column responsive grid using large imagery, color swatches, quick add-to-bag.  
4. **Story Sections** – Alternating image + copy blocks with parallax background describing materials/sustainability.  
5. **Social Proof** – UGC carousel pulling from Instagram/TikTok (use static placeholders).  
6. **Drop Schedule** – Timeline of upcoming releases with “Remind me” button (connect to email/SMS).  
7. **Footer** – Newsletter, store locator, support.

## Visual Language
- **Color**: Off-black `#030303`, cream `#F8F3EB`, accent magenta `#FF347F`, gold `#FFC46B`.  
- **Typography**: `Editorial New`/`Canela` for headlines, `PP Neue Montreal` or `Inter` for body.  
- **Imagery**: High-res lifestyle shots with grain overlay; use blend modes for hero.

## Component Stack (Open Source)
- Styling: `@picocss/pico` base + custom CSS for grid & video overlay.  
- Icons: `Phosphor Icons` (open source) for bag, heart, filters.  
- Carousel: `Embla` or CSS scroll snap for UGC.  
- AI panel: integrate with product recommender; placeholder markup provided.  
- Animations: `GSAP` or CSS `scroll-timeline` for parallax.

## Interaction & Motion
- Hero text enters with delayed fade; video dims on scroll while nav bar solidifies.  
- AI Stylist chat bubble animates on send; suggestions appear with typing indicator.  
- Product card hover zooms image slightly and reveals color swatches.  
- Drop schedule timeline pins to viewport; current drop highlighted with gradient.

## Customization Checklist
- [ ] Replace hero video with brand film (optimize to < 8 MB).  
- [ ] Configure product grid to fetch via API (Shopify, Commerce Layer).  
- [ ] Add analytics tracking for “Add to bag” from quick-view.  
- [ ] Update AI responses to match inventory attributes.  
- [ ] Ensure fallback imagery for slow networks.

## Component Snippet
```html
<section class="ai-stylist container">
  <div class="chat-window">
    <div class="bubble incoming">I have a rooftop event this weekend.</div>
    <div class="bubble outgoing accent">Try the Aurelia wrap dress with the Nova jacket for chilly evenings.</div>
    <div class="bubble outgoing">Pair with Solstice heels for an elevated finish.</div>
  </div>
  <aside class="filters">
    <h3>Style filter</h3>
    <button class="chip active">Occasion</button>
    <button class="chip">Mood</button>
    <button class="chip">Weather</button>
  </aside>
</section>
```
