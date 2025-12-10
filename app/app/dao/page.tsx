'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Scale, AlertTriangle, CheckCircle, XCircle, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const activeDisputes = [
    {
        id: 1,
        title: 'Trump Texas seçimlerini kazandı mı?',
        proposedOutcome: 'EVET',
        challenger: '0x742d...3f4a',
        evidence: 'Resmi sonuçlar henüz açıklanmadı, erken çalıştırma.',
        votesYes: 342,
        votesNo: 128,
        totalStaked: 15000,
        deadline: '2025-12-15',
    },
    {
        id: 2,
        title: 'BTC $95K\'yı 1 Aralık\'ta geçti mi?',
        proposedOutcome: 'HAYIR',
        challenger: '0x8a2b...7c1d',
        evidence: 'CoinGecko verilerine göre $96,240 peak vardı.',
        votesYes: 567,
        votesNo: 234,
        totalStaked: 28500,
        deadline: '2025-12-12',
    },
];

const resolvedDisputes = [
    {
        id: 3,
        title: 'Ethereum $4K Kasım\'da?',
        outcome: 'EVET',
        accuracy: 94,
        date: '2025-12-01',
    },
    {
        id: 4,
        title: 'Real Madrid Barcelona\'yı yendi mi?',
        outcome: 'HAYIR',
        accuracy: 100,
        date: '2025-11-28',
    },
];

export default function DAOPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-4xl font-black mb-3">
                    <span className="gradient-text">DAO Resolution Hub</span> ⚖️
                </h2>
                <p className="text-xl text-gray-400">
                    Topluluk yönetimi ile adil çözümleme sistemi
                </p>
            </motion.div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Card className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 font-medium">Voting Power</span>
                            <Zap className="w-8 h-8 text-nexus-accent" />
                        </div>
                        <div className="text-3xl font-black mb-2">847</div>
                        <div className="text-sm text-gray-400">Staked tokens + reputation</div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 font-medium">Vote Accuracy</span>
                            <CheckCircle className="w-8 h-8 text-green-500" />
                        </div>
                        <div className="text-3xl font-black mb-2">89%</div>
                        <div className="text-sm text-gray-400">32/36 doğru vote</div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Card className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-400 font-medium">Aktif Disputeler</span>
                            <AlertTriangle className="w-8 h-8 text-orange-500" />
                        </div>
                        <div className="text-3xl font-black mb-2">{activeDisputes.length}</div>
                        <div className="text-sm text-gray-400">Oyunuz bekleniyor</div>
                    </Card>
                </motion.div>
            </div>

            {/* How It Works */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <Card className="p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Scale className="w-7 h-7 text-purple-400" />
                        DAO Resolution Nasıl Çalışır?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                        <div>
                            <div className="text-4xl mb-2">1️⃣</div>
                            <div className="font-semibold mb-1">Dispute Açılır</div>
                            <div className="text-sm">%20+ kullanıcı AI oracle'a itiraz ederse DAO vote başlar</div>
                        </div>
                        <div>
                            <div className="text-4xl mb-2">2️⃣</div>
                            <div className="font-semibold mb-1">Topluluk Oylar</div>
                            <div className="text-sm">Stake edilen token + reputation = voting power</div>
                        </div>
                        <div>
                            <div className="text-4xl mb-2">3️⃣</div>
                            <div className="font-semibold mb-1">Consensus</div>
                            <div className="text-sm">%60+ consensus ile outcome kesinleşir, ödüller dağıtılır</div>
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Active Disputes */}
            <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                    Aktif Disputeler
                </h3>

                <div className="space-y-4">
                    {activeDisputes.map((dispute, index) => (
                        <motion.div
                            key={dispute.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                        >
                            <Card className="p-6 border-2 border-orange-500/30">
                                <div className="flex flex-col lg:flex-row justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                                <AlertTriangle className="w-6 h-6 text-orange-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2">{dispute.title}</h4>
                                                <div className="text-sm text-gray-400 mb-2">
                                                    Önerilen Sonuç: <span className="font-semibold text-white">{dispute.proposedOutcome}</span>
                                                </div>
                                                <div className="text-sm text-gray-400">
                                                    İtiraz: "{dispute.evidence}"
                                                </div>
                                            </div>
                                        </div>

                                        {/* Vote Stats */}
                                        <div className="flex items-center gap-6 text-sm">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                <span>{dispute.votesYes} EVET</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <XCircle className="w-4 h-4 text-red-500" />
                                                <span>{dispute.votesNo} HAYIR</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-gray-400" />
                                                <span>${(dispute.totalStaked / 1000).toFixed(1)}K staked</span>
                                            </div>
                                        </div>

                                        {/* Deadline */}
                                        <div className="mt-4 text-sm text-gray-400">
                                            Deadline: {new Date(dispute.deadline).toLocaleDateString('tr-TR')}
                                        </div>
                                    </div>

                                    {/* Voting Actions */}
                                    <div className="flex flex-col gap-3 lg:w-48">
                                        <Button variant="primary" className="bg-green-500 hover:bg-green-600">
                                            <CheckCircle className="w-5 h-5" />
                                            <span>Doğru</span>
                                        </Button>
                                        <Button variant="secondary" className="border-red-500/50 hover:border-red-500">
                                            <XCircle className="w-5 h-5" />
                                            <span>Yanlış</span>
                                        </Button>
                                        <button className="text-sm text-gray-400 hover:text-white transition-colors">
                                            Detayları Gör →
                                        </button>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mt-4">
                                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-green-500 to-nexus-accent"
                                            style={{
                                                width: `${(dispute.votesYes / (dispute.votesYes + dispute.votesNo)) * 100}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Resolved History */}
            <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    Çözümlenmiş Disputeler
                </h3>

                <div className="space-y-3">
                    {resolvedDisputes.map((dispute) => (
                        <Card key={dispute.id} className="p-4 flex items-center justify-between">
                            <div>
                                <h4 className="font-semibold mb-1">{dispute.title}</h4>
                                <div className="text-sm text-gray-400">
                                    Sonuç: <span className="text-green-500 font-semibold">{dispute.outcome}</span> •
                                    Accuracy: {dispute.accuracy}% •
                                    {new Date(dispute.date).toLocaleDateString('tr-TR')}
                                </div>
                            </div>
                            <CheckCircle className="w-6 h-6 text-green-500" />
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
