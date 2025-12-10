'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Trophy, TrendingUp, Users, Copy, Share2 } from 'lucide-react';

const badges = [
    { name: 'Visionary', icon: '🔮', description: 'Win rate > 80%' },
    { name: 'High Roller', icon: '💎', description: 'Volume > $100K' },
    { name: 'Early Adopter', icon: '⚡', description: 'First 1000 users' },
];

const achievements = [
    { title: '10 Win Streak', progress: 80, max: 100 },
    { title: 'Volume King', progress: 65, max: 100 },
    { title: 'DAO Participant', progress: 45, max: 100 },
];

export default function ProfilePage() {
    return (
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Profile Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="p-8">
                    <div className="flex items-start gap-8">
                        <div className="w-24 h-24 rounded-full bg-nexus-gradient flex items-center justify-center text-4xl">
                            🔮
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-black mb-2">Visionary Predictor</h2>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="font-mono text-gray-400">0x742d...3a8c</span>
                                <button className="p-1 hover:text-nexus-primary transition-colors">
                                    <Copy className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 rounded-full bg-nexus-gradient/20 text-nexus-primary text-sm font-semibold">
                                    Level 12
                                </span>
                                <span className="px-3 py-1 rounded-full glass text-sm">
                                    Rank #247
                                </span>
                            </div>
                        </div>
                        <button className="btn-primary flex items-center gap-2">
                            <Share2 className="w-4 h-4" />
                            Share Profile
                        </button>
                    </div>
                </Card>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="p-6">
                    <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                    <div className="text-2xl font-black mb-1">72.5%</div>
                    <div className="text-sm text-gray-400">Win Rate</div>
                </Card>
                <Card className="p-6">
                    <Trophy className="w-8 h-8 text-yellow-500 mb-3" />
                    <div className="text-2xl font-black mb-1">$2,100</div>
                    <div className="text-sm text-gray-400">Total Earnings</div>
                </Card>
                <Card className="p-6">
                    <Users className="w-8 h-8 text-purple-400 mb-3" />
                    <div className="text-2xl font-black mb-1">42</div>
                    <div className="text-sm text-gray-400">Total Predictions</div>
                </Card>
                <Card className="p-6">
                    <div className="text-3xl mb-3">🎯</div>
                    <div className="text-2xl font-black mb-1">847</div>
                    <div className="text-sm text-gray-400">Reputation</div>
                </Card>
            </div>

            {/* Badges */}
            <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Badges & Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 glass rounded-xl"
                        >
                            <div className="text-5xl mb-3">{badge.icon}</div>
                            <div className="font-bold mb-1">{badge.name}</div>
                            <div className="text-sm text-gray-400">{badge.description}</div>
                        </motion.div>
                    ))}
                </div>
            </Card>

            {/* Progress */}
            <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Achievement Progress</h3>
                <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                        <div key={index}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-semibold">{achievement.title}</span>
                                <span className="text-sm text-gray-400">{achievement.progress}/{achievement.max}</span>
                            </div>
                            <div className="h-3 rounded-full bg-gray-800 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(achievement.progress / achievement.max) * 100}%` }}
                                    transition={{ delay: index * 0.2, duration: 0.8 }}
                                    className="h-full bg-gradient-to-r from-nexus-primary to-nexus-secondary"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Referral */}
            <Card className="p-8 bg-gradient-to-r from-nexus-primary/10 to-nexus-secondary/10 border-nexus-primary/30">
                <h3 className="text-2xl font-bold mb-3">Invite Friends 🎁</h3>
                <p className="text-gray-300 mb-6">
                    Earn 10% referral bonus for each invite. Your friends earn, you earn!
                </p>
                <div className="flex gap-3">
                    <input
                        type="text"
                        value="https://foresightnexus.io/ref/0x742d3a8c"
                        readOnly
                        className="flex-1 px-4 py-3 rounded-xl glass border border-white/10 font-mono text-sm"
                    />
                    <button className="btn-primary px-6 flex items-center gap-2">
                        <Copy className="w-4 h-4" />
                        Copy
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 glass rounded-xl">
                        <div className="text-2xl font-black gradient-text">12</div>
                        <div className="text-sm text-gray-400">Referrals</div>
                    </div>
                    <div className="text-center p-4 glass rounded-xl">
                        <div className="text-2xl font-black gradient-text">$342</div>
                        <div className="text-sm text-gray-400">Earned Bonus</div>
                    </div>
                    <div className="text-center p-4 glass rounded-xl">
                        <div className="text-2xl font-black gradient-text">Top 5%</div>
                        <div className="text-sm text-gray-400">Referrer Rank</div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
