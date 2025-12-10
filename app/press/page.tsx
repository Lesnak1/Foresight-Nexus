'use client';

import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Download, Image, FileText, Palette } from 'lucide-react';

export default function PressPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        <span className="gradient-text">Press Kit</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Official brand assets, logos, and media resources for Foresight Nexus
                    </p>
                </div>

                {/* About */}
                <Card className="p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-4">About Foresight Nexus</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Foresight Nexus is a social prediction market platform built on the Opinion Labs ecosystem. We transform predictions into tokenized "Nexus Nodes" - tradeable assets that empower communities to forecast the future together using blockchain technology and AI-powered analytics.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Founded</div>
                            <div className="font-semibold">December 2025</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Headquarters</div>
                            <div className="font-semibold">Global (Remote)</div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-1">Blockchain</div>
                            <div className="font-semibold">BNB Chain</div>
                        </div>
                    </div>
                </Card>

                {/* Brand Assets */}
                <h2 className="text-3xl font-black mb-8">
                    <span className="gradient-text">Brand Assets</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {assets.map((asset, index) => (
                        <Card key={index} hover className="p-6">
                            <div className={`w-12 h-12 rounded-xl ${asset.color} flex items-center justify-center mb-4`}>
                                {asset.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{asset.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{asset.description}</p>
                            <button className="flex items-center gap-2 text-nexus-primary hover:text-nexus-secondary transition-colors font-semibold">
                                <Download className="w-4 h-4" />
                                Download {asset.format}
                            </button>
                        </Card>
                    ))}
                </div>

                {/* Brand Colors */}
                <Card className="p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Palette className="w-6 h-6 text-nexus-primary" />
                        Brand Colors
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {colors.map((color, index) => (
                            <div key={index}>
                                <div
                                    className="w-full h-24 rounded-xl mb-3"
                                    style={{ backgroundColor: color.hex }}
                                />
                                <div className="font-semibold">{color.name}</div>
                                <div className="text-sm text-gray-500">{color.hex}</div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Media Contact */}
                <Card className="p-8 bg-gradient-to-r from-nexus-primary/10 to-nexus-secondary/10 border-2 border-nexus-primary/30">
                    <h2 className="text-2xl font-bold mb-4">Media Contact</h2>
                    <p className="text-gray-300 mb-6">
                        For press inquiries, interviews, or media partnerships, please contact our communications team:
                    </p>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="text-gray-500">Email:</span>
                            <a href="mailto:press@foresightnexus.io" className="text-nexus-primary hover:underline">
                                press@foresightnexus.io
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-gray-500">Twitter:</span>
                            <a href="https://twitter.com/opinionlabsxyz" target="_blank" rel="noopener noreferrer" className="text-nexus-primary hover:underline">
                                @opinionlabsxyz
                            </a>
                        </div>
                    </div>
                </Card>

                {/* Usage Guidelines */}
                <Card className="p-8 mt-12">
                    <h2 className="text-2xl font-bold mb-6">Brand Guidelines</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <span className="text-green-500 font-bold text-xl">✓</span>
                            <div>
                                <div className="font-semibold mb-1">Do</div>
                                <div className="text-gray-400 text-sm">Use official logos and colors from this press kit</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-green-500 font-bold text-xl">✓</span>
                            <div>
                                <div className="font-semibold mb-1">Do</div>
                                <div className="text-gray-400 text-sm">Maintain clear space around logos (minimum 20px)</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-red-500 font-bold text-xl">×</span>
                            <div>
                                <div className="font-semibold mb-1">Don't</div>
                                <div className="text-gray-400 text-sm">Modify, distort, or recolor our logos</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-red-500 font-bold text-xl">×</span>
                            <div>
                                <div className="font-semibold mb-1">Don't</div>
                                <div className="text-gray-400 text-sm">Use outdated or unofficial brand assets</div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <Footer />
        </main>
    );
}

const assets = [
    {
        icon: <Image className="w-6 h-6 text-nexus-primary" />,
        title: 'Logo Package',
        description: 'Primary logo, icon, wordmark in SVG, PNG formats',
        format: 'ZIP',
        color: 'bg-nexus-gradient',
    },
    {
        icon: <FileText className="w-6 h-6 text-purple-400" />,
        title: 'Brand Guide',
        description: 'Complete brand guidelines and usage rules',
        format: 'PDF',
        color: 'bg-purple-500/20',
    },
    {
        icon: <Image className="w-6 h-6 text-cyan-400" />,
        title: 'Product Screenshots',
        description: 'High-resolution app screenshots for media',
        format: 'ZIP',
        color: 'bg-cyan-500/20',
    },
    {
        icon: <FileText className="w-6 h-6 text-green-400" />,
        title: 'Fact Sheet',
        description: 'Company overview, stats, and key information',
        format: 'PDF',
        color: 'bg-green-500/20',
    },
];

const colors = [
    { name: 'Primary Orange', hex: '#FF6B35' },
    { name: 'Secondary Purple', hex: '#9D4EDD' },
    { name: 'Accent Cyan', hex: '#06FFA5' },
    { name: 'Dark Background', hex: '#0A0A0A' },
];
