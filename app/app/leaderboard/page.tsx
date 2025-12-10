'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Trophy, TrendingUp, Target, Zap } from 'lucide-react';

const topUsers = [
    { rank: 1, name: '0xVision...42a3', winRate: 89.2, volume: '$2.4M', badge: '🏆 Oracle' },
    { rank: 2, name: '0xPredict...7f2c', winRate: 86.7, volume: '$1.8M', badge: '🔮 Visionary' },
    { rank: 3, name: '0xFuture...9a1b', winRate: 84.3, volume: '$1.5M', badge: '⚡ Prophet' },
];

const allUsers = [
    { rank: 4, name: '0xMarkets...3c4d', winRate: 81.5, volume: '$980K' },
    { rank: 5, name: '0xTrend...8e2f', winRate: 79.8, volume: '$854K' },
    { rank: 6, name: '0xCrypto...1a9c', winRate: 78.2, volume: '$723K' },
    { rank: 7, name: '0xPredict...5b7d', winRate: 76.9, volume: '$689K' },
    { rank: 8, name: '0xOracle...4f3e', winRate: 75.4, volume: '$612K' },
];

export default function LeaderboardPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-4xl font-black mb-4">
                    <span className="gradient-text">Leaderboard</span> 🏆
                </h2>
                <p className="text-gray-400 text-lg">
                    Discover the most successful prediction masters
                </p>
            </motion.div>

            {/* Top 3 Podium */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topUsers.map((user, index) => (
                    <motion.div
                        key={user.rank}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card
                            hover
                            className={`p-6 text-center ${user.rank === 1 ? 'bg-gradient-to-b from-yellow-500/20 to-transparent border-yellow-500/50' :
                                    user.rank === 2 ? 'bg-gradient-to-b from-gray-400/20 to-transparent border-gray-400/50' :
                                        'bg-gradient-to-b from-orange-600/20 to-transparent border-orange-600/50'
                                }`}
                        >
                            <div className="text-6xl mb-4">
                                {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                            </div>
                            <div className="font-mono text-sm text-gray-400 mb-2">#{user.rank}</div>
                            <div className="font-bold text-lg mb-3">{user.name}</div>
                            <div className="text-sm text-gray-400 mb-4">{user.badge}</div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-2xl font-black text-green-500">{user.winRate}%</div>
                                    <div className="text-xs text-gray-500">Win Rate</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black gradient-text">{user.volume}</div>
                                    <div className="text-xs text-gray-500">Volume</div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Full Rankings */}
            <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Full Rankings</h3>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Rank</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">User</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-400">Win Rate</th>
                                <th className="px-6 py-4 text-sm font-semibold text-gray-400">Volume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((user, index) => (
                                <motion.tr
                                    key={user.rank}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <span className="font-mono text-gray-500">#{user.rank}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-semibold">{user.name}</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="text-green-500 font-bold">{user.winRate}%</span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="font-semibold gradient-text">{user.volume}</span>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Category Leaders */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6">
                    <Target className="w-8 h-8 text-nexus-primary mb-3" />
                    <div className="text-sm text-gray-400 mb-1">Crypto King</div>
                    <div className="font-bold">0xBTC...master</div>
                    <div className="text-sm text-nexus-accent mt-2">92.1% Win Rate</div>
                </Card>
                <Card className="p-6">
                    <Trophy className="w-8 h-8 text-yellow-500 mb-3" />
                    <div className="text-sm text-gray-400 mb-1">Sports Expert</div>
                    <div className="font-bold">0xGoal...scorer</div>
                    <div className="text-sm text-nexus-accent mt-2">88.4% Win Rate</div>
                </Card>
                <Card className="p-6">
                    <Zap className="w-8 h-8 text-purple-400 mb-3" />
                    <div className="text-sm text-gray-400 mb-1">Tech Visionary</div>
                    <div className="font-bold">0xTech...guru</div>
                    <div className="text-sm text-nexus-accent mt-2">86.7% Win Rate</div>
                </Card>
                <Card className="p-6">
                    <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                    <div className="text-sm text-gray-400 mb-1">Volume Leader</div>
                    <div className="font-bold">0xWhale...trader</div>
                    <div className="text-sm text-nexus-accent mt-2">$4.2M Volume</div>
                </Card>
            </div>
        </div>
    );
}
