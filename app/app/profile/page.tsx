'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { User, Award, Share2, TrendingUp, Target, Zap, Copy, ExternalLink } from 'lucide-react';
import { formatAddress } from '@/lib/utils';

const mockProfile = {
    address: '0x742d35a9c4f3a2b1e8f6d72c9e4a5b3f',
    ens: null,
    reputation: 847,
    level: 12,
    title: 'Visionary',
    winRate: 72.5,
    totalProfit: 2100,
    activePositions: 12,
    totalPredictions: 47,
    badges: [
        { id: 1, name: 'Early Adopter', emoji: '🚀', rarity: 'legendary' },
        { id: 2, name: 'Crypto Oracle', emoji: '₿', rarity: 'epic' },
        { id: 3, name: 'Viral Sharer', emoji: '📢', rarity: 'rare' },
        { id: 4, name: 'DAO Voter', emoji: '⚖️', rarity: 'common' },
        { id: 5, name: 'Simulator Pro', emoji: '🤖', rarity: 'rare' },
        { id: 6, name: 'Top 15%', emoji: '🏆', rarity: 'epic' },
    ],
    referralCode: 'NEXUS847',
    referralCount: 23,
};

export default function ProfilePage() {
    return (
        <div className="max-w-6xl mx-auto space-y-8">
            {/* Profile Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Card className="p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Avatar */}
                        <div className="relative">
                            <div className="w-32 h-32 rounded-2xl bg-nexus-gradient flex items-center justify-center text-5xl glow-primary">
                                🔮
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-nexus-accent flex items-center justify-center font-black text-sm">
                                {mockProfile.level}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                                <h2 className="text-3xl font-black">{mockProfile.ens || formatAddress(mockProfile.address)}</h2>
                                <div className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-semibold">
                                    {mockProfile.title}
                                </div>
                            </div>

                            <div className="font-mono text-gray-400 mb-4">
                                {mockProfile.address}
                                <button className="ml-2 hover:text-white transition-colors">
                                    <Copy className="w-4 h-4 inline" />
                                </button>
                            </div>

                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-6">
                                <div>
                                    <div className="text-2xl font-black gradient-text">{mockProfile.reputation}</div>
                                    <div className="text-sm text-gray-400">Reputation</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-green-500">{mockProfile.winRate}%</div>
                                    <div className="text-sm text-gray-400">Win Rate</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-nexus-accent">${mockProfile.totalProfit}</div>
                                    <div className="text-sm text-gray-400">Total Profit</div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                <Button variant="primary" size="sm">
                                    <User className="w-4 h-4" />
                                    <span>Edit Profile</span>
                                </Button>
                                <Button variant="secondary" size="sm">
                                    <Share2 className="w-4 h-4" />
                                    <span>Share</span>
                                </Button>
                                <Button variant="ghost" size="sm">
                                    <ExternalLink className="w-4 h-4" />
                                    <span>View on Explorer</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Card className="p-6 text-center">
                        <Target className="w-8 h-8 mx-auto mb-3 text-nexus-primary" />
                        <div className="text-3xl font-black mb-2">{mockProfile.activePositions}</div>
                        <div className="text-sm text-gray-400">Aktif Pozisyonlar</div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="p-6 text-center">
                        <TrendingUp className="w-8 h-8 mx-auto mb-3 text-green-500" />
                        <div className="text-3xl font-black mb-2">{mockProfile.totalPredictions}</div>
                        <div className="text-sm text-gray-400">Toplam Tahmin</div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Card className="p-6 text-center">
                        <Award className="w-8 h-8 mx-auto mb-3 text-purple-500" />
                        <div className="text-3xl font-black mb-2">{mockProfile.badges.length}</div>
                        <div className="text-sm text-gray-400">Badge Koleksiyonu</div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Card className="p-6 text-center">
                        <Share2 className="w-8 h-8 mx-auto mb-3 text-nexus-accent" />
                        <div className="text-3xl font-black mb-2">{mockProfile.referralCount}</div>
                        <div className="text-sm text-gray-400">Referral Bonuses</div>
                    </Card>
                </motion.div>
            </div>

            {/* Badges Collection */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Award className="w-6 h-6 text-nexus-primary" />
                    Badge Koleksiyonu
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {mockProfile.badges.map((badge, index) => (
                        <motion.div
                            key={badge.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.05 }}
                        >
                            <Card hover className="p-6 text-center">
                                <div className="text-5xl mb-3">{badge.emoji}</div>
                                <div className="font-bold text-sm mb-2">{badge.name}</div>
                                <div className={`text-xs px-2 py-1 rounded-full inline-block ${badge.rarity === 'legendary' ? 'bg-orange-500/20 text-orange-400' :
                                        badge.rarity === 'epic' ? 'bg-purple-500/20 text-purple-400' :
                                            badge.rarity === 'rare' ? 'bg-blue-500/20 text-blue-400' :
                                                'bg-gray-500/20 text-gray-400'
                                    }`}>
                                    {badge.rarity}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Referral Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <Card className="p-8 bg-gradient-to-r from-nexus-primary/10 to-nexus-secondary/10 border-2 border-nexus-primary/30">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-nexus-gradient/30 flex items-center justify-center flex-shrink-0">
                            <Share2 className="w-6 h-6 text-nexus-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3">Arkadaşlarını Davet Et 🎁</h3>
                            <p className="text-gray-300 mb-6">
                                Her davet için %10 referral bonus kazan. Arkadaşların kazandıkça sen de kazanırsın!
                            </p>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <div className="text-sm text-gray-400 mb-2">Referral Kodun</div>
                                    <div className="flex gap-2">
                                        <div className="flex-1 glass px-4 py-3 rounded-xl font-mono font-bold text-nexus-accent">
                                            {mockProfile.referralCode}
                                        </div>
                                        <Button variant="secondary">
                                            <Copy className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="text-sm text-gray-400 mb-2">Referral Link</div>
                                    <div className="flex gap-2">
                                        <div className="flex-1 glass px-4 py-3 rounded-xl font-mono text-sm truncate">
                                            foresight.nexus/ref/{mockProfile.referralCode}
                                        </div>
                                        <Button variant="secondary">
                                            <Copy className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-3xl font-black gradient-text">{mockProfile.referralCount}</div>
                                    <div className="text-sm text-gray-400">Toplam Davet</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-black text-nexus-accent">$287</div>
                                    <div className="text-sm text-gray-400">Kazanılan Bonus</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
}
