'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Sparkles, Twitter, Brain, Calendar, DollarSign, Users } from 'lucide-react';

export default function CreatePage() {
    const [title, setTitle] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Crypto');

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-4xl font-black mb-4">
                    Create <span className="gradient-text">Nexus Node</span> 🔮
                </h2>
                <p className="text-gray-400 text-lg">
                    Tokenize your prediction, make it viral, and earn with the community
                </p>
            </motion.div>

            {/* AI Suggestions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Card className="p-6 bg-nexus-gradient/10 border-nexus-primary/30">
                    <div className="flex items-start gap-4">
                        <Brain className="w-8 h-8 text-nexus-primary flex-shrink-0" />
                        <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2">AI Suggestion: Trending Predictions</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {aiSuggestions.map((suggestion, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setTitle(suggestion)}
                                        className="text-left p-3 glass rounded-lg hover:bg-white/10 transition-all"
                                    >
                                        <div className="text-sm text-white font-medium">{suggestion}</div>
                                        <div className="text-xs text-gray-400 mt-1">Click to use</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Twitter Import */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <Card className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Twitter className="w-6 h-6 text-blue-400" />
                            <div>
                                <h3 className="font-bold">Import from Twitter</h3>
                                <p className="text-sm text-gray-400">Create market from trending tweets</p>
                            </div>
                        </div>
                        <button className="btn-primary">
                            Connect
                        </button>
                    </div>
                </Card>
            </motion.div>

            {/* Create Form */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <Card className="p-8">
                    <form className="space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Prediction Title *
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="E.g: Bitcoin hits $100K by December 2025?"
                                className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-nexus-primary outline-none transition-all"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Category
                            </label>
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        type="button"
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-lg transition-all ${selectedCategory === cat
                                                ? 'bg-nexus-gradient text-white'
                                                : 'glass hover:bg-white/10'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Description
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Details about your prediction, sources, etc..."
                                className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-nexus-primary outline-none transition-all resize-none"
                            />
                        </div>

                        {/* Deadline */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Resolution Deadline
                            </label>
                            <input
                                type="date"
                                className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-nexus-primary outline-none transition-all"
                            />
                        </div>

                        {/* Initial Liquidity */}
                        <div>
                            <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                                <DollarSign className="w-4 h-4" />
                                Initial Liquidity (Optional)
                            </label>
                            <input
                                type="number"
                                placeholder="Min: $10 USDT"
                                className="w-full px-4 py-3 rounded-xl glass border border-white/10 focus:border-nexus-primary outline-none transition-all"
                            />
                            <p className="text-xs text-gray-500 mt-2">
                                Higher liquidity = better odds accuracy
                            </p>
                        </div>

                        {/* Create Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2"
                            >
                                <Sparkles className="w-5 h-5" />
                                Create Nexus Node
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-3">
                                Gas fee: ~$0.20 • You'll receive creator bonuses when it goes viral
                            </p>
                        </div>
                    </form>
                </Card>
            </motion.div>
        </div>
    );
}

const aiSuggestions = [
    'BTC hits $100K by Dec 2025?',
    'Ethereum ETF approved in 2025?',
    'AI tokens pump 200%+ in Q1?',
    'Real Madrid wins Champions League?',
];

const categories = ['Crypto', 'Sports', 'Politics', 'Tech', 'Entertainment', 'Finance'];
