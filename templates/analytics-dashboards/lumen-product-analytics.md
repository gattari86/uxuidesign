# Lumen Product Analytics

Product analytics surface designed for growth and UX teams. Inspired by 2025 trend of humanized data storytelling with embedded context and experimentation workflows.

## Signature Traits
- Mixed media insights: charts alongside narrative cards and user session reels.
- Experiment hub with status tracking and impact projections.
- Light mode with ample whitespace and editorial typography.

## Layout Blueprint
1. **Overview Strip** – Hero header with product health summary, key KPIs, and filters for segment/device.  
2. **Journey Map** – Horizontal stepper showing Awareness → Activation → Retention, each with metric badges and “view cohort” links.  
3. **Insight Stories** – Two-column layout combining chart panel (line/area) with narrative card summarizing findings (“Activation dipped 6% after pricing change”).  
4. **Experiment Hub** – Table with experiments, hypothesis, owner, status, uplift, next review date. Include progress pill and success badges.  
5. **User Playback** – Carousel of short user session videos or heatmaps with notes.  
6. **Team Notes** – Comment thread and to-do list integrated on right column.  
7. **Changelog & Next Steps** – Timeline of releases, upcoming research, and CTA to schedule review.

## Visual Language
- **Color**: Soft base `#F7F8FB`, card surface `#FFFFFF`, accent indigo `#5145FF`, coral `#FF6B6B`, teal `#1DD1A1`.  
- **Typography**: `Degular` or `Manrope` for headings, `Inter` for body. Use 24px/18px text ratios with 1.6 line height.  
- **Illustration**: Minimal line art for empty states; incorporate gradient blobs `#5145FF` → `#8A56FF` behind hero metrics.

## Component Stack (Open Source)
- Styling: `simple.css` (content-first) plus custom utility classes.  
- Charts: `Recharts` (React) or `Chart.js` with pastel palette.  
- Video: `mux-player` or native HTML video for session replays.  
- Icons: `Iconoir` set for softer aesthetic.  
- Collaboration: integrate comments via product backend; placeholder markup provided.

## Interaction & Motion
- Metrics animate from baseline to value on first load.  
- Experiment status pill transitions color on hover with tooltip explaining details.  
- Journey stepper uses slide animation to reveal deep-dive modal.  
- Playback carousel auto-advances; pause on hover.  
- Provide “Snapshot” export (PDF) linking to backend.

## Customization Checklist
- [ ] Connect data queries for KPIs and experiments.  
- [ ] Configure segments, filters, and retention cohorts.  
- [ ] Upload real user session clips (mask sensitive info).  
- [ ] Tailor narrative copy via AI summary generation pipeline.  
- [ ] Add locale-aware number/time formatting.

## Example Markup Fragment
```html
<section class="insight-story">
  <div class="chart-panel">
    <canvas id="activationTrend"></canvas>
  </div>
  <article class="narrative">
    <header>
      <h3>Activation dipped after pricing update</h3>
      <span class="badge warning">Attention</span>
    </header>
    <p>Week-over-week new team activations dropped by 6.2% correlating with the paywall introduced on Sept 12.</p>
    <ul>
      <li>Impact: -310 activations</li>
      <li>Segment: SMB (2–10 seats)</li>
      <li>Recommendation: Re-run onboarding experiment A38</li>
    </ul>
  </article>
</section>
```
