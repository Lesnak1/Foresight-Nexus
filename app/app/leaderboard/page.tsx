'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Trophy, TrendingUp, Award, Crown, Medal, Star } from 'lucide-react';
import { formatAddress } from '@/lib/utils';

const topPredictors = [
    { rank: 1, address: '0x742d35a9c4f3a2b1e8f6d72c9e4a5b3f', winRate: 94.2, totalProfit: 45680, reputation: 2341, badges: 12 },
    { rank: 2, address: '0x8a2b7c1d4f6e9a3c5b8d1f4a6c2e7b9d', winRate: 91.8, totalProfit: 38920, reputation: 2104, badges: 10 },
    { rank: 3, address: '0x4f3e9a2b7c1d5f8a3b6e1c4d7f9a2b8e', winRate: 89.5, totalProfit: 32450, reputation: 1987, badges: 9 },
    { rank: 4, address: '0x2e7a6f3c9d1b5a8f4c2e7d9a3b6f1c8e', winRate: 87.3, totalProfit: 28760, reputation: 1842, badges: 8 },
    { rank: 5, address: '0x9d1c4b8f7a2e6c3d5f8b1a4e7c2d9f6a', winRate: 85.6, totalProfit: 24130, reputation: 1756, badges: 7 },
    { rank: 6, address: '0x5f8a3b6e1c4d7f9a2b8e4f3c9d1b5a7e', winRate: 84.1, totalProfit: 21590, reputation: 1623, badges: 6 },
    { rank: 7, address: '0x1b5a8f4c2e7d9a3b6f1c8e5f9a2b7d4c', winRate: 82.7, totalProfit: 19340, reputation: 1542, badges: 6 },
    { rank: 8, address: '0x7c2d9f6a3b8e1c4f5a7d2e9b3f6c1a8d', winRate: 81.2, totalProfit: 17280, reputation: 1487, badges: 5 },
    { rank: 9, address: '0x3d5f8a2b7c1e4f9a6b3d8f1c5a7e2b9d', winRate: 79.8, totalProfit: 15620, reputation: 1398, badges: 5 },
    { rank: 10, address: '0x6c1a8d4f2e9b7a3f5c8d1b4e7f2a9c6e', winRate: 78.4, totalProfit: 14120, reputation: 1276, badges: 4 },
];

const categoryLeaders = [
    { category: 'Kripto', leader: '0x742d...3f4a', winRate: 96.2 },
    { category: 'Spor', leader: '0x8a2b...7c1d', winRate: 93.5 },
    { category: 'Politika', leader: '0x4f3e...9a2b', winRate: 91.8 },
    { category: 'Teknoloji', leader: '0x2e7a...6f3c', winRate: 89.3 },
];

export default function LeaderboardPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-4xl font-black mb-3">
                    <span className="gradient-text">Liderlik Tablosu</span> 🏆
                </h2>
                <p className="text-xl text-gray-400">
                    En başarılı tahmin ustalarını keşfet
                </p>
            </motion.div>

            {/* Top 3 Podium */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
                {/* 2nd Place */}
                <Card className="p-6 text-center md:mt-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                        <Medal className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-black mb-2">🥈 2nd Place</div>
                    <div className="font-mono text-sm text-gray-400 mb-4">
                        {formatAddress(topPredictors[1].address)}
                    </div>
                    <div className="space-y-2">
                        <div className="text-sm text-gray-400">Win Rate</div>
                        <div className="text-3xl font-black gradient-text">{topPredictors[1].winRate}%</div>
                    </div>
                </Card>

                {/* 1st Place */}
                <Card className="p-8 text-center border-4 border-nexus-primary glow-primary scale-105">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-nexus-gradient flex items-center justify-center animate-pulse">
                        <Crown className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-3xl font-black mb-2">
                        👑 <span className="gradient-text">CHAMPION</span>
                    </div>
                    <div className="font-mono text-sm text-gray-400 mb-4">
                        {formatAddress(topPredictors[0].address)}
                    </div>
                    <div className="space-y-2 mb-4">
                        <div className="text-sm text-gray-400">Win Rate</div>
                        <div className="text-4xl font-black text-nexus-accent">{topPredictors[0].winRate}%</div>
                    </div>
                    <div className="flex items-center justify-center gap-4 text-sm">
                        <div>
                            <div className="text-gray-400">Profit</div>
                            <div className="font-bold">${(topPredictors[0].totalProfit / 1000).toFixed(1)}K</div>
                        </div>
                        <div>
                            <div className="text-gray-400">Badges</div>
                            <div className="font-bold">{topPredictors[0].badges}</div>
                        </div>
                    </div>
                </Card>

                {/* 3rd Place */}
                <Card className="p-6 text-center md:mt-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-black mb-2">🥉 3rd Place</div>
                    <div className="font-mono text-sm text-gray-400 mb-4">
                        {formatAddress(topPredictors[2].address)}
                    </div>
                    <div className="space-y-2">
                        <div className="text-sm text-gray-400">Win Rate</div>
                        <div className="text-3xl font-black gradient-text">{topPredictors[2].winRate}%</div>
                    </div>
                </Card>
            </motion.div>

            {/* Full Leaderboard Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <Card className="overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="border-b border-white/10">
                                <tr className="text-left">
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-400">Rank</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-400">Kullanıcı</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-400">Win Rate</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-400">Total Profit</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-400">Reputation</th>
                                    <th className="px-6 py-4 text-sm font-semibold text-gray-400">Badges</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topPredictors.map((predictor, index) => (
                                    <motion.tr
                                        key={predictor.rank}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + index * 0.05 }}
                                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                {predictor.rank <= 3 ? (
                                                    <div className="text-2xl">
                                                        {predictor.rank === 1 && '👑'}
                                                        {predictor.rank === 2 && '🥈'}
                                                        {predictor.rank === 3 && '🥉'}
                                                    </div>
                                                ) : (
                                                    <div className="w-8 h-8 rounded-full glass flex items-center justify-center font-bold text-sm">
                                                        {predictor.rank}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-mono text-sm">{formatAddress(predictor.address)}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4 text-green-500" />
                                                <span className="font-bold text-green-500">{predictor.winRate}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-semibold">${(predictor.totalProfit / 1000).toFixed(1)}K</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <Star className="w-4 h-4 text-nexus-accent" />
                                                <span className="font-semibold">{predictor.reputation}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-1">
                                                {Array.from({ length: Math.min(predictor.badges, 5) }).map((_, i) => (
                                                    <div key={i} className="w-6 h-6 rounded-full bg-nexus-gradient/30 flex items-center justify-center text-xs">
                                                        🏅
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </motion.div>

            {/* Category Leaders */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <h3 className="text-2xl font-bold mb-6">Kategori Liderleri</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categoryLeaders.map((cat, index) => (
                        <Card key={cat.category} hover className="p-6 text-center">
                            <div className="text-3xl mb-3">
                                {index === 0 && '₿'}
                                {index === 1 && '⚽'}
                                {index === 2 && '🗳️'}
                                {index === 3 && '💻'}
                            </div>
                            <div className="font-bold mb-2">{cat.category}</div>
                            <div className="text-sm text-gray-400 font-mono mb-2">{formatAddress(cat.leader)}</div>
                            <div className="text-xl font-black gradient-text">{cat.winRate}%</div>
                        </Card>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
