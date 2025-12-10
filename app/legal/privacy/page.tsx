'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        <span className="gradient-text">Privacy Policy</span>
                    </h1>
                    <p className="text-gray-400 mb-12">Last Updated: December 10, 2025</p>

                    <Card className="p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Shield className="w-6 h-6 text-nexus-primary" />
                                1. Introduction
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                Foresight Nexus ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our decentralized prediction market platform. By using the Platform, you consent to the practices described in this policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Database className="w-6 h-6 text-nexus-accent" />
                                2. Information We Collect
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">2.1 Blockchain Data (Public)</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        When you connect your Web3 wallet, we collect your public wallet address and on-chain transaction data. This information is publicly available on BNB Chain and cannot be deleted.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">2.2 Usage Data</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        We may collect information about how you interact with the Platform, including pages visited, features used, prediction markets created, and trading activity.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">2.3 Cookies and Tracking Technologies</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        We use cookies, local storage, and similar technologies to enhance user experience, remember preferences, and analyze platform performance. See our Cookie Policy for details.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>To provide and maintain the Platform's functionality</li>
                                <li>To process blockchain transactions and market interactions</li>
                                <li>To display your public profile, positions, and leaderboard rankings</li>
                                <li>To prevent fraud, abuse, and ensure platform security</li>
                                <li>To analyze usage patterns and improve our services</li>
                                <li>To communicate important updates (with your consent)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Lock className="w-6 h-6 text-green-500" />
                                4. Data Security
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We implement industry-standard security measures to protect your data, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>HTTPS encryption for all web traffic</li>
                                <li>Secure smart contract audits</li>
                                <li>No storage of private keys (your wallet controls them)</li>
                                <li>Regular security assessments and penetration testing</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                However, no method of transmission over the internet is 100% secure. You are responsible for maintaining the security of your wallet and private keys.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">5. Data Sharing and Disclosure</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We do not sell your personal information. We may share data in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li><strong>Public Blockchain:</strong> Wallet addresses and transactions are publicly visible on BNB Chain</li>
                                <li><strong>Service Providers:</strong> With trusted third parties who assist in platform operation (e.g., hosting, analytics)</li>
                                <li><strong>Legal Compliance:</strong> If required by law or to protect our rights and safety</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Depending on your jurisdiction, you may have the following rights:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li><strong>Access:</strong> Request a copy of the data we hold about you</li>
                                <li><strong>Correction:</strong> Update inaccurate or incomplete information</li>
                                <li><strong>Deletion:</strong> Request deletion of non-blockchain data (on-chain data cannot be deleted)</li>
                                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                                <li><strong>Data Portability:</strong> Obtain your data in a machine-readable format</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                To exercise these rights, contact us at privacy@foresightnexus.io
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
                            <p className="text-gray-300 leading-relaxed">
                                The Platform is not intended for users under 18 years of age. We do not knowingly collect information from minors. If we discover that a child has provided personal information, we will delete it immediately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
                            <p className="text-gray-300 leading-relaxed">
                                The Platform operates globally on a decentralized blockchain. Your data may be processed in countries outside your jurisdiction. We ensure appropriate safeguards are in place for international data transfers.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We may update this Privacy Policy periodically. We will notify you of material changes by posting the new policy on the Platform and updating the "Last Updated" date. Your continued use constitutes acceptance of the revised policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                            <div className="p-4 glass rounded-xl">
                                <p className="text-white font-semibold">Privacy Team</p>
                                <p className="text-gray-400">Email: privacy@foresightnexus.io</p>
                                <p className="text-gray-400">For data protection inquiries and rights requests</p>
                            </div>
                        </section>
                    </Card>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
