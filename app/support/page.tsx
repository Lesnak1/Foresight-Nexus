'use client';

import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-black mb-12">
                    <span className="gradient-text">Support</span>
                </h1>

                <Card className="p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-6">Get Help</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">💬 Community Support</h3>
                            <p className="text-gray-400 mb-2">Join our Discord for real-time help from the community</p>
                            <a href="https://discord.gg/opinionlabs" target="_blank" rel="noopener noreferrer" className="text-nexus-primary hover:underline">
                                discord.gg/opinionlabs
                            </a>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">📧 Email Support</h3>
                            <p className="text-gray-400 mb-2">For urgent issues or technical support</p>
                            <a href="mailto:support@foresightnexus.io" className="text-nexus-primary hover:underline">
                                support@foresightnexus.io
                            </a>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">📚 Documentation</h3>
                            <p className="text-gray-400 mb-2">Check our guides and FAQs</p>
                            <Link href="/how-it-works" className="text-nexus-primary hover:underline">
                                How It Works →
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
            <Footer />
        </main>
    );
}
