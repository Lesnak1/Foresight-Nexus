'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { TrendingUp, TrendingDown, Zap, Target, Award, Share2, Sparkles, Bot } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data
const portfolioData = [
    { date: '1 Dec', value: 1200 },
    { date: '2 Dec', value: 1350 },
    { date: '3 Dec', value: 1280 },
    { date: '4 Dec', value: 1520 },
    { date: '5 Dec', value: 1680 },
    { date: '6 Dec', value: 1840 },
    { date: '7 Dec', value: 2100 },
];

const activeNodes = [
    { id: 1, title: 'BTC $100K Aralık 2025?', odds: 68, volume: '$342K', status: 'winning' },
    { id: 2, title: 'ETH ETF Onaylanacak mı?', odds: 42, volume: '$187K', status: 'losing' },
    { id: 3, title: 'Trump 2024 seçimlerini kazanır mı?', odds: 55, volume: '$1.2M', status: 'neutral' },
];

export default function DashboardPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-3xl font-black mb-2">Hoş Geldin, <span className="gradient-text">Tahmin Ustası</span> 🔮</h2>
                <p className="text-gray-400">Portfolio'nun harika görünüyor! İşte bugünün özeti:</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Card className="relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-nexus-primary/20 blur-3xl rounded-full" />
                        <div className="relative">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-gray-400 font-medium">Net Değer</span>
                                <div className="w-10 h-10 rounded-xl bg-nexus-gradient/20 flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-nexus-primary" />
                                </div>
                            </div>
                            <div className="text-3xl font-black mb-2">${(2100).toLocaleString()}</div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-green-500 font-semibold">+28.4%</span>
                                <span className="text-gray-500">bu hafta</span>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Card>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 font-medium">Aktif Pozisyonlar</span>
                            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                <Target className="w-5 h-5 text-purple-400" />
                            </div>
                        </div>
                        <div className="text-3xl font-black mb-2">12</div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <span>8 winning • 4 pending</span>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Card>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 font-medium">Win Rate</span>
                            <div className="w-10 h-10 rounded-xl bg-nexus-accent/20 flex items-center justify-center">
                                <Award className="w-5 h-5 text-nexus-accent" />
                            </div>
                        </div>
                        <div className="text-3xl font-black mb-2">72.5%</div>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="text-nexus-accent font-semibold">Top 15%</span>
                            <span className="text-gray-500">globally</span>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Card>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 font-medium">Reputation</span>
                            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                                <Zap className="w-5 h-5 text-orange-400" />
                            </div>
                        </div>
                        <div className="text-3xl font-black mb-2">847</div>
                        <div className="text-sm text-gray-400">Level 12 • Visionary</div>
                    </Card>
                </motion.div>
            </div>

            {/* Portfolio Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <Card className="p-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Portfolio Performansı</h3>
                            <p className="text-gray-400">Son 7 günlük değer grafiği</p>
                        </div>
                        <div className="px-4 py-2 rounded-xl glass">
                            <span className="text-green-500 font-semibold">+$900</span>
                        </div>
                    </div>

                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={portfolioData}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#9D4EDD" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="date"
                                stroke="#666"
                                style={{ fontSize: '12px' }}
                            />
                            <YAxis
                                stroke="#666"
                                style={{ fontSize: '12px' }}
                            />
                            <Tooltip
                                contentStyle={{
                                    background: 'rgba(0,0,0,0.8)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '12px',
                                    color: 'white'
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="#FF6B35"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorValue)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </Card>
            </motion.div>

            {/* Active Nexus Nodes */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">Aktif Nexus Node'larım</h3>
                    <button className="text-nexus-primary hover:text-nexus-secondary transition-colors font-semibold">
                        Tümünü Gör →
                    </button>
                </div>

                <div className="space-y-4">
                    {activeNodes.map((node, index) => (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                        >
                            <Card hover className="flex items-center justify-between p-6">
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-2">{node.title}</h4>
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        <span>Hacim: {node.volume}</span>
                                        <span>•</span>
                                        <span>Şans: %{node.odds}</span>
                                    </div>
                                </div>

                                <div className="text-right">
                                    {node.status === 'winning' && (
                                        <div className="flex items-center gap-2 text-green-500 font-semibold mb-2">
                                            <TrendingUp className="w-5 h-5" />
                                            <span>Kazanıyor</span>
                                        </div>
                                    )}
                                    {node.status === 'losing' && (
                                        <div className="flex items-center gap-2 text-red-500 font-semibold mb-2">
                                            <TrendingDown className="w-5 h-5" />
                                            <span>Kaybediyor</span>
                                        </div>
                                    )}
                                    {node.status === 'neutral' && (
                                        <div className="text-gray-400 font-semibold mb-2">Beklemede</div>
                                    )}
                                    <button className="glass px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all flex items-center gap-2">
                                        <Share2 className="w-4 h-4" />
                                        Paylaş
                                    </button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
            >
                <Card className="p-8 bg-nexus-gradient/10 border-2 border-nexus-primary/30">
                    <h3 className="text-2xl font-bold mb-4">💡 Hızlı Aksiyonlar</h3>
                    <p className="text-gray-300 mb-6">Bugünün fırsatını kaçırma!</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button className="glass p-4 rounded-xl hover:bg-white/10 transition-all text-left">
                            <Sparkles className="w-6 h-6 text-nexus-primary mb-2" />
                            <div className="font-semibold">Yeni Nexus Yarat</div>
                            <div className="text-sm text-gray-400">İlk tahminini tokenize et</div>
                        </button>
                        <button className="glass p-4 rounded-xl hover:bg-white/10 transition-all text-left">
                            <Bot className="w-6 h-6 text-purple-400 mb-2" />
                            <div className="font-semibold">AI Simülasyonu</div>
                            <div className="text-sm text-gray-400">What-if senaryoları test et</div>
                        </button>
                        <button className="glass p-4 rounded-xl hover:bg-white/10 transition-all text-left">
                            <Share2 className="w-6 h-6 text-nexus-accent mb-2" />
                            <div className="font-semibold">Arkadaş Davet Et</div>
                            <div className="text-sm text-gray-400">%10 referral bonus kazan</div>
                        </button>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
}
