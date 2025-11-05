# Solstice Wellness Platform

Holistic health product combining habit tracking, coaching, and community—mirroring 2025 wellness platforms with immersive storytelling and personalized routines.

## Inspiration Highlights
- Sunrise-inspired gradient backgrounds symbolizing renewal.
- Daily ritual builder with drag-and-drop modules.
- Community accountability feed mixing long-form reflections and quick kudos.

## Experience Flow
1. **Welcome Dashboard** – Greeting with user name, mood check-in, and daily ritual summary.  
2. **Routine Builder** – Drag modules (Breathwork, Movement, Journaling, Supplements) into timeline; adjust durations.  
3. **Coach Corner** – Video or audio message from coach, paired with AI-curated action list.  
4. **Progress Insights** – Charts for streaks, energy scores, and sleep quality with weekly recap.  
5. **Community Feed** – Card-based feed with filters (Circle, Global). Each post supports reactions, voice notes, and supportive prompts.  
6. **Resource Library** – Categorized content (Meditations, Recipes, Labs) with search/filter.  
7. **Settings & Integrations** – Connect wearables (Apple Health, Oura), notification settings, privacy controls.

## Visual Language
- **Color**: Dawn gradient `#FF9A9E → #FAD0C4`, deep indigo `#1A2A6C`, accent sage `#88D498`.  
- **Typography**: `Calistoga` or `Recoleta` for headings, `Work Sans` for body.  
- **Illustration**: Organic shapes, soft shadows, hand-drawn icons for rituals.

## Component Stack (Open Source)
- Web framework: `Next.js` with `@picocss/pico` or `Tailwind` (if already adopted).  
- Drag-and-drop: `SortableJS` or `React Beautiful DND`.  
- Charts: `Recharts` with pastel palette.  
- Media: `Mux`/`Vimeo` for coach content, fallback images.  
- Icons: `Iconoir` or `Tabler` with softened edges.

## Interaction & Motion
- Mood selector uses radial buttons with subtle pulse to encourage interaction.  
- Routine modules animate into timeline using `flip` animations.  
- Community reactions appear with burst micro-animation; include reduced motion fallback.  
- Provide mindful soundscapes toggled via audio player.

## Customization Checklist
- [ ] Connect to health data APIs securely (OAuth).  
- [ ] Provide HIPAA/GDPR compliance messaging where relevant.  
- [ ] Configure community moderation tools and reporting.  
- [ ] Localize copy for global cohorts; include inclusive imagery.  
- [ ] Set up daily notification schedule (push/email).

## Example Markup
```html
<section class="routine-builder container">
  <header>
    <h2>Design your sunrise ritual</h2>
    <p>Drag blocks into your morning timeline.</p>
  </header>
  <div class="module-library">
    <button class="module">Breathwork · 5 min</button>
    <button class="module">Movement · 10 min</button>
    <button class="module">Journaling · 5 min</button>
  </div>
  <div class="timeline dropzone">
    <!-- Drop modules here -->
  </div>
</section>
```
