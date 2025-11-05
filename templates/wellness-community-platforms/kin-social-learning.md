# Kin Social Learning Hub

Community-first learning environment blending wellness, professional development, and peer accountability—aligned with 2025 cohort-based platform trends.

## Inspiration Highlights
- Multi-track curriculum with progress indicators and cohort events.
- Live session lobby with countdowns, speaker bios, and resources.
- Peer circles for micro-communities with goal tracking.

## Experience Flow
1. **Cohort Dashboard** – Displays upcoming sessions, current module, and streak.  
2. **Module Explorer** – Grid of lessons with status badges (Locked, In Progress, Completed). Each card shows duration, format (video, workshop), and prerequisites.  
3. **Session Lobby** – Live countdown, call link, agenda checklist, resource downloads, group chat.  
4. **Peer Circles** – Mini dashboards for accountability groups; includes shared goals and check-ins.  
5. **Reflection Journal** – Rich text editor with prompts; ability to post to community or keep private.  
6. **Resource Vault** – Searchable repository (slides, templates, exercises) with filters.  
7. **Achievements** – Badge shelf recognizing milestones, automatically shareable to social.

## Visual Language
- **Color**: Warm neutral base `#F6F1EB`, accent coral `#FF7A59`, teal `#20B2AA`, charcoal `#2E2A32`.  
- **Typography**: `Clash Grotesk` for headings, `Source Sans 3` for body.  
- **Iconography**: Rounded icons from `Phosphor` or `Lucide` with fill states for completion.  
- **Illustration**: Collaged photography with hand-drawn overlays to evoke community.

## Component Stack (Open Source)
- Framework: `Next.js` or `Remix` with `@picocss/pico`/`Tailwind`.  
- Calendar: `FullCalendar` for session scheduling.  
- Rich text: `TipTap` or `Quill` for journal editor.  
- Real-time chat: `Supabase` Realtime or `Ably`; include placeholder UI.  
- Icons: `Phosphor Icons` to emphasize friendly tone.

## Interaction & Motion
- Module cards flip on hover to reveal key takeaways.  
- Session countdown uses animated radial progress.  
- Peer circle check-ins animate with confetti when goals are completed (prefers-reduced-motion fallback).  
- Drag-and-drop reorder for learning tracks or priorities.

## Customization Checklist
- [ ] Load session schedule from CMS/learning backend.  
- [ ] Configure access control per cohort.  
- [ ] Provide transcript downloads and accessibility accommodations.  
- [ ] Enable push notifications for session reminders.  
- [ ] Customize badges and share text per program.

## Example Component
```html
<section class="session-lobby container">
  <header>
    <h2>Week 3 · Designing Sustainable Habits</h2>
    <div class="countdown" data-time="2025-05-12T17:00:00Z">00:34:12</div>
  </header>
  <aside class="speakers">
    <img src="/people/avani.png" alt="Coach Avani">
    <h3>Avani Iyer · Behavior Scientist</h3>
  </aside>
  <ul class="agenda">
    <li><input type="checkbox"> Check-in pulse</li>
    <li><input type="checkbox"> Habit stacking workshop</li>
    <li><input type="checkbox"> Peer accountability breakout</li>
  </ul>
</section>
```
