# The Banana Republic Restaurant

Bold culinary experience landing page for an all-banana cuisine restaurant featuring immersive storytelling, menu discovery, and reservation system.

## Inspiration Highlights
- Tropical hero with banana plantation imagery and playful "Yes, Everything is Bananas" tagline.
- Interactive menu exploration showing savory-to-sweet banana spectrum.
- Chef's philosophy video with banana farm partnerships and sustainability story.

## Layout Blueprint
1. **Tropical Hero** – Full-screen video of banana groves swaying, gradient overlay (yellow to green), headline "Welcome to The Banana Republic", subtitle "Where Every Dish Celebrates the World's Perfect Fruit", primary CTA ("Reserve Your Table"), secondary CTA ("Explore Menu").
2. **The Concept** – Split section with founder photo + story: "We asked ourselves: What if one ingredient could do it all?" Highlights versatility from appetizers to desserts.
3. **Menu Spectrum** – Horizontal scrolling timeline showing banana's culinary range: Green (Savory) → Yellow (Sweet) → Plantain (Hearty) with signature dish cards at each point.
4. **Featured Dishes Carousel** – Large imagery slider with dish closeups, name, description, "Banana variety used" badge, allergen icons.
5. **From Farm to Fork** – Animated journey map showing banana sourcing from Ecuador/Philippines/Caribbean, sustainability badges (Organic, Fair Trade, Carbon Neutral Shipping).
6. **Chef's Table Video** – Embedded video with play button overlay, quote pull: "Bananas are misunderstood. We're changing that one plate at a time."
7. **Reservation Widget** – Calendar picker, party size selector, time slots, special requests field, "Book Now" CTA, OpenTable/Resy integration.
8. **Press & Awards** – Logo strip from food critics + accolades ("Best Concept Restaurant 2024", Michelin Guide mention), customer testimonials.
9. **Location & Hours** – Embedded map, address, phone, hours table, "Get Directions" button, parking info.
10. **Footer** – Newsletter ("Join the Bunch"), private events inquiry, gift cards, careers.

## Visual Language
- **Color**: Banana yellow `#FFE135`, plantain green `#6B8E23`, caramelized brown `#8B4513`, cream `#FFFACD`, charcoal `#2C2C2C`.
- **Typography**: `Playfair Display` or `Ogg` for elegant headlines, `Manrope` or `DM Sans` for body, `Brush Script MT` for playful accents.
- **Imagery**: High-quality food photography with shallow depth of field, warm color grading, occasional banana leaf patterns as dividers.

## Component Stack (Open Source)
- Styling: `@picocss/pico` for semantic HTML + custom restaurant theme CSS.
- Icons: `Tabler Icons` for utensils, calendar, map pin, clock, phone.
- Carousel: `Embla Carousel` or CSS scroll snap for dishes and testimonials.
- Map: Embedded Google Maps or `Leaflet.js` (open source alternative).
- Calendar: `Air Datepicker` (lightweight) or custom date picker for reservations.
- Video: Native HTML5 `<video>` element with custom controls.

## Interaction & Motion
- Hero video parallax scrolls slower than content for depth effect.
- Menu spectrum timeline scrubs horizontally with scroll wheel; active dish zooms and highlights.
- Featured dish carousel autoadvances every 5s; pause on hover; swipe gestures on mobile.
- Reservation calendar highlights available dates with yellow pulse; unavailable dates grayed out.
- Form validation shows banana-themed success animation (banana dropping into confirmation bucket).
- Scroll-triggered fade-ins for farm-to-fork journey waypoints.

## Customization Checklist
- [ ] Replace placeholder hero video with actual banana grove footage (optimize < 10 MB).
- [ ] Populate menu with real dishes, pricing, and high-res photography.
- [ ] Integrate reservation system API (OpenTable, Resy, or custom backend).
- [ ] Add multilingual support if serving international tourists.
- [ ] Configure Google Maps API key and customize map styling.
- [ ] Set up email notifications for reservations and newsletter signups.
- [ ] Add structured data markup for SEO (LocalBusiness schema).
- [ ] Implement allergen filter/notification system.

## Component Snippet
```html
<section class="menu-spectrum">
  <h2>The Banana Spectrum</h2>
  <p class="subtitle">From savory green to sweet yellow, discover banana's full potential</p>

  <div class="spectrum-scroll">
    <div class="spectrum-track">
      <article class="spectrum-dish savory">
        <div class="dish-image">
          <img src="/assets/green-plantain-chips.jpg" alt="Crispy Plantain Chips">
          <span class="variety-badge green">Green Plantain</span>
        </div>
        <h3>Crispy Plantain Chips</h3>
        <p>Twice-fried green plantains with smoked paprika and lime salt</p>
        <span class="dish-category">Appetizer</span>
      </article>

      <article class="spectrum-dish savory-sweet">
        <div class="dish-image">
          <img src="/assets/banana-curry.jpg" alt="Caribbean Banana Curry">
          <span class="variety-badge yellow-green">Semi-Ripe Banana</span>
        </div>
        <h3>Caribbean Banana Curry</h3>
        <p>Coconut curry with semi-ripe bananas, chickpeas, and aromatic spices</p>
        <span class="dish-category">Main Course</span>
      </article>

      <article class="spectrum-dish sweet">
        <div class="dish-image">
          <img src="/assets/banana-foster.jpg" alt="Flambéed Bananas Foster">
          <span class="variety-badge yellow">Ripe Cavendish</span>
        </div>
        <h3>Flambéed Bananas Foster</h3>
        <p>Caramelized ripe bananas with rum sauce and vanilla bean ice cream</p>
        <span class="dish-category">Dessert</span>
      </article>
    </div>
  </div>
</section>

<section class="reservation-widget container">
  <div class="reservation-card">
    <h2>Reserve Your Table</h2>
    <form class="reservation-form">
      <div class="form-row">
        <label for="party-size">
          <i class="ti ti-users"></i>
          Party Size
          <select id="party-size" required>
            <option value="">Select</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5+">5+ Guests</option>
          </select>
        </label>

        <label for="date">
          <i class="ti ti-calendar"></i>
          Date
          <input type="date" id="date" required>
        </label>

        <label for="time">
          <i class="ti ti-clock"></i>
          Time
          <select id="time" required>
            <option value="">Select</option>
            <option value="17:00">5:00 PM</option>
            <option value="17:30">5:30 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="18:30">6:30 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="19:30">7:30 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="20:30">8:30 PM</option>
            <option value="21:00">9:00 PM</option>
          </select>
        </label>
      </div>

      <label for="special-requests">
        Special Requests or Allergies
        <textarea id="special-requests" rows="3" placeholder="Celebrating an occasion? Let us know!"></textarea>
      </label>

      <button type="submit" class="primary">
        <i class="ti ti-check"></i>
        Confirm Reservation
      </button>
    </form>
  </div>

  <aside class="reservation-info">
    <div class="info-card">
      <i class="ti ti-info-circle"></i>
      <p><strong>Cancellation Policy:</strong> Please provide 24 hours notice for cancellations.</p>
    </div>
    <div class="info-card">
      <i class="ti ti-phone"></i>
      <p><strong>Questions?</strong> Call us at (555) BANANAS</p>
    </div>
  </aside>
</section>
```
