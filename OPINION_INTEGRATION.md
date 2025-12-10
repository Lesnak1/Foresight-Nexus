# Opinion Labs API Integration Plan - Foresight Nexus

**Project**: Foresight Nexus  
**Purpose**: Opinion Builders Program Grant Application  
**Date**: December 10, 2025  
**Status**: MVP Complete → Phase 2: Backend Integration

---

## Executive Summary

Foresight Nexus is a social prediction market platform built for the Opinion Labs ecosystem. This document outlines our technical integration plan to leverage Opinion's CLOB infrastructure, Open API, and SDK to create a production-ready application.

###Requirements Met for Builders Program

✅ **Router**: Routes prediction market trades to Opinion's CLOB  
✅ **Researcher**: Provides analytics dashboard and AI-powered insights
✅ **Developer**: Building unique social layer on top of Opinion infrastructure

---

## Opinion Labs Integration Architecture

### 1. Opinion Open API Integration

**Base URL**: `https://api.opinion.trade` (to be confirmed)  
**Authentication**: API Key (Bearer token)

#### Required Endpoints

```typescript
// Market Data
GET /api/v1/markets - List all active markets
GET /api/v1/markets/{marketId} - Get market details
GET /api/v1/markets/{marketId}/orderbook - Get live orderbook

// Token Data
GET /api/v1/tokens - List tradeable position tokens
GET /api/v1/tokens/{tokenId} - Get token details

// User Positions
GET /api/v1/positions - User's current positions
GET /api/v1/trades - User's trade history

// Real-time Updates
WS wss://api.opinion.trade/ws - WebSocket for live data
```

#### Implementation Files

- `lib/api/opinion.ts` - API client wrapper
- `lib/hooks/useMarkets.ts` - React Query hooks for market data
- `lib/hooks/usePositions.ts` - User position management
- `lib/websocket/opinion-ws.ts` - WebSocket connection handler

### 2. Opinion CLOB SDK Integration

**Package**: `@opinion-labs/clob-sdk` (NPM)

#### Core Features to Implement

```typescript
import { OpinionCLOB } from '@opinion-labs/clob-sdk';

// Initialize SDK
const clob = new OpinionCLOB({
  apiKey: process.env.OPINION_API_KEY,
  network: 'bsc-mainnet', // or 'bsc-testnet'
});

// Trade Management
await clob.placeOrder({
  marketId: 'market-123',
  side: 'YES',
  amount: '100',
  price: '0.68',
});

// Position Management
const positions = await clob.getUserPositions(userAddress);

// Gasless Transactions (Key Feature!)
await clob.createMarketGasless({
  title: 'BTC hits $100K',
  deadline: '2025-12-31',
  oracle: 'community',
});
```

#### Implementation Files

- `lib/clob/client.ts` - CLOB SDK wrapper
- `lib/clob/orders.ts` - Order placement and management
- `lib/clob/markets.ts` - Market creation and resolution
- `lib/clob/gasless.ts` - Gasless transaction handlers

---

## Phase 2 Development Plan (4-6 Weeks)

### Week 1-2: API Integration

**Tasks**:
- [ ] Create Opinion Open API client
- [ ] Implement market data fetching
- [ ] Set up WebSocket real-time updates
- [ ] Replace mock data in Explore page
- [ ] Implement rate limiting and caching

**Deliverables**:
- Real market data on Explore page
- Live order book display
- Real-time odds updates

### Week 3-4: CLOB SDK Integration

**Tasks**:
- [ ] Install and configure CLOB SDK
- [ ] Implement trade execution
- [ ] Build position management
- [ ] Integrate gasless market creation
- [ ] Add user onboarding flow

**Deliverables**:
- Functional trading on Dashboard
- Working Create Nexus form with real transactions
- User positions sync

### Week 5: Smart Contracts (Optional - Nexus Node NFTs)

**Tasks**:
- [ ] Deploy ERC-721 contract for Nexus Nodes
- [ ] Implement metadata on IPFS
- [ ] Add NFT minting on market creation
- [ ] Build NFT transfer mechanics

**Deliverables**:
- Nexus Nodes as actual NFTs
- On-chain proof of creation

### Week 6: Testing & Optimization

**Tasks**:
- [ ] End-to-end testing on BNB testnet
- [ ] Security audit
- [ ] Performance optimization
- [ ] Bug fixes and polish

**Deliverables**:
- Production-ready application
- Complete documentation

---

## Technical Infrastructure Updates

### Environment Variables

```bash
# .env.local
# WalletConnect
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id

# Opinion Labs API
NEXT_PUBLIC_OPINION_API_URL=https://api.opinion.trade
OPINION_API_KEY=your_api_key  # Server-side only

# Opinion CLOB
NEXT_PUBLIC_CLOB_NETWORK=bsc-mainnet
NEXT_PUBLIC_CLOB_CONTRACT=0x...  # CLOB contract address

# BNB Chain
NEXT_PUBLIC_BNB_CHAIN_ID=56
NEXT_PUBLIC_BNB_RPC_URL=https://bsc-dataseed.binance.org

# Optional: Twitter Integration
TWITTER_BEARER_TOKEN=your_token
```

