'use client';

import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Code, Book, Zap, Lock } from 'lucide-react';

export default function APIDocsPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        <span className="gradient-text">API Reference</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl">
                        Build with Foresight Nexus. Access prediction data, markets, and user statistics programmatically.
                    </p>
                </div>

                {/* Quick Start */}
                <Card className="p-8 mb-12 bg-gradient-to-r from-nexus-primary/10 to-nexus-secondary/10 border-2 border-nexus-primary/30">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <Zap className="w-6 h-6 text-nexus-primary" />
                        Quick Start
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <div className="text-sm text-gray-500 mb-2">Base URL</div>
                            <code className="glass px-4 py-2 rounded-lg block font-mono text-sm">
                                https://api.foresightnexus.io/v1
                            </code>
                        </div>
                        <div>
                            <div className="text-sm text-gray-500 mb-2">Authentication</div>
                            <code className="glass px-4 py-2 rounded-lg block font-mono text-sm">
                                Authorization: Bearer YOUR_API_KEY
                            </code>
                        </div>
                    </div>
                </Card>

                {/* Endpoints */}
                <h2 className="text-3xl font-black mb-8">
                    <span className="gradient-text">Endpoints</span>
                </h2>
                <div className="space-y-6 mb-12">
                    {endpoints.map((endpoint, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-3 py-1 rounded-lg font-mono text-sm ${endpoint.methodColor}`}>
                                            {endpoint.method}
                                        </span>
                                        <code className="text-gray-300 font-mono">{endpoint.path}</code>
                                    </div>
                                    <p className="text-gray-400">{endpoint.description}</p>
                                </div>
                            </div>

                            {endpoint.example && (
                                <div className="mt-4">
                                    <div className="text-sm text-gray-500 mb-2">Example Response</div>
                                    <pre className="glass p-4 rounded-lg overflow-x-auto">
                                        <code className="text-sm text-gray-300">{endpoint.example}</code>
                                    </pre>
                                </div>
                            )}
                        </Card>
                    ))}
                </div>

                {/* Rate Limits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <Card className="p-8">
                        <Lock className="w-12 h-12 text-nexus-primary mb-4" />
                        <h3 className="text-xl font-bold mb-3">Rate Limits</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>• <strong>Free tier:</strong> 100 requests/hour</li>
                            <li>• <strong>Developer tier:</strong> 1,000 requests/hour</li>
                            <li>• <strong>Enterprise:</strong> Custom limits</li>
                        </ul>
                    </Card>

                    <Card className="p-8">
                        <Book className="w-12 h-12 text-purple-400 mb-4" />
                        <h3 className="text-xl font-bold mb-3">Full Documentation</h3>
                        <p className="text-gray-400 mb-4">
                            For complete API docs, SDKs, and guides, visit our developer portal.
                        </p>
                        <a href="https://docs.opinion.trade" target="_blank" rel="noopener noreferrer">
                            <button className="btn-primary w-full">
                                View Full Docs →
                            </button>
                        </a>
                    </Card>
                </div>

                {/* Get API Key */}
                <Card className="p-12 text-center bg-gradient-to-r from-nexus-primary/10 to-nexus-secondary/10">
                    <Code className="w-16 h-16 mx-auto mb-6 text-nexus-primary" />
                    <h2 className="text-3xl font-black mb-4">Get API Access</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join the Opinion Labs Builders Program to get your API key and start building
                    </p>
                    <a href="https://forms.gle/9oBLs9wns6sJVm87A" target="_blank" rel="noopener noreferrer">
                        <button className="btn-primary text-lg px-8 py-4">
                            Apply for API Access
                        </button>
                    </a>
                </Card>
            </div>
            <Footer />
        </main>
    );
}

const endpoints = [
    {
        method: 'GET',
        methodColor: 'bg-green-500/20 text-green-400',
        path: '/markets',
        description: 'Get all active prediction markets',
        example: `{
  "markets": [
    {
      "id": "market_123",
      "title": "BTC $100K by Dec 2025?",
      "odds": 0.68,
      "volume": "2.34M",
      "participants": 1247
    }
  ]
}`,
    },
    {
        method: 'GET',
        methodColor: 'bg-green-500/20 text-green-400',
        path: '/markets/:id',
        description: 'Get specific market details',
        example: `{
  "id": "market_123",
  "title": "BTC $100K",
  "odds": { "yes": 0.68, "no": 0.32 },
  "volume": "2.34M",
  "deadline": "2025-12-31"
}`,
    },
    {
        method: 'GET',
        methodColor: 'bg-green-500/20 text-green-400',
        path: '/users/:address/positions',
        description: 'Get user positions and portfolio',
        example: null,
    },
    {
        method: 'GET',
        methodColor: 'bg-green-500/20 text-green-400',
        path: '/leaderboard',
        description: 'Get top predictors ranked by win rate',
        example: null,
    },
    {
        method: 'POST',
        methodColor: 'bg-blue-500/20 text-blue-400',
        path: '/markets/create',
        description: 'Create a new prediction market (requires authentication)',
        example: null,
    },
];
