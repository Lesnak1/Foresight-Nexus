'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Clock, DollarSign, Users, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { calculateOdds, formatNumber } from '@/lib/utils';

const mockMarkets = [
    {
        id: 1,
        title: 'Bitcoin $100K\'ya Aralık 2025\'te ulaşır mı?',
        category: 'crypto',
        yesShares: 68000,
        noShares: 32000,
        volume: 2340000,
        participants: 1247,
        endDate: '2025-12-31',
        creator: '0x742d...3f4a',
        trending: true,
    },
    {
        id: 2,
        title: 'Ethereum ETF 2025\'te onaylanır mı?',
        category: 'crypto',
        yesShares: 45000,
        noShares: 55000,
        volume: 890000,
        participants: 743,
        endDate: '2025-06-30',
        creator: '0x8a2b...7c1d',
        trending: false,
    },
    {
        id: 3,
        title: 'Real Madrid 2025 Champions League kazanır mı?',
        category: 'sports',
        yesShares: 52000,
        noShares: 48000,
        volume: 1560000,
        participants: 2104,
        endDate: '2025-05-31',
        creator: '0x4f3e...9a2b',
        trending: true,
    },
    {
        id: 4,
        title: 'AI coinleri 2025 Q1\'de %200+ yapar mı?',
        category: 'crypto',
        yesShares: 75000,
        noShares: 25000,
        volume: 3200000,
        participants: 1876,
        endDate: '2025-03-31',
        creator: '0x9d1c...4b8f',
        trending: true,
    },
    {
        id: 5,
        title: 'Apple Vision Pro satışları 1M\'u geçer mi?',
        category: 'tech',
        yesShares: 38000,
        noShares: 62000,
        volume: 720000,
        participants: 542,
        endDate: '2025-12-31',
        creator: '0x2e7a...6f3c',
        trending: false,
    },
];

const categories = ['Tümü', 'Kripto', 'Spor', 'Teknoloji', 'Politika', 'Eğlence'];
const filters = ['Trending', 'Yeni', 'Yüksek Hacim', 'Bitiyor'];

export default function ExplorePage() {
    const [selectedCategory, setSelectedCategory] = useState('Tümü');
    const [selectedFilter, setSelectedFilter] = useState('Trending');
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-4xl font-black mb-3">
                    <span className="gradient-text">Keşfet</span> 🌐
                </h2>
                <p className="text-xl text-gray-400">
                    Aktif tahmin piyasalarını keşfet ve pozisyon al
                </p>
            </motion.div>

            {/* Search & Filters */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-4"
            >
                {/* Search Bar */}
                <Card className="p-4">
                    <div className="flex items-center gap-3">
                        <Search className="w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Tahmin ara... (örn: Bitcoin, Trump, Real Madrid)"
                            className="flex-1 bg-transparent border-none focus:outline-none text-white placeholder:text-gray-500"
                        />
                    </div>
                </Card>

                {/* Category Tags */}
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all ${selectedCategory === category
                                    ? 'bg-nexus-gradient text-white'
                                    : 'glass hover:bg-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-3 overflow-x-auto pb-2">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${selectedFilter === filter
                                    ? 'glass border-2 border-nexus-primary text-nexus-primary'
                                    : 'glass hover:bg-white/5'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Markets Grid */}
            <div className="space-y-4">
                {mockMarkets.map((market, index) => {
                    const odds = calculateOdds(market.yesShares, market.noShares);

                    return (
                        <motion.div
                            key={market.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.05 }}
                        >
                            <Card hover className="p-6">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                    {/* Market Info */}
                                    <div className="flex-1">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div>
                                                {market.trending && (
                                                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-nexus-accent/20 text-nexus-accent text-xs font-semibold mb-2">
                                                        <TrendingUp className="w-3 h-3" />
                                                        Trending
                                                    </span>
                                                )}
                                                <h3 className="text-xl font-bold mb-2 hover:text-nexus-primary transition-colors cursor-pointer">
                                                    {market.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                                                    <span className="flex items-center gap-1">
                                                        <Users className="w-4 h-4" />
                                                        {formatNumber(market.participants)} katılımcı
                                                    </span>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1">
                                                        <DollarSign className="w-4 h-4" />
                                                        ${formatNumber(market.volume)} hacim
                                                    </span>
                                                    <span>•</span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        {new Date(market.endDate).toLocaleDateString('tr-TR')}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Odds & Actions */}
                                    <div className="flex items-center gap-4">
                                        {/* Current Odds */}
                                        <div className="text-center">
                                            <div className="text-sm text-gray-400 mb-1">Şans</div>
                                            <div className="text-3xl font-black gradient-text">
                                                %{odds.toFixed(0)}
                                            </div>
                                            <div className="text-xs text-gray-500">EVET</div>
                                        </div>

                                        {/* Quick Trade Buttons */}
                                        <div className="flex flex-col gap-2">
                                            <button className="px-6 py-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400 font-semibold transition-all">
                                                EVET Al
                                            </button>
                                            <button className="px-6 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 font-semibold transition-all">
                                                HAYIR Al
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mt-4">
                                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-green-500 to-nexus-accent transition-all duration-500"
                                            style={{ width: `${odds}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between mt-1 text-xs text-gray-500">
                                        <span>%{odds.toFixed(1)} EVET</span>
                                        <span>%{(100 - odds).toFixed(1)} HAYIR</span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>

            {/* Load More */}
            <div className="text-center">
                <button className="glass px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
                    Daha Fazla Yükle
                </button>
            </div>
        </div>
    );
}
