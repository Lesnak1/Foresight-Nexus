'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { AlertCircle, Users, TrendingUp, CheckCircle } from 'lucide-react';

const disputes = [
    {
        id: 1,
        market: 'BTC hits $100K by Dec 2025?',
        status: 'active',
        yesVotes: 847,
        noVotes: 253,
        totalStaked: '$124K',
        deadline: '23:45:12',
    },
    {
        id: 2,
        market: 'Will ETH ETF get approved?',
        status: 'active',
        yesVotes: 532,
        noVotes: 468,
        totalStaked: '$87K',
        deadline: '12:32:45',
    },
];

export default function DAOPage() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-4xl font-black mb-4">
                    <span className="gradient-text">DAO Resolution Hub</span> ⚖️
                </h2>
                <p className="text-gray-400 text-lg">
                    Community-governed fair outcomes. Vote and earn rewards.
                </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="p-6">
                    <AlertCircle className="w-8 h-8 text-nexus-primary mb-3" />
                    <div className="text-2xl font-black mb-1">2</div>
                    <div className="text-sm text-gray-400">Active Disputes</div>
                </Card>
                <Card className="p-6">
                    <Users className="w-8 h-8 text-purple-400 mb-3" />
                    <div className="text-2xl font-black mb-1">1,379</div>
                    <div className="text-sm text-gray-400">Total Voters</div>
                </Card>
                <Card className="p-6">
                    <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                    <div className="text-2xl font-black mb-1">$211K</div>
                    <div className="text-sm text-gray-400">Staked in Votes</div>
                </Card>
                <Card className="p-6">
                    <CheckCircle className="w-8 h-8 text-nexus-accent mb-3" />
                    <div className="text-2xl font-black mb-1">94.2%</div>
                    <div className="text-sm text-gray-400">Resolution Accuracy</div>
                </Card>
            </div>

            {/* How It Works */}
            <Card className="p-8 bg-nexus-primary/5 border-nexus-primary/30">
                <h3 className="text-2xl font-bold mb-6">How DAO Voting Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <div className="w-10 h-10 rounded-full bg-nexus-primary/20 text-nexus-primary font-bold flex items-center justify-center mb-3">1</div>
                        <h4 className="font-semibold mb-2">Stake to Vote</h4>
                        <p className="text-sm text-gray-400">Lock tokens to participate. Higher stake = more voting power.</p>
                    </div>
                    <div>
                        <div className="w-10 h-10 rounded-full bg-nexus-primary/20 text-nexus-primary font-bold flex items-center justify-center mb-3">2</div>
                        <h4 className="font-semibold mb-2">Cast Your Vote</h4>
                        <p className="text-sm text-gray-400">Choose YES or NO based on verifiable evidence.</p>
                    </div>
                    <div>
                        <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 font-bold flex items-center justify-center mb-3">✓</div>
                        <h4 className="font-semibold mb-2">Earn or Lose</h4>
                        <p className="text-sm text-gray-400">Correct voters earn rewards. Wrong voters lose stake.</p>
                    </div>
                </div>
            </Card>

            {/* Active Disputes */}
            <div>
                <h3 className="text-2xl font-bold mb-6">Active Disputes</h3>
                <div className="space-y-6">
                    {disputes.map((dispute, index) => (
                        <motion.div
                            key={dispute.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="p-6">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{dispute.market}</h4>
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <span>Staked: {dispute.totalStaked}</span>
                                            <span>•</span>
                                            <span>Ends in: {dispute.deadline}</span>
                                        </div>
                                    </div>
                                    <div className="px-3 py-1.5 rounded-lg bg-orange-500/20 text-orange-400 text-sm font-semibold">
                                        Voting Open
                                    </div>
                                </div>

                                {/* Voting Progress */}
                                <div className="mb-6">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-green-400 font-semibold">YES: {dispute.yesVotes}</span>
                                        <span className="text-red-400 font-semibold">NO: {dispute.noVotes}</span>
                                    </div>
                                    <div className="h-3 rounded-full bg-gray-800 overflow-hidden flex">
                                        <div
                                            className="bg-green-500"
                                            style={{ width: `${(dispute.yesVotes / (dispute.yesVotes + dispute.noVotes)) * 100}%` }}
                                        />
                                        <div
                                            className="bg-red-500"
                                            style={{ width: `${(dispute.noVotes / (dispute.yesVotes + dispute.noVotes)) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Vote Buttons */}
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setSelectedOption('yes')}
                                        className="flex-1 py-3 rounded-xl bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all font-semibold"
                                    >
                                        Vote YES
                                    </button>
                                    <button
                                        onClick={() => setSelectedOption('no')}
                                        className="flex-1 py-3 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all font-semibold"
                                    >
                                        Vote NO
                                    </button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Resolution History */}
            <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Resolution History</h3>
                <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center justify-between p-4 glass rounded-xl">
                            <div>
                                <div className="font-semibold mb-1">Example Market {item}</div>
                                <div className="text-sm text-gray-400">Resolved 2 days ago</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-green-500 font-semibold">YES Won</span>
                                <CheckCircle className="w-5 h-5 text-green-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
