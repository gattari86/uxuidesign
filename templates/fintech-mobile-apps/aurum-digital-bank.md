# Aurum Digital Bank

Mobile-first banking experience emphasizing trust, clarity, and personalized insights—drawing from 2025 best-of fintech app showcases.

## Inspiration Highlights
- Gradient metal-inspired cards with embossed effects.
- Personal finance coach surfacing actionable tips.
- Modular dashboard that adapts per customer goals.

## App Structure
1. **Home Dashboard** – Overview card with balance, income/outflow graph, and smart alerts. Quick actions row (Transfer, Pay Bill, Card Freeze).  
2. **Spending Insights** – Scrollable categories with progress bars and monthly caps; includes AI-generated recommendation card.  
3. **Goals & Vaults** – Horizontal carousel of savings goals showing progress rings; tap to open detail sheet with contribution history.  
4. **Rewards Hub** – Tiered benefits display and partner offers with dynamic filtering.  
5. **Support Center** – Bottom drawer with chat, FAQs, and secure message center.  
6. **Profile & Security** – Biometric toggles, device management, statements export.

## Visual Language
- **Color**: Deep navy `#0A1023`, aurum gradient `#F5D06F → #D7A83D`, accent teal `#2BB4A2`.  
- **Typography**: `SF Pro` or `Inter` for minimal UI, `Space Grotesk` for numerals.  
- **Iconography**: Rounded stroke icons (Tabler or Lucide with `stroke-linecap: round`).

## Component Stack (Open Source)
- Mobile framework: `React Native` + `expo` or `Flutter`.  
- Charts: `react-native-svg-charts` or `Victory Native` for spending graphs.  
- Icons: `lucide-react-native`.  
- Animations: `react-native-reanimated` for card transitions.  
- Backend integration: tie into banking APIs; placeholder data arrays provided.

## Interaction & Motion
- Dashboard cards stack with depth; tapping expands to full-screen detail using shared element transitions.  
- AI coach card slides in from bottom when new insight is available.  
- Quick action buttons use long-press for secondary actions (schedule transfer).  
- Provide `prefers-reduced-motion` alternative (reduce transitions).

## Customization Checklist
- [ ] Connect to real account data (ensure masking in demos).  
- [ ] Localize currency, date formats, and compliance copy.  
- [ ] Add dark/light toggle with persisted preference.  
- [ ] Implement biometric prompts via platform APIs (FaceID, TouchID).  
- [ ] Update rewards partners and ensure deep links to offers.

## Sample Component (React Native)
```jsx
<Card style={styles.balanceCard}>
  <Text style={styles.label}>Available balance</Text>
  <Text style={styles.amount}>$24,680.32</Text>
  <VictoryLine
    data={trendData}
    interpolation="natural"
    style={{ data: { stroke: '#2BB4A2', strokeWidth: 3 } }}
  />
  <View style={styles.actions}>
    <PrimaryButton icon="arrow-right" label="Transfer" />
    <GhostButton icon="credit-card" label="Cards" />
  </View>
</Card>
```
