'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Brain, TrendingUp, Zap, RefreshCw } from 'lucide-react';

const mockScenarios = [
    { condition: 'FED rate cut', probability: 85, impact: '+15%' },
    { condition: 'ETF approval', probability: 78, impact: '+12%' },
    { condition: 'Altseason begins', probability: 62, impact: '+8%' },
    { condition: 'Major hack event', probability: 15, impact: '-25%' },
];

export default function SimulatorPage() {
    const [running, setRunning] = useState(false);
    const [selectedMarket, setSelectedMarket] = useState('BTC hits $100K by Dec 2025?');

    const runSimulation = () => {
        setRunning(true);
        setTimeout(() => setRunning(false), 2000);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-4xl font-black mb-4">
                    <span className="gradient-text">AI Foresight Simulator</span> 🤖
                </h2>
                <p className="text-gray-400 text-lg">
                    Test "what-if" scenarios with Opinion AI and optimize your winning chances
                </p>
            </motion.div>

            {/* How It Works */}
            <Card className="p-8 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-purple-500/30">
                <Brain className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">How AI Simulation Works?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div>
                        <div className="font-semibold mb-1">1. Data Analysis</div>
                        <div className="text-sm text-gray-400">Opinion AI analyzes historical data and trends</div>
                    </div>
                    <div>
                        <div className="font-semibold mb-1">2. Probability Calculation</div>
                        <div className="text-sm text-gray-400">Outcome probability calculated under different conditions</div>
                    </div>
                    <div>
                        <div className="font-semibold mb-1">3. Action Recommendation</div>
                        <div className="text-sm text-gray-400">Optimal entry/exit points and stake amount</div>
                    </div>
                </div>
            </Card>

            {/* Simulator */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Market Selection */}
                <Card className="p-8">
                    <h3 className="text-xl font-bold mb-4">Select Market</h3>
                    <div className="space-y-3 mb-6">
                        {['BTC hits $100K by Dec 2025?', 'ETH ETF approved?', 'AI tokens pump 200%+?'].map((market) => (
                            <button
                                key={market}
                                onClick={() => setSelectedMarket(market)}
                                className={`w-full text-left p-4 rounded-xl transition-all ${selectedMarket === market ? 'bg-nexus-gradient' : 'glass hover:bg-white/10'
                                    }`}
                            >
                                {market}
                            </button>
                        ))}
                    </div>
                    <button className="text-nexus-primary hover:text-nexus-secondary transition-colors font-semibold">
                        Change
                    </button>
                </Card>

                {/* Right: Run Simulation */}
                <Card className="p-8">
                    <h3 className="text-xl font-bold mb-4">Run Simulation</h3>
                    <p className="text-gray-400 mb-6">Test market outcome under different scenarios</p>
                    <button
                        onClick={runSimulation}
                        disabled={running}
                        className="btn-primary w-full py-4 flex items-center justify-center gap-2"
                    >
                        <RefreshCw className={`w-5 h-5 ${running ? 'animate-spin' : ''}`} />
                        <span>{running ? 'Simulating...' : 'Start Simulation'}</span>
                    </button>
                </Card>
            </div>

            {/* Results */}
            {!running && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <Card className="p-8">
                        <h3 className="text-2xl font-bold mb-6">Scenario Analysis</h3>
                        <div className="space-y-4 mb-8">
                            {mockScenarios.map((scenario, index) => (
                                <div key={index} className="flex items-center justify-between p-4 glass rounded-xl">
                                    <div>
                                        <div className="font-semibold">{scenario.condition}</div>
                                        <div className="text-sm text-gray-400">
                                            Probability: <span className="font-semibold text-white">{scenario.probability}%</span>
                                        </div>
                                    </div>
                                    <div className={`font-bold text-lg ${scenario.impact.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                        {scenario.impact}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Overall Probability */}
                        <div className="mb-8">
                            <div className="flex justify-between text-sm mb-2">
                                <span>Low</span>
                                <span>High</span>
                            </div>
                            <div className="h-4 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 relative">
                                <div className="absolute top-1/2 -translate-y-1/2 left-[78%] w-4 h-4 rounded-full bg-white border-2 border-nexus-dark"></div>
                            </div>
                            <div className="text-center mt-3">
                                <div className="text-sm text-gray-400">Overall Win Probability</div>
                                <div className="text-3xl font-black gradient-text">78.3%</div>
                            </div>
                        </div>

                        {/* AI Recommendation */}
                        <Card className="p-6 bg-green-500/10 border-green-500/30">
                            <h3 className="text-2xl font-bold mb-3 text-green-400">AI Recommendation</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <Zap className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-semibold">Suggested Stake:</span> 500-1000 USDT
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-semibold">Win Probability:</span> <span className="text-green-400 font-bold">78.3%</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-4 p-4 glass rounded-lg">
                                <div className="text-sm text-gray-300">
                                    💡 <span className="font-semibold">Insight:</span> FED rate cut and ETF approval combination could cause a BTC rally with 85%+ probability. Take an early position.
                                </div>
                            </div>
                        </Card>

                        {/* Disclaimer */}
                        <div className="mt-6 p-4 glass rounded-xl text-sm text-gray-400 text-center">
                            <span className="font-semibold">Note:</span> AI simulations are prediction tools, 100% accuracy not guaranteed.
                            If simulation is correct, you earn <span className="text-nexus-accent font-semibold">bonus yield</span> and
                            <span className="text-purple-400 font-semibold"> "Visionary Simulator"</span> badge!
                        </div>
                    </Card>
                </motion.div>
            )}
        </div>
    );
}
