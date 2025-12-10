'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Cookie, Settings, Eye } from 'lucide-react';

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-4xl md:text-5xl font-black mb-4">
                        <span className="gradient-text">Cookie Policy</span>
                    </h1>
                    <p className="text-gray-400 mb-12">Last Updated: December 10, 2025</p>

                    <Card className="p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Cookie className="w-6 h-6 text-nexus-primary" />
                                What Are Cookies?
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                Cookies are small text files stored on your device when you visit our Platform. They help us enhance your experience by remembering preferences, analyzing usage, and improving security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                            <div className="space-y-6">
                                <div className="p-4 glass rounded-xl">
                                    <h3 className="text-xl font-semibold mb-2">🔒 Essential Cookies</h3>
                                    <p className="text-gray-300 mb-2"><strong>Purpose:</strong> Required for basic platform functionality</p>
                                    <p className="text-gray-400 text-sm">Examples: Wallet connection state, session authentication, security tokens</p>
                                    <p className="text-gray-400 text-sm mt-2"><strong>Duration:</strong> Session or until logout</p>
                                </div>

                                <div className="p-4 glass rounded-xl">
                                    <h3 className="text-xl font-semibold mb-2">📊 Analytics Cookies</h3>
                                    <p className="text-gray-300 mb-2"><strong>Purpose:</strong> Help us understand how users interact with the Platform</p>
                                    <p className="text-gray-400 text-sm">Examples: Page views, feature usage, time spent, conversion tracking</p>
                                    <p className="text-gray-400 text-sm mt-2"><strong>Duration:</strong> Up to 2 years</p>
                                </div>

                                <div className="p-4 glass rounded-xl">
                                    <h3 className="text-xl font-semibold mb-2">⚙️ Preference Cookies</h3>
                                    <p className="text-gray-300 mb-2"><strong>Purpose:</strong> Remember your settings and choices</p>
                                    <p className="text-gray-400 text-sm">Examples: Theme preferences, language, notification settings</p>
                                    <p className="text-gray-400 text-sm mt-2"><strong>Duration:</strong> 1 year</p>
                                </div>

                                <div className="p-4 glass rounded-xl">
                                    <h3 className="text-xl font-semibold mb-2">🎯 Marketing Cookies</h3>
                                    <p className="text-gray-300 mb-2"><strong>Purpose:</strong> Deliver relevant ads and measure campaign effectiveness</p>
                                    <p className="text-gray-400 text-sm">Examples: Social media pixels, advertising IDs</p>
                                    <p className="text-gray-400 text-sm mt-2"><strong>Duration:</strong> Up to 1 year</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Settings className="w-6 h-6 text-nexus-accent" />
                                Managing Your Cookie Preferences
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                You have control over cookies. Here's how to manage them:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies through their settings menu</li>
                                <li><strong>Cookie Consent Banner:</strong> Adjust your preferences when you first visit the Platform</li>
                                <li><strong>Opt-Out Tools:</strong> Use industry opt-out tools like Google Analytics Opt-Out or Network Advertising Initiative</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                <strong>Note:</strong> Disabling essential cookies may affect platform functionality (e.g., wallet connection).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We use third-party services that may set their own cookies:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                <li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
                                <li><strong>WalletConnect:</strong> Secure wallet connection protocol</li>
                                <li><strong>Social Media Platforms:</strong> Share buttons and social integrations</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                These third parties have their own privacy policies. We recommend reviewing them.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Local Storage and IndexedDB</h2>
                            <p className="text-gray-300 leading-relaxed">
                                In addition to cookies, we use browser storage technologies (localStorage, sessionStorage, IndexedDB) to cache data locally for improved performance. This data includes wallet preferences, UI state, and recent transactions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We may update this Cookie Policy to reflect changes in technology or legal requirements. Check this page periodically for updates.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                            <div className="p-4 glass rounded-xl">
                                <p className="text-white font-semibold">Cookie Policy Questions</p>
                                <p className="text-gray-400">Email: privacy@foresightnexus.io</p>
                            </div>
                        </section>
                    </Card>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
