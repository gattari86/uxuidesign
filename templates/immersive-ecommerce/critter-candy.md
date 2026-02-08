# Critter Candy

Playful e-commerce experience for artisanal animal-shaped candies featuring whimsical storytelling, creature collections, and interactive flavor discovery.

## Inspiration Highlights
- Animated hero with candy creatures "coming to life" with micro-interactions.
- Color-coded critter collections with habitat-themed browsing.
- Interactive flavor safari quiz to discover your perfect candy animal.

## Layout Blueprint
1. **Hero Habitat** – Illustrated landscape scene with animated candy animals, headline "Every Critter Tells a Flavor Story", primary CTA ("Start Your Safari"), floating "New: Woodland Collection" badge.
2. **Flavor Safari Quiz** – Interactive 4-step quiz with playful questions (Sweet tooth or sour side? Jungle or ocean?); reveals personalized critter recommendation.
3. **Critter Collections Grid** – Category cards organized by habitat: Woodland, Ocean, Safari, Tropical, Arctic. Each with illustrated preview and creature count.
4. **Featured Creatures** – 3-column product spotlight with candy creature profiles (name, habitat, flavor notes, fun fact), quick "Add to Bag" with quantity selector.
5. **Crafting Story** – Scrolling timeline showing "From Sketch to Sweet" with illustrated steps: concept art, flavor development, candy sculpting, quality check.
6. **Customer Critter Showcase** – Photo grid of customers with their candy collections, hashtag integration, "Share your #CritterCollection" CTA.
7. **Gift Builder** – Interactive mixed collection creator with drag-and-drop creatures into gift boxes, real-time preview.
8. **Footer** – Newsletter signup ("Join the Critter Club"), store locator, allergen info, wholesale inquiries.

## Visual Language
- **Color**: Warm cream `#FFF8F0`, forest green `#2D5F3F`, coral `#FF7F6B`, sky blue `#87CEEB`, chocolate brown `#5C3D2E`.
- **Typography**: `Fredoka` or `Poppins` for playful headlines, `DM Sans` or `Inter` for body copy, `Caveat` for handwritten accents.
- **Imagery**: Watercolor-style illustrations mixed with high-res candy photography, subtle paper texture overlay, soft drop shadows.

## Component Stack (Open Source)
- Styling: `@picocss/pico` for base semantics + custom CSS for candy-themed components.
- Icons: `Lucide` (open source) for shopping bag, heart, info, arrow navigation.
- Animations: `Animate.css` for creature entrances, CSS keyframes for floating/bobbing effects.
- Quiz Logic: Vanilla JavaScript with scored outcomes mapped to critter profiles.
- Illustrations: `unDraw` or `DrawKit` for habitat scenes (customize colors).

## Interaction & Motion
- Hero creatures gently bob with CSS animations; clicking a creature triggers a playful bounce and flavor tooltip.
- Quiz answers trigger a trail of sparkles/confetti before revealing the recommended critter.
- Collection cards tilt slightly on hover with 3D transform; habitat background subtly animates.
- Gift builder drag gestures show dotted path trail; creatures snap into box slots with satisfying animation.
- Scroll-triggered entrance animations for product cards (stagger effect top to bottom).

## Customization Checklist
- [ ] Replace placeholder illustrations with custom candy creature artwork.
- [ ] Connect product grid to inventory API (Shopify, WooCommerce, or custom backend).
- [ ] Implement quiz scoring algorithm and map to actual product SKUs.
- [ ] Add allergen filtering and dietary preferences (vegan, gluten-free, nut-free).
- [ ] Configure Instagram API for customer photo feed or use moderated uploads.
- [ ] Set up email capture integration for newsletter and abandoned cart recovery.
- [ ] Optimize images for web (WebP format, lazy loading).

## Component Snippet
```html
<section class="critter-collections container">
  <h2>Explore by Habitat</h2>
  <div class="habitat-grid">
    <article class="habitat-card woodland">
      <div class="habitat-illustration">
        <img src="/assets/woodland-scene.svg" alt="Woodland creatures">
      </div>
      <h3>
        <i class="lucide lucide-trees"></i>
        Woodland Wonders
      </h3>
      <p>Bears, foxes, and bunnies in caramel, maple, and berry flavors</p>
      <span class="creature-count">12 Creatures</span>
      <button class="secondary">Explore Collection</button>
    </article>

    <article class="habitat-card ocean">
      <div class="habitat-illustration">
        <img src="/assets/ocean-scene.svg" alt="Ocean creatures">
      </div>
      <h3>
        <i class="lucide lucide-waves"></i>
        Ocean Odyssey
      </h3>
      <p>Dolphins, turtles, and jellyfish in blue raspberry, sea salt, and citrus</p>
      <span class="creature-count">10 Creatures</span>
      <button class="secondary">Explore Collection</button>
    </article>

    <article class="habitat-card safari">
      <div class="habitat-illustration">
        <img src="/assets/safari-scene.svg" alt="Safari creatures">
      </div>
      <h3>
        <i class="lucide lucide-palmtree"></i>
        Safari Sweets
      </h3>
      <p>Lions, elephants, and giraffes in mango, passion fruit, and honey</p>
      <span class="creature-count">14 Creatures</span>
      <button class="secondary">Explore Collection</button>
    </article>
  </div>
</section>

<section class="flavor-safari container">
  <div class="quiz-container">
    <h2>Find Your Flavor Match</h2>
    <div class="quiz-step active" data-step="1">
      <p class="quiz-question">What's your flavor personality?</p>
      <div class="quiz-options">
        <button class="quiz-option" data-score-sweet="5">
          <span class="option-emoji">🍬</span>
          Sweet & Fruity
        </button>
        <button class="quiz-option" data-score-sour="5">
          <span class="option-emoji">🍋</span>
          Sour & Tangy
        </button>
        <button class="quiz-option" data-score-rich="5">
          <span class="option-emoji">🍫</span>
          Rich & Decadent
        </button>
      </div>
    </div>
    <div class="quiz-results hidden">
      <h3>Your Perfect Critter Match!</h3>
      <div class="recommended-creature">
        <!-- Populated by JavaScript -->
      </div>
    </div>
  </div>
</section>
```
