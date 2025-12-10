'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, TrendingUp, Shield, Sparkles, Network } from 'lucide-react';
import Link from 'next/link';
import { StatsCounter } from '@/components/StatsCounter';
import { WalletButton } from '@/components/WalletButton';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Footer } from '@/components/Footer';

export default function HomePage() {
    return (
        <main className="relative min-h-screen bg-nexus-darker overflow-hidden">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Navigation */}
            <nav className="relative z-10 px-6 py-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-xl bg-nexus-gradient flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold gradient-text">Foresight Nexus</span>
                    </motion.div>

                    <WalletButton />
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 px-6 py-20 md:py-32">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block mb-6 px-4 py-2 rounded-full glass border border-nexus-primary/30">
                            <span className="text-nexus-accent font-semibold text-sm">
                                🚀 Opinion Labs Ecosystem
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            <span className="gradient-text">Predict the Future,</span>
                            <br />
                            <span className="text-white">Start Earning</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Your predictions become <span className="text-nexus-primary font-semibold">Nexus Nodes</span> - tokenized assets.
                            Share your insights, trade with the community, and win together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link href="/app/dashboard">
                                <button className="btn-primary group flex items-center gap-3 text-lg px-8 py-4 hover:scale-105 transition-transform">
                                    <span>Launch App</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                            <Link href="/how-it-works">
                                <button className="glass px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all">
                                    How It Works
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Live Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <div className="glass-strong rounded-2xl p-8 card-hover">
                            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                                <StatsCounter end={5247} duration={2} />
                            </div>
                            <div className="text-gray-400 font-medium">Active Predictions</div>
                        </div>

                        <div className="glass-strong rounded-2xl p-8 card-hover glow-primary">
                            <div className="text-4xl md:text-5xl font-black text-nexus-accent mb-2">
                                $<StatsCounter end={5.2} decimals={1} duration={2} />B
                            </div>
                            <div className="text-gray-400 font-medium">Total Volume</div>
                        </div>

                        <div className="glass-strong rounded-2xl p-8 card-hover">
                            <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                                <StatsCounter end={175} duration={2} />K+
                            </div>
                            <div className="text-gray-400 font-medium">Community Members</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="relative z-10 px-6 py-20">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            <span className="gradient-text">Why Foresight Nexus?</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Built on Opinion Labs' powerful infrastructure. A social prediction experience.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-strong rounded-2xl p-8 card-hover group"
                            >
                                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 px-6 py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-strong rounded-3xl p-12 md:p-16 glow-secondary"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6">
                            Join the <span className="gradient-text">Prediction Revolution</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Become a future architect. Create your first prediction and start earning.
                        </p>
                        <Link href="/app/create">
                            <button className="btn-primary text-xl px-10 py-5 hover:scale-105 transition-transform">
                                <span>Create Your First Nexus</span>
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
}

const features = [
    {
        icon: <Network className="w-7 h-7 text-white" />,
        title: "Nexus Nodes",
        description: "Transform your predictions into NFT-like assets. Each node goes viral and gains value.",
        color: "bg-nexus-gradient",
    },
    {
        icon: <Users className="w-7 h-7 text-white" />,
        title: "DAO Resolution",
        description: "Fair settlement through community governance. Stake, vote, and build a trusted oracle.",
        color: "bg-gradient-to-br from-purple-600 to-pink-600",
    },
    {
        icon: <Sparkles className="w-7 h-7 text-white" />,
        title: "AI Simulator",
        description: "Test 'what-if' scenarios with Opinion AI. Optimize your winning chances.",
        color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    },
    {
        icon: <TrendingUp className="w-7 h-7 text-white" />,
        title: "Social Viral Growth",
        description: "Share your predictions, invite friends. Every viral share earns bonus points.",
        color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
        icon: <Shield className="w-7 h-7 text-white" />,
        title: "BNB Chain Security",
        description: "Secure and fast transactions with Opinion Protocol's CLOB infrastructure.",
        color: "bg-gradient-to-br from-yellow-500 to-orange-600",
    },
    {
        icon: <Zap className="w-7 h-7 text-white" />,
        title: "Gamified Rewards",
        description: "Badges, leaderboards, mystery drops. Trading should be fun!",
        color: "bg-gradient-to-br from-red-500 to-pink-600",
    },
];
