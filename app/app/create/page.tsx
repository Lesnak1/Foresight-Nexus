'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Sparkles, Calendar, TrendingUp, AlertCircle, Hash } from 'lucide-react';
import { useState } from 'react';

export default function CreatePage() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'crypto',
        endDate: '',
        outcomes: ['Evet', 'Hayır'],
    });

    const [tweetUrl, setTweetUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Creating Nexus Node:', formData);
        // TODO: Implement actual creation logic
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-4xl font-black mb-3">
                    <span className="gradient-text">Nexus Node</span> Yarat 🔮
                </h2>
                <p className="text-xl text-gray-400">
                    Tahmininizi tokenize edin, viral yapın ve toplulukla kazanın
                </p>
            </motion.div>

            {/* AI Suggestion Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <Card className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">AI Önerisi: Trend Tahminler</h3>
                            <p className="text-gray-300 mb-4">
                                Yapay zeka, bu hafta en popüler tahmin konularını analiz etti:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['BTC $100K', 'ETH ETF Onayı', 'AI Coin Season', 'Altcoin Rally'].map((topic) => (
                                    <button
                                        key={topic}
                                        className="px-4 py-2 rounded-lg glass hover:bg-white/10 transition-all text-sm font-medium"
                                    >
                                        {topic}
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
                transition={{ delay: 0.3 }}
            >
                <Card className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Hash className="w-6 h-6 text-nexus-accent" />
                        <h3 className="text-xl font-bold">Tweet'ten İçe Aktar</h3>
                    </div>
                    <p className="text-gray-400 mb-4">
                        Bir X (Twitter) URL'si yapıştırın, otomatik olarak tahmin oluşturalım
                    </p>
                    <div className="flex gap-3">
                        <input
                            type="text"
                            value={tweetUrl}
                            onChange={(e) => setTweetUrl(e.target.value)}
                            placeholder="https://twitter.com/..."
                            className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-nexus-primary focus:outline-none transition-all"
                        />
                        <Button variant="secondary">
                            Analiz Et
                        </Button>
                    </div>
                </Card>
            </motion.div>

            {/* Creation Form */}
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <Card className="p-8 space-y-6">
                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Tahmin Başlığı *
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="Örn: Bitcoin 2025'te $100K'ya ulaşacak mı?"
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-nexus-primary focus:outline-none transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">
                            Detaylı Açıklama
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Tahmininiz hakkında detaylar, kaynak vb..."
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-nexus-primary focus:outline-none transition-all resize-none"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4" />
                                Kategori
                            </label>
                            <select
                                value={formData.category}
                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-nexus-primary focus:outline-none transition-all"
                            >
                                <option value="crypto">Kripto</option>
                                <option value="sports">Spor</option>
                                <option value="politics">Politika</option>
                                <option value="entertainment">Eğlence</option>
                                <option value="tech">Teknoloji</option>
                                <option value="other">Diğer</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Bitiş Tarihi
                            </label>
                            <input
                                type="date"
                                value={formData.endDate}
                                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-nexus-primary focus:outline-none transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="glass p-4 rounded-xl">
                        <div className="flex items-start gap-2">
                            <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                            <div className="text-sm text-gray-300">
                                <span className="font-semibold">Minimum Likidite:</span> 100 USDT gereklidir.
                                Gas fee: ~0.002 BNB
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button type="submit" className="flex-1" size="lg">
                            <Sparkles className="w-5 h-5" />
                            <span>Nexus Node Yarat</span>
                        </Button>
                        <Button type="button" variant="secondary" size="lg">
                            Önizle
                        </Button>
                    </div>
                </Card>
            </motion.form>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-6 text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="font-semibold mb-1">Fair Oracle</div>
                    <div className="text-sm text-gray-400">DAO community resolution</div>
                </Card>
                <Card className="p-6 text-center">
                    <div className="text-3xl mb-2">💎</div>
                    <div className="font-semibold mb-1">Viral Bonus</div>
                    <div className="text-sm text-gray-400">Share kazancı +points</div>
                </Card>
                <Card className="p-6 text-center">
                    <div className="text-3xl mb-2">🚀</div>
                    <div className="font-semibold mb-1">Instant Listing</div>
                    <div className="text-sm text-gray-400">CLOB'da anında trade</div>
                </Card>
            </div>
        </div>
    );
}
