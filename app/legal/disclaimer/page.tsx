'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        <span className="gradient-text">Disclaimer</span>
                    </h1>
                    <p className="text-gray-400 mb-12">Last Updated: December 10, 2025</p>

                    <div className="p-6 glass-strong rounded-2xl border-2 border-yellow-500/30 mb-8">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-yellow-500">Important Notice</h3>
                                <p className="text-gray-300">
                                    Please read this disclaimer carefully before using Foresight Nexus. By accessing the Platform, you acknowledge and accept all risks outlined below.
                                </p>
                            </div>
                        </div>
                    </div>

                    <Card className="p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. No Financial Advice</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Foresight Nexus does NOT provide financial, investment, legal, or tax advice. All information on the Platform is for <strong>informational and entertainment purposes only</strong>. You should consult qualified professionals before making any financial decisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. Risk of Loss</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Prediction markets and cryptocurrency trading involve significant risk:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>You may lose your entire investment</li>
                                <li>Market outcomes are uncertain and unpredictable</li>
                                <li>Past performance does not guarantee future results</li>
                                <li>Cryptocurrency prices are volatile and can change rapidly</li>
                                <li>Smart contracts may contain bugs or vulnerabilities</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4 font-semibold">
                                Only invest what you can afford to lose.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. Blockchain and Smart Contract Risks</h2>
                            <p className="text-gray-300 leading-relaxed">
                                The Platform operates on blockchain technology, which carries inherent risks:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li><strong>Irreversibility:</strong> Blockchain transactions cannot be reversed or refunded</li>
                                <li><strong>Network Congestion:</strong> Transactions may be delayed during high traffic</li>
                                <li><strong>Gas Fees:</strong> You are responsible for all network fees, which can be unpredictable</li>
                                <li><strong>Smart Contract Bugs:</strong> Despite audits, code may contain unforeseen vulnerabilities</li>
                                <li><strong>Protocol Changes:</strong> Blockchain upgrades may affect platform functionality</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. Regulatory Uncertainty</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Prediction markets and cryptocurrency regulations vary by jurisdiction and are subject to change. It is <strong>your responsibility</strong> to ensure compliance with your local laws. We make no representations about the legal status of the Platform in your jurisdiction.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">5. No Guarantees</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We do not guarantee:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>Accuracy of market information or AI predictions</li>
                                <li>Availability or uptime of the Platform</li>
                                <li>Profitability of any predictions or strategies</li>
                                <li>Fairness of all market outcomes (disputes may occur)</li>
                                <li>Compatibility with all wallets and browsers</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">6. Third-Party Services</h2>
                            <p className="text-gray-300 leading-relaxed">
                                The Platform integrates with third-party services (e.g., Opinion Labs, WalletConnect, BNB Chain). We are not responsible for their performance, security, or changes to their services. Use of third-party services is at your own risk.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">7. User Responsibility</h2>
                            <p className="text-gray-300 leading-relaxed">
                                You are solely responsible for:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>Securing your wallet and private keys</li>
                                <li>Conducting your own research (DYOR)</li>
                                <li>Understanding the risks before participating</li>
                                <li>Complying with applicable laws and regulations</li>
                                <li>Tax reporting and obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">8. DAO Governance Limitations</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Community governance through DAO voting aims to be fair, but:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>Vote outcomes may not align with your expectations</li>
                                <li>Human error in oracle resolution is possible</li>
                                <li>Disputes may take time to resolve</li>
                                <li>Minority votes may not prevail</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">9. Security Risks</h2>
                            <p className="text-gray-300 leading-relaxed">
                                While we implement security best practices, no system is completely secure. Risks include:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>Hacking, phishing, or social engineering attacks</li>
                                <li>Wallet exploits or malware</li>
                                <li>Loss of funds due to user error</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4 font-semibold">
                                Always verify URLs, enable 2FA, and use hardware wallets for large amounts.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
                            <p className="text-gray-300 leading-relaxed">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, FORESIGHT NEXUS AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY LOSSES, DAMAGES, OR CLAIMS ARISING FROM YOUR USE OF THE PLATFORM, INCLUDING BUT NOT LIMITED TO LOSS OF FUNDS, DATA, OR OPPORTUNITIES.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">11. Acknowledgment</h2>
                            <p className="text-gray-300 leading-relaxed">
                                By using Foresight Nexus, you acknowledge that:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>You have read and understood this Disclaimer</li>
                                <li>You accept all risks associated with prediction markets and blockchain technology</li>
                                <li>You will not hold us liable for any losses or damages</li>
                                <li>You are using the Platform voluntarily and at your own risk</li>
                            </ul>
                        </section>

                        <div className="pt-8 border-t border-white/10">
                            <p className="text-sm text-gray-500 italic text-center">
                                This disclaimer is subject to change without notice. Please review regularly.
                            </p>
                        </div>
                    </Card>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
