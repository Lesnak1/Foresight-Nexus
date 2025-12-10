'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Target, Users, Zap } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        <span className="gradient-text">About Foresight Nexus</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                        The social network for future predictions. Built on Opinion Labs ecosystem.
                    </p>

                    {/* Mission */}
                    <Card className="p-8 md:p-12 mb-8">
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            Foresight Nexus democratizes prediction markets by transforming insights into <span className="text-nexus-primary font-semibold">Nexus Nodes</span> -
                            tokenized, tradeable assets that empower communities to forecast the future together.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            We believe the wisdom of crowds, combined with blockchain technology and AI-powered analytics,             creates the most accurate and fair prediction ecosystem in Web3.
                        </p>
                    </Card>

                    {/* Core Values */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card hover className="p-6 h-full">
                                    <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-4`}>
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Built on Opinion Labs */}
                    <Card className="p-8 md:p-12 mb-8 bg-gradient-to-r from-nexus-primary/10 to-nexus-secondary/10 border-2 border-nexus-primary/30">
                        <h2 className="text-3xl font-bold mb-6">Built for Opinion Labs Ecosystem</h2>
                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            Foresight Nexus is proud to be part of the <span className="text-nexus-primary font-semibold">Opinion Labs</span> ecosystem,
                            leveraging their powerful CLOB (Central Limit Order Book) infrastructure and community oracle systems.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <div className="text-3xl font-black gradient-text mb-2">$5B+</div>
                                <div className="text-gray-400">Opinion Labs Volume</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black gradient-text mb-2">175K+</div>
                                <div className="text-gray-400">Community Members</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black gradient-text mb-2">BNB Chain</div>
                                <div className="text-gray-400">Secured Infrastructure</div>
                            </div>
                        </div>
                    </Card>

                    {/* Technology */}
                    <Card className="p-8 md:p-12 mb-8">
                        <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">🔗 Blockchain Layer</h3>
                                <p className="text-gray-400">Built on BNB Chain for fast, low-cost transactions. Fully decentralized and transparent.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">🤖 AI Integration</h3>
                                <p className="text-gray-400">Opinion AI powers our Foresight Simulator for probability analysis and scenario testing.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">⚖️ DAO Governance</h3>
                                <p className="text-gray-400">Community-driven dispute resolution ensures fair market outcomes through bonded voting.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">🎮 Gamification</h3>
                                <p className="text-gray-400">Badges, leaderboards, and referral rewards make prediction markets fun and engaging.</p>
                            </div>
                        </div>
                    </Card>

                    {/* Team */}
                    <Card className="p-8 md:p-12 mb-8">
                        <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            Foresight Nexus is developed by blockchain enthusiasts, prediction market experts, and Web3 builders
                            passionate about creating the future of decentralized forecasting.
                        </p>
                        <p className="text-gray-400 italic">
                            Supported by Opinion Labs, Binance Chain, and the broader DeFi community.
                        </p>
                    </Card>

                    {/* Roadmap */}
                    <Card className="p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-6">Roadmap</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center flex-shrink-0 font-bold">
                                    ✓
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Q4 2025 - MVP Launch</h3>
                                    <p className="text-gray-400">Core prediction markets, DAO resolution, AI simulator, and gamification.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-nexus-primary/20 text-nexus-primary flex items-center justify-center flex-shrink-0 font-bold">
                                    →
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Q1 2026 - Backend Integration</h3>
                                    <p className="text-gray-400">Real Opinion API integration, smart contracts deployment, Twitter sentiment analysis.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0 font-bold">
                                    →
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Q2 2026 - Advanced Features</h3>
                                    <p className="text-gray-400">Social features, group pools, mobile PWA, advanced analytics dashboard.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 font-bold">
                                    →
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Q3 2026 - Scale & Expansion</h3>
                                    <p className="text-gray-400">Multi-chain support, institutional features, 10K+ MAU target.</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}

const values = [
    {
        icon: <Sparkles className="w-6 h-6 text-white" />,
        title: "Innovation",
        description: "We push the boundaries of prediction markets with AI, blockchain, and social features.",
        color: "bg-nexus-gradient",
    },
    {
        icon: <Users className="w-6 h-6 text-white" />,
        title: "Community First",
        description: "DAO governance ensures our platform evolves with user needs and community consensus.",
        color: "bg-gradient-to-br from-purple-600 to-pink-600",
    },
    {
        icon: <Target className="w-6 h-6 text-white" />,
        title: "Transparency",
        description: "All outcomes are verifiable on-chain. No hidden fees, no manipulation, total clarity.",
        color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    },
    {
        icon: <Zap className="w-6 h-6 text-white" />,
        title: "User Experience",
        description: "Prediction markets should be fun, intuitive, and rewarding for everyone.",
        color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
];
