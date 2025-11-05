# Nova AI Landing

High-impact hero layout inspired by 2025 AI SaaS showcases featuring luminous gradients, floating UI previews, and conversational call-to-actions.

**Prototype:** `prototypes/nova-ai-landing/index.html` (Pico.css + Tabler Icons implementation)

## Inspiration Highlights
- Gradient-drenched hero blocks with soft neon glows (seen across recent AI copilots and automation suites).
- Split-screen storytelling that pairs marketing copy with live prompt builders or workflows.
- Trust banners featuring ecosystem integrations and security badges.

## Page Structure
1. **Hero** – Split layout: left column hosts headline, subhead, primary CTA; right column renders a layered card stack showing AI responses. Include a secondary CTA linking to a video demo.  
2. **Value Pillars** – Three-card grid describing speed, accuracy, and collaboration. Pair each card with an icon from Tabler (`IconBolt`, `IconShieldCheck`, `IconUsersGroup`).  
3. **Interactive Prompt Builder** – Full-width section with a simplified prompt input, response preview, and toggle chips (use Every Layout `switcher`).  
4. **Use Case Carousel** – Horizontal scroll (CSS snap) with cards for Marketing, Product, Support, Ops.  
5. **Social Proof** – Logo strip + rotating quote carousel using Animate.css `fadeInUp`.  
6. **Pricing & CTA** – Two-tier pricing cards (Starter, Growth) with toggle for annual/monthly.  
7. **Footer** – Links, compliance, newsletter.

## Visual Language
- **Color**: Midnight gradient background (`#0B1026` → `#221E54`) with electric accent (`#7B6CFF`) and success teal (`#36E1A9`). CTA hover uses `linear-gradient(120deg, #7B6CFF, #36E1A9)`.  
- **Typography**: `Clash Display` (or `Bricolage Grotesque`) for headings; `Inter` for body. Set headings at 56/40/32 px across breakpoints with 1.1 line-height.  
- **Imagery**: Glassmorphic cards (background rgba(255,255,255,0.08), border `rgba(123,108,255,0.4)`). Use subtle noise texture overlay.

## Component Stack (Open Source)
- Base styling: `@picocss/pico` as semantic reset + custom tokens for gradients.  
- Icons: `@tabler/icons-react` or SVG set.  
- Layout helpers: `every-layout` switcher/cluster for cards and logos.  
- Motion: `animate.css` for hero entrance, `framer-motion` optional for React builds.  
- Illustration: 3D icon hero from [3dicons.co](https://github.com/realvjy/3dicons) to anchor the prompt preview.

## Interaction & Motion Suggestions
- Hero card hover lifts 12px with shadow transition (`box-shadow: 0 40px 80px rgba(34,30,84,0.35)`), easing `cubic-bezier(0.16, 1, 0.3, 1)`.  
- Prompt chips animate with `scale(1.05)` on active.  
- Pricing toggle animates between monthly/annual using CSS `clip-path` wipe.  
- Use `prefers-reduced-motion` media query to swap animations for fades.

## Customization Checklist
- [ ] Replace hero cards with real product screenshots framed inside rounded containers.  
- [ ] Update color tokens to match brand palette while keeping contrast ≥ 4.5:1.  
- [ ] Swap icons to match your feature language.  
- [ ] Localize CTA copy and align metrics (use the field guide’s social proof best practices).  
- [ ] Connect pricing cards to actual plan data via CMS or config file.

## Quick HTML Skeleton
```html
<main class="container hero">
  <section class="hero-grid">
    <div class="hero-copy">
      <span class="eyebrow">AI Workspace 2.0</span>
      <h1>Ship better answers in minutes, not weeks.</h1>
      <p>Nova coordinates knowledge, prompts, and stakeholders so your team delivers perfect responses every time.</p>
      <div class="cta-group">
        <a class="btn primary" href="#start">Start free trial</a>
        <button class="btn ghost" data-video>Watch 90s demo</button>
      </div>
    </div>
    <aside class="hero-preview">
      <!-- Replace with real UI capture -->
      <div class="prompt-card">
        <label>Prompt</label>
        <textarea>Draft a launch announcement for our new analytics copilot...</textarea>
        <div class="response">
          <h4>Nova response</h4>
          <p>Here’s a launch post that emphasizes speed-to-insight...</p>
        </div>
      </div>
    </aside>
  </section>
</main>
```
