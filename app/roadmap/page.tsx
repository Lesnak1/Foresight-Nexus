'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Rocket, Zap } from 'lucide-react';

export default function RoadmapPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-black mb-6">
                            <span className="gradient-text">Product Roadmap</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Our vision for building the future of social prediction markets on Opinion Labs ecosystem
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-nexus-primary via-nexus-secondary to-transparent" />

                        <div className="space-y-12">
                            {roadmapPhases.map((phase, index) => (
                                <motion.div
                                    key={phase.quarter}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative pl-20"
                                >
                                    {/* Icon */}
                                    <div className={`absolute left-0 w-16 h-16 rounded-2xl ${phase.color} flex items-center justify-center`}>
                                        {phase.icon}
                                    </div>

                                    <Card className="p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <div className="text-sm text-gray-500 mb-1">{phase.quarter}</div>
                                                <h2 className="text-2xl font-bold">{phase.title}</h2>
                                            </div>
                                            <div className={`px-4 py-2 rounded-full ${phase.statusBg} ${phase.statusText} font-semibold text-sm`}>
                                                {phase.status}
                                            </div>
                                        </div>
                                        <p className="text-gray-400 mb-6">{phase.description}</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {phase.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <CheckCircle className={`w-5 h-5 ${phase.checkColor} flex-shrink-0 mt-0.5`} />
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Future Vision */}
                    <Card className="p-12 mt-16 bg-gradient-to-r from-nexus-primary/10 to-nexus-secondary/10 border-2 border-nexus-primary/30 text-center">
                        <Rocket className="w-16 h-16 mx-auto mb-6 text-nexus-primary" />
                        <h2 className="text-3xl font-black mb-4">Beyond 2026</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                            Multi-chain expansion, institutional features, mobile apps, and becoming the #1 social prediction platform in Web3
                        </p>
                        <Link href="/about">
                            <button className="btn-primary">Learn More About Our Vision</button>
                        </Link>
                    </Card>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}

const roadmapPhases = [
    {
        quarter: 'Q4 2025',
        title: 'MVP Launch',
        status: 'COMPLETED',
        statusBg: 'bg-green-500/20',
        statusText: 'text-green-500',
        color: 'bg-green-500/20',
        checkColor: 'text-green-500',
        icon: <CheckCircle className="w-8 h-8 text-green-500" />,
        description: 'Core platform launch with essential prediction market features',
        features: [
            'Landing page & core UI/UX',
            'Nexus Node creation interface',
            'DAO Resolution Hub',
            'AI Foresight Simulator',
            'Leaderboard & gamification',
            'User profiles & badges',
            'Comprehensive legal pages',
            'Web3 wallet integration',
        ],
    },
    {
        quarter: 'Q1 2026',
        title: 'Backend Integration',
        status: 'IN PROGRESS',
        statusBg: 'bg-nexus-primary/20',
        statusText: 'text-nexus-primary',
        color: 'bg-nexus-gradient',
        checkColor: 'text-nexus-primary',
        icon: <Zap className="w-8 h-8 text-white" />,
        description: 'Full Opinion Labs API integration and smart contract deployment',
        features: [
            'Opinion Open API integration',
            'CLOB SDK trading functionality',
            'Real-time WebSocket updates',
            'Gasless market creation',
            'Nexus Node NFT contracts',
            'Twitter sentiment integration',
            'DAO voting smart contracts',
            'Builders Program grant approval',
        ],
    },
    {
        quarter: 'Q2 2026',
        title: 'Advanced Features',
        status: 'PLANNED',
        statusBg: 'bg-purple-500/20',
        statusText: 'text-purple-400',
        color: 'bg-gradient-to-br from-purple-600 to-pink-600',
        checkColor: 'text-purple-400',
        icon: <Clock className="w-8 h-8 text-white" />,
        description: 'Social features and advanced analytics to boost engagement',
        features: [
            'Comments & social interactions',
            'Follow/followers system',
            'Private prediction leagues',
            'Advanced analytics dashboard',
            'Mobile PWA with offline support',
            'Push notifications',
            'Multi-language support',
            'Enhanced AI recommendations',
        ],
    },
    {
        quarter: 'Q3 2026',
        title: 'Scale & Optimization',
        status: 'PLANNED',
        statusBg: 'bg-blue-500/20',
        statusText: 'text-blue-400',
        color: 'bg-gradient-to-br from-cyan-500 to-blue-600',
        checkColor: 'text-blue-400',
        icon: <Rocket className="w-8 h-8 text-white" />,
        description: 'Performance optimization and growth initiatives',
        features: [
            '10,000+ MAU milestone',
            '$5M+ trading volume',
            'A/B testing & conversion optimization',
            'Marketing automation',
            'Institutional features',
            'API partnerships',
            'Security audits',
            'Lighthouse score 95+',
        ],
    },
];
