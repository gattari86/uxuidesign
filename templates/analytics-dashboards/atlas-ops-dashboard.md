# Atlas Ops Dashboard

Operations control center designed for logistics, manufacturing, or field service teams. Inspired by multi-source monitoring UIs highlighted in 2025 enterprise design awards.

## Key Characteristics
- Adaptive split-screen layout: map visualization + operational feed.
- Color-coded status channels surfaced through filters.
- Scenario planning drawer with what-if projections.

## Layout Blueprint
1. **Header Bar** – Breadcrumb navigation, time range selector, live status badge (“Operational”, “Degraded”).  
2. **Map & Timeline** – Left 2/3 width for Mapbox/Leaflet map overlayed with status pins; bottom timeline scrubber for playback.  
3. **Operations Feed** – Right column with tabbed interface: Alerts, Tasks, Messages. Each entry includes priority, region, timestamp.  
4. **Capacity Overview** – Collapsible panel showing bar charts (site capacity vs. utilization).  
5. **Scenario Planning Drawer** – Slide-in from left triggered by “Run scenario” button; includes form (variables) + chart output.  
6. **Team Presence** – Avatar group with presence indicators and quick call-to-action buttons.  
7. **Footer Metrics** – Real-time counters (Active incidents, Transit delays, SLA breaches).

## Visual Language
- **Color**: Slate base `#061018`, card surfaces `#0E1C2C`, critical red `#FF5A5F`, warning amber `#F2C94C`, success green `#2ED573`.  
- **Typography**: `IBM Plex Sans` for UI, `IBM Plex Mono` for data readouts.  
- **Iconography**: Lucide or Tabler icons with 1.6px stroke.  
- **Map Styling**: Dark theme tiles; highlight active route with cyan `#2EC4FF`.

## Component Stack (Open Source)
- Mapping: `Mapbox GL JS` (with custom style) or open-source `MapLibre`.  
- Charts: `Apache ECharts` stacked bars, timeline.  
- Base styles: `@picocss/pico` + CSS variables.  
- Icons: `lucide-react` for uniform stroke icons.  
- Animations: `GSAP` optional for drawer transitions; fallback to CSS `transition`.

## Interaction & Motion
- Map pins pulse subtly (`scale` animation) when status changes.  
- Timeline scrubber updates map state in sync; provide real-time tooltips.  
- Scenario drawer slides over 320px width; results animate into chart area.  
- Alerts feed uses color-coded left borders; clicking alert pans map to location.  
- Keyboard shortcuts: `Shift+F` focuses filter, `Shift+/` opens help modal.

## Customization Checklist
- [ ] Connect to live telemetry (websocket) or mock API.  
- [ ] Define alert severity thresholds and color mapping.  
- [ ] Configure map layers (satellite, heatmap, cluster).  
- [ ] Translate UI for field teams (support 24h/12h time formatting).  
- [ ] Ensure offline/low-bandwidth fallback (cached tiles, queue actions).

## Sample Component Markup
```html
<section class="ops-feed">
  <header class="tabs">
    <button class="tab active">Alerts</button>
    <button class="tab">Tasks</button>
    <button class="tab">Messages</button>
  </header>
  <article class="alert critical">
    <header>
      <span class="badge critical">Critical</span>
      <time>08:42 UTC</time>
    </header>
    <p>Linehaul 47 delayed due to weather. ETA +2h.</p>
    <footer>
      <button class="btn ghost">View route</button>
      <button class="btn outline">Assign action</button>
    </footer>
  </article>
</section>
```
