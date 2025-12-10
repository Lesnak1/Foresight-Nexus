'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Search, TrendingUp, Clock, Filter } from 'lucide-react';

// Mock market data
const markets = [
    {
        id: 1,
        title: 'Will Bitcoin reach $100K by December 2025?',
        category: 'Crypto',
        odds: 68,
        volume: '$2.34M',
        participants: 1247,
        deadline: '2025-12-31',
        status: 'active',
    },
    {
        id: 2,
        title: 'Will Ethereum ETF get approved in 2025?',
        category: 'Crypto',
        odds: 58,
        volume: '$892K',
        participants: 534,
        deadline: '2025-12-31',
        status: 'active',
    },
    {
        id: 3,
        title: 'Will Real Madrid win Champions League 2025?',
        category: 'Sports',
        odds: 42,
        volume: '$1.12M',
        participants: 892,
        deadline: '2025-06-01',
        status: 'active',
    },
    {
        id: 4,
        title: 'Will AI tokens pump 200%+ in Q1 2025?',
        category: 'Crypto',
        odds: 55,
        volume: '$654K',
        participants: 423,
        deadline: '2025-03-31',
        status: 'active',
    },
    {
        id: 5,
        title: 'Will Apple Vision Pro sales exceed 1M units?',
        category: 'Tech',
        odds: 38,
        volume: '$342K',
        participants: 289,
        deadline: '2025-12-31',
        status: 'active',
    },
];

const categories = ['All', 'Crypto', 'Sports', 'Tech', 'Politics', 'Entertainment'];
const filters = ['Trending', 'New', 'High Volume', 'Ending Soon'];

export default function ExplorePage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedFilter, setSelectedFilter] = useState('Trending');

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-4xl font-black mb-4">
                    <span className="gradient-text">Explore</span> 🌐
                </h2>
                <p className="text-gray-400 text-lg">
                    Discover active prediction markets and take positions
                </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
            >
                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search predictions... (e.g: Bitcoin, Trump, Real Madrid)"
                        className="w-full pl-12 pr-4 py-4 rounded-xl glass border border-white/10 focus:border-nexus-primary outline-none transition-all"
                    />
                </div>

                {/* Category Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${selectedCategory === cat
                                    ? 'bg-nexus-gradient text-white'
                                    : 'glass hover:bg-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-gray-400" />
                    <div className="flex gap-2 overflow-x-auto">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setSelectedFilter(filter)}
                                className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${selectedFilter === filter
                                        ? 'bg-white/20 text-white'
                                        : 'glass hover:bg-white/10 text-gray-400'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Markets Grid */}
            <div className="grid grid-cols-1 gap-6">
                {markets.map((market, index) => (
                    <motion.div
                        key={market.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                    >
                        <Card hover className="p-6">
                            <div className="flex items-start justify-between gap-6">
                                {/* Left: Market Info */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-2 py-1 rounded-md glass text-xs font-semibold">
                                            {market.category}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-500">
                                            <Clock className="w-3 h-3" />
                                            {market.deadline}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{market.title}</h3>
                                    <div className="flex items-center gap-6 text-sm text-gray-400">
                                        <span>Volume: {market.volume}</span>
                                        <span>•</span>
                                        <span>{market.participants} participants</span>
                                    </div>
                                </div>

                                {/* Right: Trading */}
                                <div className="flex flex-col items-end gap-4">
                                    <div className="text-right">
                                        <div className="text-sm text-gray-400 mb-1">Odds</div>
                                        <div className="text-3xl font-black gradient-text">{market.odds}%</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-6 py-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all font-semibold">
                                            YES
                                        </button>
                                        <button className="px-6 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all font-semibold">
                                            NO
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Load More */}
            <div className="text-center pt-8">
                <button className="btn-primary px-8 py-3">
                    Load More
                </button>
            </div>
        </div>
    );
}
