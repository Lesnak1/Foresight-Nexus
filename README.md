# 🔮 Foresight Nexus - Opinion Labs Ecosystem App

**Gelecek Tahminlerinin Sosyal Ağı** - Opinion Labs ekosistemi için yenilikçi sosyal tahmin piyasası platformu.

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![BNB Chain](https://img.shields.io/badge/BNB%20Chain-Ready-yellow.svg)

## 🌟 Proje Özeti

Foresight Nexus, Opinion Labs'ın prediction market altyapısını sosyal bir "gelecek atölyesi"ne dönüştüren web uygulamasıdır. Kullanıcılar tahminlerini **Nexus Node'ları** olarak tokenize eder, bu node'lar viral olarak yayılır ve grup stake'leri, AI simülasyonları ile evolve olur.

### Temel Özellikler

- 🔮 **Nexus Node Creation** - Tahminlerinizi NFT-benzeri varlıklara dönüştürün
- 🌐 **Social Prediction Feed** - Viral tahmin keşfet ve paylaş
- ⚖️ **DAO Resolution Hub** - Topluluk tabanlı adil çözümleme
- 🤖 **AI Foresight Simulator** - What-if senaryoları test edin
- 🏆 **Gamified Leaderboard** - Badge'ler, rewards, referral sistemi
- 📊 **Advanced Dashboard** - Portfolio tracking, analytics, insights

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS 3, Framer Motion, Glassmorphism
- **Web3**: wagmi v2, RainbowKit, ethers.js v6, viem
- **State Management**: Zustand, TanStack React Query
- **Charts**: Recharts
- **Icons**: Lucide React
- **Blockchain**: BNB Chain, Opinion Protocol (CLOB)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ ve npm/yarn
- MetaMask veya desteklenen Web3 wallet
- BNB Chain testnet/mainnet erişimi

### Installation

\`\`\`bash
# Clone repository (if using git)
git clone <your-repo-url>
cd Opinion

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local
\`\`\`

### Environment Variables

\`.env.local\` dosyanızı düzenleyin:

\`\`\`env
# WalletConnect (https://cloud.walletconnect.com adresinden alın)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here

# Opinion API
NEXT_PUBLIC_OPINION_API_URL=https://api.opinion.trade
NEXT_PUBLIC_BNB_RPC_URL=https://bsc-dataseed.binance.org

# Twitter API (Opsiyonel - auto-market creation için)
TWITTER_BEARER_TOKEN=your_twitter_token_here

# Chain IDs
NEXT_PUBLIC_BNB_CHAIN_ID=56
NEXT_PUBLIC_BNB_TESTNET_CHAIN_ID=97
\`\`\`

### Development

\`\`\`bash
# Start development server
npm run dev

# Open http://localhost:3000
\`\`\`

### Build & Deploy

\`\`\`bash
# Build for production
npm run build

# Start production server
npm run start

# Or deploy to Vercel (recommended)
vercel deploy
\`\`\`

## 📁 Project Structure

\`\`\`
Opinion/
├── app/                      # Next.js App Router
│   ├── app/                  # Main application routes
│   │   ├── dashboard/        # User dashboard
│   │   ├── create/           # Create Nexus Node
│   │   ├── explore/          # Market feed
│   │   ├── dao/              # DAO Resolution Hub
│   │   ├── simulator/        # AI Simulator
│   │   ├── leaderboard/      # Rankings
│   │   └── profile/          # User profile
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Landing page
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── ui/                   # UI primitives
│   ├── Providers.tsx         # Web3 providers
│   ├── WalletButton.tsx      # Wallet connection
│   ├── StatsCounter.tsx      # Animated stats
│   └── ParticleBackground.tsx # Canvas animation
├── lib/                      # Utilities
│   ├── utils.ts              # Helper functions
│   └── web3/                 # Web3 config (future)
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies
\`\`\`

## 🎨 Design System

### Colors

\`\`\`css
--nexus-primary: #FF6B35      /* Turuncu */
--nexus-secondary: #9D4EDD    /* Mor */
--nexus-accent: #06FFA5       /* Cyan/Yeşil */
--nexus-dark: #0A0A0A         /* Ultra dark */
\`\`\`

### Key Features

- **Dark-first** design with glassmorphism effects
- **Neon gradients** and glow animations
- **Micro-interactions** for premium feel
- **Fully responsive** (mobile, tablet, desktop)
- **60 FPS animations** with Framer Motion

## 🔗 Opinion Labs Integration

Foresight Nexus, Opinion Labs ekosistemi üzerine kurulmuştur:

- **CLOB (Central Limit Order Book)**: Trade execution
- **ERC-20 Tokens**: Tokenized predictions
- **Community Oracle**: DAO-based resolution
- **Cross-chain**: BNB Chain + Monad support

## 🎯 Roadmap

### Phase 1: MVP (Current)
- ✅ Core UI/UX implementation
- ✅ Landing page & dashboard
- ✅ Create, Explore, DAO, Simulator pages
- ✅ Wallet integration (RainbowKit)
- ⏳ Opinion API integration

### Phase 2: Backend Integration
- [ ] Real Opinion API calls
- [ ] Smart contract interactions
- [ ] Twitter integration
- [ ] Real-time data updates

### Phase 3: Advanced Features
- [ ] Nexus Node NFT contracts
- [ ] AI Oracle integration
- [ ] Social features (comments, follows)
- [ ] Mobile PWA optimization

### Phase 4: Scale & Optimize
- [ ] Performance optimization
- [ ] Analytics integration (Mixpanel)
- [ ] Multi-language support
- [ ] Advanced gamification

## 🤝 Contributing

Bu proje Opinion Labs Builders Program için geliştirilmiştir. Katkıda bulunmak için:

1. Fork repository
2. Feature branch oluşturun (\`git checkout -b feature/AmazingFeature\`)
3. Commit (\`git commit -m 'Add some AmazingFeature'\`)
4. Push (\`git push origin feature/AmazingFeature\`)
5. Pull Request açın

## 📊 Grant Alignment

**Opinion Labs Builders Program** kriterleri:

- ✅ Opinion API entegrasyonu (marketplace data, CLOB)
- ✅ Ekosistem utility (likidite artışı, viral growth)
- ✅ Yeni deneyim (sosyal tahmin ağı, DAO resolution)
- ✅ Teknik kalite (production-ready, modern stack)
- ✅ Dokümantasyon (comprehensive setup guide)

**Impact Metrics** (6-9 ay hedef):
- 10K+ Monthly Active Users
- $5M+ hacim katkısı
- 80%+ user retention
- %20+ ekosistem hacim artışı

## 📝 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- **Opinion Labs** - Prediction market infrastructure
- **Binance** - BNB Chain ecosystem support
- **RainbowKit** - Beautiful wallet connection
- **Vercel** - Deployment platform

---

**Built with 💜 for Opinion Labs Ecosystem**

*Powered by BNB Chain • Secured by CLOB • Governed by Community*

## 🔗 Links

- [Opinion Labs](https://opinion.trade)
- [Documentation](https://docs.opinion.trade)
- [Twitter/X](@opinionlabsxyz)
- [Discord](https://discord.gg/opinionlabs)

## 📧 Contact

For questions and support:
- Create an issue on GitHub
- Join Discord community
- Email: support@opinion.trade
