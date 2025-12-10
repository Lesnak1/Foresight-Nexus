'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Rocket, CheckCircle } from 'lucide-react';

export default function FeaturesPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-nexus-gradient flex items-center justify-center">
                            <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black">
                            <span className="gradient-text">Features</span>
                        </h1>
                    </div>
                    <p className="text-xl text-gray-400 mb-12 max-w-3xl">
                        Everything you need to predict, trade, and earn in the decentralized future.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {allFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card hover className="p-6 h-full">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-nexus-accent flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                            <p className="text-gray-400">{feature.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <Card className="p-12 mt-16 text-center bg-gradient-to-r from-nexus-primary/10 to-nexus-secondary/10">
                        <h2 className="text-3xl font-black mb-4">See It In Action</h2>
                        <p className="text-gray-300 mb-8">Experience all features live on the platform</p>
                        <Link href="/app/dashboard">
                            <button className="btn-primary text-lg px-8 py-4">Launch App</button>
                        </Link>
                    </Card>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}

const allFeatures = [
    { title: "Nexus Node Creation", description: "Transform predictions into tokenized, tr adeable assets on BNB Chain" },
    { title: "Opinion Labs CLOB Integration", description: "Access $5B+ liquidity with institutional-grade order matching" },
    { title: "DAO Governance", description: "Community-driven dispute resolution with bonded voting" },
    { title: "AI Foresight Simulator", description: "Test scenarios and optimize strategies with Opinion AI" },
    { title: "Real-time Market Data", description: "Live odds, volume, and participant tracking" },
    { title: "Social Viral Mechanics", description: "Earn bonuses when your predictions go viral" },
    { title: "Gamified Leaderboards", description: "Compete globally and earn exclusive badges" },
    { title: "Referral System", description: "Invite friends and earn rewards together" },
    { title: "Portfolio Dashboard", description: "Track performance, positions, and P&L in real-time" },
    { title: "BNB Chain Security", description: "Fast, low-cost, secure transactions" },
    { title: "Web3 Wallet Integration", description: "Connect MetaMask, Trust Wallet, and more via RainbowKit" },
    { title: "Mobile Responsive", description: "Trade anywhere on desktop, tablet, or phone" },
    { title: "Category Filters", description: "Browse crypto, sports, politics, tech, and entertainment markets" },
    { title: "Quick Trade", description: "One-click YES/NO position entry" },
    { title: "Twitter Import", description: "Auto-create markets from trending tweets" },
    { title: "Badge Collection", description: "Unlock achievements and show off your expertise" },
];
