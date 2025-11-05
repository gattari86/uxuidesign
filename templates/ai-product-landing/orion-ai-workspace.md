# Orion AI Workspace

Enterprise-focused landing page structured around workflow storytelling, inspired by award-shortlisted 2025 B2B automation platforms.

## Inspiration Highlights
- Dark mode hero with spotlighted workflow timeline and microvideo loops.
- Sectioned narrative (Problem → Solution → Proof) using staggered cards.
- Sticky secondary navigation that tracks to each section.

## Page Structure
1. **Hero Timeline** – Horizontal timeline showing “Collect → Understand → Act” with animated steps. Primary CTA (“Book live walkthrough”), secondary CTA (“Download security brief”).  
2. **Operational Pain Points** – Three-column grid presenting customer struggles with stats (use Tabler icons `IconAlertTriangle`, `IconClockHour4`, `IconFileAnalytics`).  
3. **Workflow Deep Dive** – Stacked cards for Intake, Review, Deployment; each includes a looping 8–10 second product clip (use muted autoplay video).  
4. **Integration Matrix** – Responsive grid (6×2) showcasing partner logos with filters (`data-filter` for categories).  
5. **Outcome Metrics** – KPIs inside glass cards (e.g., `47% faster SLA`, `32k decisions/month`).  
6. **Customer Stories** – Quote slider with customer headshots (circular) and industry tags.  
7. **Security & Compliance** – Accordion for SOC2, ISO 27001, GDPR.  
8. **Conversion Footer** – Rich contact form (name, work email, team size, goals).

## Visual Language
- **Color**: Charcoal base `#050B17`, accent gradient `#2F7BFF → #6C5BFF`, highlight lime `#C9FF5A`.  
- **Typography**: `Satoshi` or `Neue Haas Grotesk` for headings; `IBM Plex Sans` for body. H1 64px / H2 40px / Body 18px.  
- **Iconography**: Outline icons with 2px stroke to match Tabler aesthetic.  
- **UI Motifs**: Angled separators, dotted grid backgrounds, thin boundary lines `rgba(255,255,255,0.08)`.

## Component Stack (Open Source)
- Base: `@picocss/pico` + custom dark theme tokens.  
- Grid helpers: `every-layout` for integration matrix (cluster pattern).  
- Icons: `@tabler/icons` or `lucide-react`.  
- Animation: `Lenis` or `GSAP` optional for timeline; fallback to `scroll-behavior: smooth`.  
- Video: host MP4/H.264 snippet; set poster images for fallback.

## Interaction & Motion
- Sticky subnav appears after hero; highlight active section via `IntersectionObserver`.  
- Timeline steps animate with staggered `translateY` as they enter viewport.  
- KPI cards count up using CSS-driven progress bar (for reduced motion, swap to static numbers).  
- Integration filters cross-fade grid items with `opacity` transitions.

## Customization Checklist
- [ ] Swap timeline labels with your pipeline steps.  
- [ ] Replace videos with actual feature demos; ensure file size < 2.5 MB for performance.  
- [ ] Update compliance badges and link to PDFs.  
- [ ] Localize stats and quotes; include photo alt text.  
- [ ] Connect form to marketing automation (HubSpot, Mailchimp API, etc.).

## Section Snippet
```html
<section id="workflow" class="container workflow">
  <header>
    <h2>Orchestrate every approval from intake to deployment.</h2>
    <p>Orion routes unstructured requests, applies policy, and ships decisions automatically.</p>
  </header>
  <div class="workflow-stack">
    <article class="workflow-card">
      <h3>1 · Intake</h3>
      <video autoplay muted loop playsinline>
        <source src="/media/orion-intake.mp4" type="video/mp4">
      </video>
      <p>Parse tickets, email threads, and docs in seconds.</p>
    </article>
    <!-- Repeat for Review & Deployment -->
  </div>
</section>
```
