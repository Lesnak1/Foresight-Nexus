'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Bot, TrendingUp, TrendingDown, Zap, Target, Play } from 'lucide-react';
import { useState } from 'react';

const scenarios = [
    {
        id: 1,
        market: 'Bitcoin $100K Aralık 2025?',
        currentOdds: 68,
        scenarios: [
            { condition: 'FED faiz indirimi', probability: 85, impact: '+17%' },
            { condition: 'ETF onayı', probability: 78, impact: '+12%' },
            { condition: 'Altseason başlangıcı', probability: 62, impact: '+8%' },
            { condition: 'Büyük hack olayı', probability: 15, impact: '-25%' },
        ],
    },
];

export default function SimulatorPage() {
    const [selectedMarket, setSelectedMarket] = useState(scenarios[0]);
    const [running, setRunning] = useState(false);

    const runSimulation = () => {
        setRunning(true);
        setTimeout(() => setRunning(false), 2000);
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-4xl font-black mb-3">
                    <span className="gradient-text">AI Foresight Simulator</span> 🤖
                </h2>
                <p className="text-xl text-gray-400">
                    Opinion AI ile "what-if" senaryoları test edin ve kazanma şansınızı optimize edin
                </p>
            </motion.div>

            {/* How It Works */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Card className="p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/30">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">AI Simülasyon Nasıl Çalışır?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                                <div>
                                    <div className="text-3xl mb-2">📊</div>
                                    <div className="font-semibold mb-1">Veri Analizi</div>
                                    <div className="text-sm">Opinion AI, geçmiş verileri ve trend'leri analiz eder</div>
                                </div>
                                <div>
                                    <div className="text-3xl mb-2">🔮</div>
                                    <div className="font-semibold mb-1">Senaryo Testi</div>
                                    <div className="text-sm">Farklı koşullar altında outcome probability hesaplanır</div>
                                </div>
                                <div>
                                    <div className="text-3xl mb-2">🎯</div>
                                    <div className="font-semibold mb-1">Aksiyon Önerisi</div>
                                    <div className="text-sm">Optimal entry/exit point'ler ve stake miktarı</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Market Selection */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <Card className="p-6">
                    <h3 className="text-xl font-bold mb-4">Market Seç</h3>
                    <div className="glass p-4 rounded-xl flex items-center justify-between">
                        <div>
                            <h4 className="font-semibold mb-1">{selectedMarket.market}</h4>
                            <div className="text-sm text-gray-400">
                                Current Odds: <span className="text-nexus-accent font-semibold">{selectedMarket.currentOdds}%</span>
                            </div>
                        </div>
                        <Button variant="secondary" size="sm">
                            Değiştir
                        </Button>
                    </div>
                </Card>
            </motion.div>

            {/* Scenario Analysis */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <Card className="p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold">Senaryo Analizi</h3>
                        <Button
                            onClick={runSimulation}
                            variant="primary"
                            className={running ? 'animate-pulse' : ''}
                        >
                            <Play className="w-5 h-5" />
                            <span>{running ? 'Simüle Ediliyor...' : 'Simülasyon Başlat'}</span>
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {selectedMarket.scenarios.map((scenario, index) => (
                            <motion.div
                                key={scenario.condition}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="glass p-6 rounded-xl"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">{scenario.condition}</h4>
                                        <div className="flex items-center gap-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Target className="w-4 h-4 text-nexus-accent" />
                                                <span className="text-gray-400">
                                                    Olasılık: <span className="font-semibold text-white">{scenario.probability}%</span>
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {scenario.impact.startsWith('+') ? (
                                                    <TrendingUp className="w-4 h-4 text-green-500" />
                                                ) : (
                                                    <TrendingDown className="w-4 h-4 text-red-500" />
                                                )}
                                                <span className={`font-semibold ${scenario.impact.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                                    {scenario.impact}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Probability Bar */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>Düşük</span>
                                        <span>Yüksek</span>
                                    </div>
                                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: running ? `${scenario.probability}%` : 0 }}
                                            transition={{ duration: 1.5, ease: 'easeOut' }}
                                            className={`h-full ${scenario.probability > 70
                                                    ? 'bg-gradient-to-r from-green-500 to-nexus-accent'
                                                    : scenario.probability > 40
                                                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                                                        : 'bg-gradient-to-r from-red-500 to-red-600'
                                                }`}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Card>
            </motion.div>

            {/* AI Recommendation */}
            {running && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <Card className="p-8 bg-gradient-to-r from-green-500/10 to-nexus-accent/10 border-2 border-green-500/30">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                                <Zap className="w-6 h-6 text-green-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3 text-green-400">AI Önerisi</h3>
                                <div className="space-y-3 text-gray-300">
                                    <div>
                                        <span className="font-semibold">Optimal Strateji:</span> BUY EVET pozisyonu
                                    </div>
                                    <div>
                                        <span className="font-semibold">Önerilen Stake:</span> 500-1000 USDT
                                    </div>
                                    <div>
                                        <span className="font-semibold">Kazanma İhtimali:</span> <span className="text-green-400 font-bold">78.3%</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold">Beklenen ROI:</span> <span className="text-nexus-accent font-bold">+42%</span>
                                    </div>
                                    <div className="pt-4 border-t border-white/10">
                                        <p className="text-sm text-gray-400">
                                            💡 <span className="font-semibold">Insight:</span> FED faiz indirimi ve ETF onayı kombinasyonu %85+ olasılık ile BTC rally'sine sebep olabilir. Erken pozisyon alın.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            )}

            {/* Educational Note */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <Card className="p-6 glass border-2 border-yellow-500/30">
                    <div className="flex items-start gap-3">
                        <div className="text-2xl">⚠️</div>
                        <div className="text-sm text-gray-300">
                            <span className="font-semibold">Not:</span> AI simülasyonları tahmin aracıdır, %100 doğruluk garanti edilmez.
                            Simülasyon doğru çıkarsa <span className="text-nexus-accent font-semibold">bonus yield</span> ve
                            <span className="text-purple-400 font-semibold"> "Visionary Simulator"</span> badge kazanırsınız!
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
}
