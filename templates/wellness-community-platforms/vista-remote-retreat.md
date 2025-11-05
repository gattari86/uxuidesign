# Vista Remote Retreat

Hybrid retreat and remote experience platform highlighting itinerary planning, immersive content, and mindful commerce—reflecting 2025 experiential wellness trends.

## Inspiration Highlights
- Cinematic hero with layered gradients and atmospheric audio.
- Daily itinerary planner integrating live streams, on-demand sessions, and local explorations.
- Commerce integration for retreat bundles, merchandise, and add-on workshops.

## Experience Flow
1. **Hero Experience** – Full-height hero with parallax mountain imagery, event dates, location, and CTA (“Reserve your spot”). Include ambient audio toggle and weather widget.  
2. **Retreat Overview** – Section covering purpose, hosts, quick stats (capacity, difficulty level, community rating).  
3. **Itinerary Planner** – Interactive timeline showing day-by-day schedule with session cards (live, recorded, exploration). Allow toggling between local time zones.  
4. **Immersive Content** – Content grid mixing 360° video teasers, meditation audio playlists, and photo essays.  
5. **Add-On Marketplace** – Cards for workshops, private sessions, merchandise with quick add.  
6. **Community Lounge** – Testimonials, discussion prompts, embedded chat or Discord link.  
7. **Logistics & FAQ** – Travel details, packing list, cancellation policy.  
8. **Booking CTA** – Pricing tiers, payment plans, secure checkout.

## Visual Language
- **Color**: Twilight gradient `#0F2027 → #203A43 → #2C5364`, accent amber `#F5A623`, sage `#8CBDBA`.  
- **Typography**: `Playfair Display` for headings, `Nunito` or `Work Sans` for body.  
- **Imagery**: Large-format nature photography, minimal icon overlays.  
- **Iconography**: Thin line icons from `Tabler` for itinerary markers and logistics.

## Component Stack (Open Source)
- Framework: `Next.js` + `@picocss/pico` or `Tailwind` for utility styling.  
- Timeline: `framer-motion` or `GSAP` for timeline reveals; fallback CSS `scroll-snap`.  
- Audio: `<audio>` with custom controls; use `howler.js` if advanced mixing needed.  
- Video: `mux-player` or embedded Vimeo for 360° content.  
- Payment: integrate with Stripe Checkout; placeholders provided.

## Interaction & Motion
- Hero gradient shifts based on time-of-day (JS updates CSS variables).  
- Itinerary cards expand on click to show details; include add-to-calendar button.  
- Atmosphere audio uses subtle equalizer animation; auto-pauses with `prefers-reduced-motion`.  
- Add-on cards flip to show details when focused/hovered.  
- Booking CTA includes stepper modal (guest info → payment → confirmation).

## Customization Checklist
- [ ] Update event details, hosts, imagery, and ambient audio.  
- [ ] Connect itinerary to CMS for flexible session updates.  
- [ ] Configure booking integration (Stripe, Rezdy, custom).  
- [ ] Provide accessibility accommodations (captions, audio descriptions).  
- [ ] Localize language, currency, and time zone conversions.

## Example Markup Snippet
```html
<section class="itinerary container">
  <header>
    <h2>Your Vista Journey</h2>
    <div class="timezone-toggle">
      <button class="chip active" data-zone="local">Local time</button>
      <button class="chip" data-zone="viewer">Your time</button>
    </div>
  </header>
  <div class="timeline">
    <article class="session live">
      <time>08:00</time>
      <h3>Sunrise Breathwork</h3>
      <p>Guided by Maya Chen · Beachfront</p>
      <button class="btn outline">Add to calendar</button>
    </article>
    <!-- Repeat for sessions -->
  </div>
</section>
```