### Dependencies to Add

```json
{
  "dependencies": {
    "@opinion-labs/clob-sdk": "^1.0.0",
    "@tanstack/react-query": "^5.62.3",  // Already added
    "axios": "^1.7.0",  // For API calls
    "ws": "^8.18.0",  // WebSocket client
    "ipfs-http-client": "^latest"  // For NFT metadata
  }
}
```

### API Route Structure

```
app/api/
├── opinion/
│   ├── markets/route.ts       # Proxy to Opinion API
│   ├── trade/route.ts         # Execute trades server-side
│   └── positions/route.ts     # Fetch user positions
├── nexus/
│   ├── create/route.ts        # Create Nexus Node + Market
│   └── resolve/route.ts       # Market resolution handler
└── webhook/
    └── opinion/route.ts       # Opinion Labs webhook handler
```

---

## Builders Program Application Strategy

### Grant Positioning

**Category**: Router + Researcher  
**Unique Value**:
1. **Social Layer**: First prediction market with viral, tokenized predictions (Nexus Nodes)
2. **DAO Resolution**: Community-governed oracle layer on top of Opinion
3. **AI Simulator**: Educational tool driving user engagement and informed trading
4. **Gamification**: Leaderboards, badges, referrals → retention and volume

### Impact Metrics (6-9 Months)

| Metric | Target | Impact on Opinion |
|--------|--------|-------------------|
| Monthly Active Users | 10,000+ | New user acquisition |
| Trading Volume Routed | $5M+ | Direct CLOB usage |
| Markets Created | 1,000+ | Market diversity |
| User Retention | 80%+ | Sticky gamification |
| Referral Growth | 5,000+ | Viral user expansion |

### Technical Differentiation

Unlike other Opinion integrations, Foresight Nexus provides:
- **NFT-like Prediction Assets**: Each market = collectible Nexus Node
- **Social Sharing**: Predictions go viral, driving organic growth
- **Community Oracle**: DAO resolution layer for ambiguous outcomes
- **AI Recommendations**: Lowers barrier to entry for new traders

---

## Compliance & Best Practices

### Opinion API Guidelines

- ✅ Implement proper rate limiting (respect API limits)
- ✅ Cache market data (reduce redundant calls)
- ✅ Use WebSocket for real-time updates (not polling)
- ✅ Handle errors gracefully (display user-friendly messages)
- ✅ Attribution: Display "Powered by Opinion Labs"

### Security

- ✅ API keys server-side only (never expose in client)
- ✅ Smart contract audits before mainnet
- ✅ Input validation on all user inputs
- ✅ Rate limiting on API routes
- ✅ HTTPS only in production

---

## Next Steps for Grant Application

1. **Apply Now**: https://forms.gle/9oBLs9wns6sJVm87A
   - Project Name: Foresight Nexus
   - Category: Router + Researcher
   - Use Case: Social prediction market with DAO governance
   - Current Status: MVP complete, seeking API access for Phase 2

2. **Prepare Demo**:
   - Deploy MVP to Vercel
   - Create demo video showing UI/UX
   - Prepare walkthrough documentation

3. **Join Community**:
   - Discord: https://discord.com/channels/1254615232496533545/1447424765739405493
   - Follow: @opinionlabsxyz
   - Engage with other builders

4. **Request Resources**:
   - API key with elevated limits
   - Technical support access
   - Early access to new features

---

## Success Criteria

### Phase 2 Completion

- [ ] All Explore markets pulling real Opinion data
- [ ] Functional trading via CLOB SDK
- [ ] User positions syncing correctly
- [ ] Gasless market creation working
- [ ] WebSocket updates live

### Grant Approval

- [ ] Approved for Builders Program
- [ ] API access granted
- [ ] Discord support channel access
- [ ] Marketing collaboration initiated

### Production Launch

- [ ] Deployed on BNB mainnet
- [ ] 100+ real markets created
- [ ] 1,000+ active users in first month
- [ ] $100K+ trading volume routed

---

## Contact & Resources

**Foresight Nexus**:
- Email: dev@foresightnexus.io
- GitHub: (to be created)
- Demo: https://foresight-nexus.vercel.app (to be deployed)

**Opinion Labs**:
- Docs: https://docs.opinion.trade
- API: https://api.opinion.trade
- Discord: https://discord.gg/opinionlabs
- Twitter: @opinionlabsxyz

---

*This integration plan will be updated as we progress through Phase 2 and receive guidance from the Opinion Labs engineering team.*
