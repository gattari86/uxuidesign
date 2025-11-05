# Harbor Crypto Wallet

Secure multi-chain wallet experience built for mainstream adoption, referencing 2025 crypto UX trends that emphasize clarity, compliance, and education.

## Inspiration Highlights
- Transparent security cues (hardware integration, MPC status).
- Educational layers explaining crypto concepts inline.
- Real-time market widgets with AI alerts.

## App Structure
1. **Portfolio Home** – Card showing total holdings in fiat, percent change, and allocation breakdown. Quick action buttons: Buy, Sell, Swap, Stake.  
2. **Asset Detail** – Price chart (1h, 24h, 7d, 30d), AI summary (“ETH is trending upward due to…”), transaction history, staking/APR info.  
3. **Security Center** – Checklist for enabling passkeys, hardware wallet link, recovery phrase backup status.  
4. **Learning Hub** – Micro-lessons tied to assets (e.g., “What is staking?”). Track completion for rewards.  
5. **Market Radar** – Watchlist, trending tokens, gas tracker, macro news ticker.  
6. **Activity Feed** – Combined log of transfers, swaps, and notifications with filters.

## Visual Language
- **Color**: Dark nebula `#050B16`, accent violet `#7A5BFF`, neon cyan `#2DE2E6`, success green `#38E58A`.  
- **Typography**: `Sora` for headings, `IBM Plex Sans` for body, `IBM Plex Mono` for addresses.  
- **Iconography**: Outline icons with rounded ends; use chain logos inside circular badges.

## Component Stack (Open Source)
- Framework: `React Native`, `Flutter`, or `Capacitor` for hybrid builds.  
- Charts: `Victory Native` or `Highcharts` (with mobile license).  
- Animations: `react-native-reanimated` for transitions.  
- Security cues: integrate with `walletconnect` for hardware/defi interactions.  
- Icons: Chain icons from open-source `cryptocurrency-icons`.

## Interaction & Motion
- Use radial gradient backgrounds behind asset cards.  
- Market radar auto-scrolls horizontally; pause on tap.  
- Security checklist uses progress ring that fills as steps complete.  
- Provide copy/QR actions with micro-interactions (scale bounce).  
- For reduced motion, disable parallax and rely on color emphasis.

## Customization Checklist
- [ ] Integrate price feeds (CoinGecko API) and WebSocket updates.  
- [ ] Localize fiat currency display and legal disclaimers.  
- [ ] Add compliance modules (KYC, sanction checks).  
- [ ] Implement push notifications for price alerts and security events.  
- [ ] Validate accessibility: high contrast, screen reader labels for icons.

## Sample JSX Fragment
```jsx
<Card style={styles.assetCard}>
  <header>
    <TokenBadge symbol="ETH" name="Ethereum" />
    <Text style={styles.price}>$3,482.12</Text>
  </header>
  <PriceChart data={ethData} timeframe={timeframe} />
  <AIInsight
    mood="positive"
    message="Smart money inflows increased 12% over the last 4 hours."
  />
  <View style={styles.actions}>
    <PrimaryButton icon="swap" label="Swap" />
    <GhostButton icon="trending-up" label="Stake" />
  </View>
</Card>
```
