'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Lightbulb, Zap, Brain, TrendingUp } from 'lucide-react';

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 text-center">
                        <span className="gradient-text">How Foresight Nexus Works</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto text-center">
                        Transform your predictions into valuable assets. Here's how our social prediction network operates.
                    </p>

                    {/* 4-Step Process */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card hover className="p-6 h-full">
                                    <div className="w-12 h-12 rounded-full bg-nexus-gradient text-white font-black text-xl flex items-center justify-center mb-4">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Core Features Deep Dive */}
                    <h2 className="text-3xl font-black mb-8 text-center">
                        <span className="gradient-text">Core Features</span>
                    </h2>

                    <div className="space-y-8">
                        {/* Nexus Nodes */}
                        <Card className="p-8">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-nexus-gradient flex items-center justify-center flex-shrink-0">
                                    <Lightbulb className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-4">Nexus Nodes - Tokenized Predictions</h3>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        Every prediction you create becomes a <strong>Nexus Node</strong> - a unique, tradeable asset on the blockchain. Unlike traditional prediction markets, your insights don't just give you market exposure - they become viral content that others can discover, share, and trade.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="p-4 glass rounded-xl">
                                            <div className="text-nexus-primary font-semibold mb-1">Create</div>
                                            <div className="text-sm text-gray-400">Define your prediction with title, deadline, and outcome conditions</div>
                                        </div>
                                        <div className="p-4 glass rounded-xl">
                                            <div className="text-nexus-accent font-semibold mb-1">Share</div>
                                            <div className="text-sm text-gray-400">Your Node goes viral as others discover and trade it</div>
                                        </div>
                                        <div className="p-4 glass rounded-xl">
                                            <div className="text-nexus-secondary font-semibold mb-1">Earn</div>
                                            <div className="text-sm text-gray-400">Gain creator bonuses + trading profits when your Node succeeds</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Trading Mechanism */}
                        <Card className="p-8">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-4">Opinion Labs CLOB Trading</h3>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        Foresight Nexus is built on <strong>Opinion Labs' Central Limit Order Book (CLOB)</strong> infrastructure, providing institutional-grade trading for prediction markets on BNB Chain.
                                    </p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start gap-3">
                                            <span className="text-nexus-accent font-bold">✓</span>
                                            <span><strong>Deep Liquidity:</strong> Access Opinion's $5B+ ecosystem liquidity pool</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-nexus-accent font-bold">✓</span>
                                            <span><strong>Fair Pricing:</strong> Market-driven odds with transparent order matching</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-nexus-accent font-bold">✓</span>
                                            <span><strong>Instant Execution:</strong> Fast trades on BNB Chain with low gas fees</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-nexus-accent font-bold">✓</span>
                                            <span><strong>ERC-20 Positions:</strong> Your positions are tokenized and transferable</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>

                        {/* DAO Resolution */}
                        <Card className="p-8">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-4">DAO-Powered Fair Resolution</h3>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        When a prediction deadline arrives, the community decides the outcome through our <strong>Decentralized Autonomous Organization (DAO)</strong>.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-nexus-primary/20 text-nexus-primary font-bold flex items-center justify-center flex-shrink-0">1</div>
                                            <div>
                                                <strong className="text-white">Automatic Resolution:</strong>
                                                <p className="text-gray-400 text-sm">AI oracle suggests outcome based on verifiable data sources</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-nexus-primary/20 text-nexus-primary font-bold flex items-center justify-center flex-shrink-0">2</div>
                                            <div>
                                                <strong className="text-white">Community Challenge:</strong>
                                                <p className="text-gray-400 text-sm">If 20%+ users disagree, a dispute opens for voting</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-nexus-primary/20 text-nexus-primary font-bold flex items-center justify-center flex-shrink-0">3</div>
                                            <div>
                                                <strong className="text-white">Bonded Voting:</strong>
                                                <p className="text-gray-400 text-sm">Stake tokens to vote. Correct voters earn rewards, wrong voters lose stake</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 font-bold flex items-center justify-center flex-shrink-0">✓</div>
                                            <div>
                                                <strong className="text-white">Final Settlement:</strong>
                                                <p className="text-gray-400 text-sm">Winners claim payouts automatically via smart contract</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* AI Simulator */}
                        <Card className="p-8">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                    <Brain className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-4">AI Foresight Simulator</h3>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        Not sure if your prediction will work out? Use our <strong>Opinion AI-powered simulator</strong> to test scenarios and optimize your strategy.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 glass rounded-xl">
                                            <div className="text-cyan-400 font-semibold mb-2">📊 Probability Analysis</div>
                                            <div className="text-sm text-gray-400">AI calculates likelihood based on historical data and market sentiment</div>
                                        </div>
                                        <div className="p-4 glass rounded-xl">
                                            <div className="text-blue-400 font-semibold mb-2">🔮 What-If Scenarios</div>
                                            <div className="text-sm text-gray-400">Test different variables (FED rates, ETF approvals, etc.)</div>
                                        </div>
                                        <div className="p-4 glass rounded-xl">
                                            <div className="text-purple-400 font-semibold mb-2">💡 Strategy Recommendations</div>
                                            <div className="text-sm text-gray-400">Get optimal position sizes and timing suggestions</div>
                                        </div>
                                        <div className="p-4 glass rounded-xl">
                                            <div className="text-pink-400 font-semibold mb-2">🏆 Bonus Rewards</div>
                                            <div className="text-sm text-gray-400">Earn "Visionary Simulator" badge if your simulated predictions win</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* CTA */}
                    <Card className="p-12 mt-16 text-center bg-gradient-to-r from-nexus-primary/10 to-nexus-secondary/10 border-2 border-nexus-primary/30">
                        <h2 className="text-3xl font-black mb-4">Ready to Start Predicting?</h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Connect your wallet, create your first Nexus Node, and join the future of social prediction markets.
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

const steps = [
    {
        number: '1',
        title: 'Connect Wallet',
        description: 'Link your Web3 wallet (MetaMask, Trust Wallet, etc.) to BNB Chain'
    },
    {
        number: '2',
        title: 'Create or Explore',
        description: 'Make your own prediction or discover trending Nexus Nodes'
    },
    {
        number: '3',
        title: 'Trade & Share',
        description: 'Buy YES/NO positions and share predictions to earn viral bonuses'
    },
    {
        number: '4',
        title: 'Win Together',
        description: 'When outcomes resolve, winners claim rewards automatically'
    }
];
