'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Zap, Trophy, Users } from 'lucide-react';

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-black mb-6">
                            <span className="gradient-text">Simple, Transparent Pricing</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Foresight Nexus is <span className="text-nexus-primary font-semibold">completely free</span> to use.
                            You only pay blockchain gas fees and optional platform fees on winning trades.
                        </p>
                    </div>

                    {/* Free to Use Banner */}
                    <Card className="p-12 mb-12 text-center bg-gradient-to-r from-nexus-primary/10 to-nexus-secondary/10 border-2 border-nexus-primary/30">
                        <Zap className="w-16 h-16 mx-auto mb-6 text-nexus-primary" />
                        <h2 className="text-3xl font-black mb-4">100% Free Platform</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            No subscription fees. No monthly charges. No hidden costs. Create unlimited predictions, trade, and earn.
                        </p>
                    </Card>

                    {/* Cost Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {costItems.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card hover className="p-8 h-full">
                                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <div className="text-3xl font-black mb-4 gradient-text">{item.cost}</div>
                                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                                    <ul className="space-y-2">
                                        {item.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                                <span className="text-nexus-accent">•</span>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Optional Fees */}
                    <Card className="p-8 mb-12">
                        <h2 className="text-2xl font-bold mb-6">Fee Structure</h2>
                        <div className="space-y-4">
                            {feeStructure.map((fee, index) => (
                                <div key={index} className="flex items-center justify-between p-4 glass rounded-xl">
                                    <div>
                                        <div className="font-semibold mb-1">{fee.name}</div>
                                        <div className="text-sm text-gray-400">{fee.description}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xl font-bold text-nexus-primary">{fee.fee}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Comparison */}
                    <h2 className="text-3xl font-black mb-8 text-center">
                        <span className="gradient-text">Why Foresight Nexus?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-8">
                            <h3 className="text-xl font-bold mb-6 text-red-400">❌ Traditional Prediction Markets</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400">×</span>
                                    <span className="text-gray-400">5-10% platform fees on winnings</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400">×</span>
                                    <span className="text-gray-400">Monthly subscription required</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400">×</span>
                                    <span className="text-gray-400">No social features or gamification</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400">×</span>
                                    <span className="text-gray-400">Centralized and opaque</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-8 bg-nexus-primary/5 border-2 border-nexus-primary/30">
                            <h3 className="text-xl font-bold mb-6 text-green-400">✓ Foresight Nexus</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-300">Only 2% platform fee (lowest in industry)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-300">Zero subscription or signup fees</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-300">Social, gamified, and rewarding</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-300">Fully decentralized and transparent</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    {/* CTA */}
                    <Card className="p-12 mt-16 text-center bg-gradient-to-r from-nexus-primary/10 to-nexus-secondary/10">
                        <h2 className="text-3xl font-black mb-4">Start Predicting for Free</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            No credit card required. Just connect your wallet and start creating predictions.
                        </p>
                        <Link href="/app/create">
                            <button className="btn-primary text-lg px-8 py-4">
                                Create Your First Nexus
                            </button>
                        </Link>
                    </Card>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}

const costItems = [
    {
        title: 'Platform Access',
        cost: 'FREE',
        color: 'bg-green-500/20',
        icon: <CheckCircle className="w-6 h-6 text-green-500" />,
        description: 'No subscription or signup fees',
        details: [
            'Unlimited market creation',
            'Unlimited trading',
            'Full DAO participation',
            'AI Simulator access',
            'Leaderboard & badges',
        ],
    },
    {
        title: 'Gas Fees',
        cost: '~$0.10',
        color: 'bg-nexus-gradient',
        icon: <Zap className="w-6 h-6 text-white" />,
        description: 'BNB Chain transaction costs',
        details: [
            'Per trade: ~$0.05-0.15',
            'Market creation: ~$0.20',
            'Only when you interact',
            'Lower than Ethereum',
        ],
    },
    {
        title: 'Platform Fee',
        cost: '2%',
        color: 'bg-purple-500/20',
        icon: <Trophy className="w-6 h-6 text-purple-400" />,
        description: 'Only charged on winning trades',
        details: [
            'Industry lowest rate',
            'No fees on losses',
            'Supports development',
            '50% goes to DAO treasury',
        ],
    },
];

const feeStructure = [
    {
        name: 'Account Creation',
        description: 'Connect your Web3 wallet - no signup required',
        fee: 'FREE',
    },
    {
        name: 'Browsing & Exploring',
        description: 'Browse all markets, view analytics, check leaderboard',
        fee: 'FREE',
    },
    {
        name: 'Create Nexus Node',
        description: 'Tokenize your prediction as an NFT-like asset',
        fee: '~$0.20 gas',
    },
    {
        name: 'Trade Position',
        description: 'Buy YES/NO shares on any market',
        fee: '~$0.10 gas + 2% on profit',
    },
    {
        name: 'DAO Voting',
        description: 'Participate in dispute resolution',
        fee: '~$0.08 gas',
    },
    {
        name: 'Claim Winnings',
        description: 'Withdraw your profits after market resolution',
        fee: '~$0.10 gas',
    },
];
