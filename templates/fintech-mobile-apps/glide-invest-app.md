# Glide Invest App

Investment companion focusing on goal-based planning, micro-investing, and AI-guided portfolio adjustments—aligned with 2025 wealthtech experience trends.

## Inspiration Highlights
- Card stack interface with swipeable insights.
- Scenario simulator comparing projected returns across strategies.
- Community sentiment overlays blending quantitative and qualitative signals.

## App Structure
1. **Portfolio Overview** – Hero card with total value, daily change, allocation donut, and risk indicator.  
2. **Goal Tracker** – Tabs for Retirement, Education, Major Purchase. Each goal uses progress bar and projected completion date.  
3. **Strategy Insights** – Swipeable cards showing recommendations (e.g., “Adjust equity exposure by +5%”), supporting rationale, and quick actions.  
4. **Scenario Simulator** – Interactive chart where users adjust contributions/market outlook and see new projections.  
5. **Community Pulse** – Combined feed of analyst notes, crowdsourced sentiment, and trending assets.  
6. **Transactions & Documents** – Filterable list with export, statement downloads, and tax documents.

## Visual Language
- **Color**: Midnight `#0D1524`, gradient accent `#3A7CFF → #26D0CE`, positive green `#2ECC71`, caution amber `#F5A623`.  
- **Typography**: `Satoshi` or `Manrope` for headings, `Inter` for body.  
- **Iconography**: Thin-stroke icons from `Phosphor` or `Lucide`, with filled variants for active states.

## Component Stack (Open Source)
- Framework: `React Native` / `Expo` or `Flutter`.  
- Charts: `Victory Native` area charts, `react-native-svg` for custom shapes.  
- Swipe gestures: `react-native-gesture-handler` + `react-native-snap-carousel`.  
- State management: `zustand` or `Redux Toolkit` for portfolio data.  
- AI copy: integrate with on-device suggestions; placeholder JSON provided.

## Interaction & Motion
- Portfolio card uses parallax tilt effect as user scrolls.  
- Scenario slider updates projections in real time with smoothing animation.  
- Community pulse feed loads inline tags; tapping asset opens bottom sheet with quick trade actions.  
- Provide haptic feedback on major actions (e.g., completing investment).

## Customization Checklist
- [ ] Hook into brokerage APIs for live holdings.  
- [ ] Implement compliance disclosures tailored to region.  
- [ ] Provide risk questionnaire onboarding flow.  
- [ ] Localize currency, tax terminology, and disclaimers.  
- [ ] Ensure offline caching for recent data.

## Example (Scenario Simulator UI)
```jsx
<View style={styles.simulator}>
  <Text style={styles.heading}>Simulate your trajectory</Text>
  <ContributionSlider value={contribution} onChange={setContribution} />
  <MarketSelector value={marketScenario} onChange={setMarketScenario} />
  <ProjectionChart data={projectionData} accent="#26D0CE" />
  <SummaryCard
    title="Projected balance at 5 years"
    amount="$68,420"
    delta="+$7,320 vs. current plan"
  />
</View>
```
