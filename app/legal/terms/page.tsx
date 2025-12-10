'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        <span className="gradient-text">Terms of Service</span>
                    </h1>
                    <p className="text-gray-400 mb-2">Last Updated: December 10, 2025</p>
                    <p className="text-gray-400 mb-12">Effective Date: December 10, 2025</p>

                    <Card className="p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-300 leading-relaxed">
                                By accessing or using Foresight Nexus ("the Platform"), you agree to be bound by these Terms of Service ("Terms").
                                If you do not agree to these Terms, please do not use the Platform. We reserve the right to modify these Terms
                                at any time, and your continued use of the Platform constitutes acceptance of such changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Foresight Nexus is a decentralized prediction market platform built on the Opinion Labs ecosystem. The Platform allows users to:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>Create and tokenize predictions as "Nexus Nodes"</li>
                                <li>Trade prediction markets using blockchain technology</li>
                                <li>Participate in community-governed dispute resolution (DAO)</li>
                                <li>Access AI-powered prediction simulators and analytics</li>
                                <li>Earn rewards through gamification and referral programs</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">3. User Eligibility</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                To use the Platform, you must:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
                                <li>Have the legal capacity to enter into a binding agreement</li>
                                <li>Not be located in a jurisdiction where prediction markets or cryptocurrency trading is prohibited</li>
                                <li>Comply with all applicable local, state, national, and international laws and regulations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">4. Wallet Connection and Blockchain Transactions</h2>
                            <p className="text-gray-300 leading-relaxed">
                                The Platform integrates with Web3 wallets (e.g., MetaMask) to facilitate blockchain transactions on BNB Chain.
                                You are solely responsible for:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                                <li>Maintaining the security of your wallet and private keys</li>
                                <li>All transactions initiated through your wallet</li>
                                <li>Gas fees and network costs associated with blockchain transactions</li>
                                <li>Any losses due to lost or compromised wallet credentials</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                <strong>We do not have access to your wallet or private keys and cannot reverse transactions.</strong>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">5. Prediction Markets and Trading</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Prediction markets on the Platform are for entertainment and informational purposes. By participating, you acknowledge:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                                <li>All predictions carry inherent risk and uncertainty</li>
                                <li>Past performance does not guarantee future results</li>
                                <li>Market outcomes are determined by community oracle mechanisms and may be subject to disputes</li>
                                <li>You may lose the entire value of your positions</li>
                                <li>The Platform does not provide financial, investment, or legal advice</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">6. User Conduct</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                You agree not to:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li>Create fraudulent or misleading prediction markets</li>
                                <li>Manipulate market outcomes or engage in wash trading</li>
                                <li>Attempt to exploit vulnerabilities in the Platform or smart contracts</li>
                                <li>Use automated systems (bots) to gain unfair advantages</li>
                                <li>Violate intellectual property rights or applicable laws</li>
                                <li>Harass, abuse, or harm other users</li>
                                <li>Upload malicious code or viruses</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
                            <p className="text-gray-300 leading-relaxed">
                                All content on the Platform, including design, graphics, code, and trademarks, is the property of Foresight Nexus
                                or its licensors. You may not reproduce, distribute, or create derivative works without express written permission.
                                User-generated content (e.g., prediction descriptions) remains your property, but you grant us a worldwide,
                                royalty-free license to use, display, and distribute such content on the Platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">8. Disclaimer of Warranties</h2>
                            <p className="text-gray-300 leading-relaxed">
                                THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
                                INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                                We do not guarantee that the Platform will be uninterrupted, error-free, or secure. Blockchain transactions are
                                irreversible, and we are not responsible for losses due to user error, smart contract bugs, or network issues.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
                            <p className="text-gray-300 leading-relaxed">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, FORESIGHT NEXUS AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT,
                                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE,
                                ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">10. Indemnification</h2>
                            <p className="text-gray-300 leading-relaxed">
                                You agree to indemnify, defend, and hold harmless Foresight Nexus, its officers, directors, employees, and
                                agents from any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of your
                                use of the Platform, violation of these Terms, or infringement of any rights of third parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">11. Dispute Resolution and Arbitration</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Any disputes arising out of or relating to these Terms or the Platform shall be resolved through binding arbitration
                                in accordance with the rules of [Arbitration Association]. The arbitration shall take place in [Jurisdiction], and
                                the decision shall be final and binding. You waive your right to participate in class action lawsuits.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">12. Termination</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We reserve the right to suspend or terminate your access to the Platform at any time, with or without cause or notice,
                                for violations of these Terms or any other reason. Upon termination, your right to use the Platform will immediately cease.
                                Provisions that by their nature should survive termination (e.g., disclaimers, limitations of liability) will remain in effect.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
                            <p className="text-gray-300 leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to
                                its conflict of law principles. You consent to the exclusive jurisdiction of courts in [Jurisdiction] for any
                                disputes not subject to arbitration.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">14. Changes to Terms</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We may update these Terms from time to time. We will notify you of material changes by posting the new Terms on the
                                Platform and updating the "Last Updated" date. Your continued use of the Platform after such changes constitutes
                                acceptance of the revised Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">15. Contact Us</h2>
                            <p className="text-gray-300 leading-relaxed">
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <div className="mt-4 p-4 glass rounded-xl">
                                <p className="text-white font-semibold">Foresight Nexus Support</p>
                                <p className="text-gray-400">Email: legal@foresightnexus.io</p>
                                <p className="text-gray-400">Address: [Company Address]</p>
                            </div>
                        </section>

                        <div className="pt-8 border-t border-white/10">
                            <p className="text-sm text-gray-500 italic">
                                By using Foresight Nexus, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                            </p>
                        </div>
                    </Card>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
