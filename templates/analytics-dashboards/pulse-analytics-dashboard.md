# Pulse Analytics Dashboard

Modular SaaS dashboard patterned after best-in-class 2025 data platforms with emphasis on real-time status, AI summaries, and customizable widgets.

## Inspiration Highlights
- Card-based layout with flexible drag-and-drop grid.
- AI insight panel summarizing anomalies in natural language.
- Contrast-forward dark UI with accessible accent colors.

## Layout Blueprint
1. **Global Shell** – Top nav (logo, search, notifications, profile) + collapsible left sidebar with icons & labels.  
2. **Headline Metrics Row** – Four compact KPI cards showing primary metrics (ARR, Active Users, NPS, Tickets). Each card includes sparkline chart and delta badge.  
3. **AI Insights Panel** – Right column (sticky) featuring generated insights, trend detection, and recommended actions.  
4. **Main Workspace** – 12-column grid of widgets: revenue line chart, retention cohort heatmap, funnel, table of top accounts.  
5. **Collaboration Drawer** – Bottom sheet toggled via “Share” button showing comments/mentions.  
6. **Notifications Toasts** – Slide-in alerts for threshold breaches.  
7. **Settings Modal** – Manage data sources, refresh cadence, and theme.

## Visual Language
- **Color**: Dark elevation `#05070E`, card surfaces `#0A1020`. Accent palette: cyan `#2FDCDC`, violet `#7B6CFF`, amber `#F7A84A`.  
- **Typography**: `Inter` (12–32px) with monospaced `Space Mono` for code/data labels.  
- **Charts**: Use accent colors with 60% opacity fills; axis lines `rgba(255,255,255,0.08)`.

## Component Stack (Open Source)
- Base: `@picocss/pico` stripped down + custom CSS grid.  
- Icons: `@tabler/icons` for navigation and insights.  
- Charts: `Apache ECharts` or `Chart.js` (flexible theming).  
- Interactions: `sortablejs` for drag-and-drop widgets.  
- AI panel: integrate with product’s LLM output; design includes placeholder text for fallback.

## Interaction & Motion
- Widgets animate in with `transform: translateY(24px)` + fade.  
- Dragging uses drop shadow highlight; autosave toast appears using `Animate.css` `fadeInDown`.  
- Insight panel highlights newly generated insight with glowing border for 4 seconds.  
- Provide skeleton loaders for charts (shimmer effect) during data fetch.

## Customization Checklist
- [ ] Map data bindings to live metrics (GraphQL/REST).  
- [ ] Localize number formats (Intl API).  
- [ ] Define user roles to control widget visibility.  
- [ ] Ensure color contrast on dark mode meets accessibility.  
- [ ] Add export options (CSV, PNG) on each widget.

## Responsive Guidance
- Tablet: collapse side nav to icon bar; stack widgets in 2 columns.  
- Mobile: convert widgets to accordion list with summary numbers first.  
- Provide “Compact mode” toggle reducing padding (8px grid) for dense screens.
