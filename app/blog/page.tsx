'use client';

import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, TrendingUp } from 'lucide-react';

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        <span className="gradient-text">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Insights, updates, and deep dives into prediction markets and Web3
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                        <Card key={index} hover className="p-6 flex flex-col">
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                            <p className="text-gray-400 mb-4 flex-1">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-nexus-primary font-semibold">{post.category}</span>
                                <button className="text-sm text-gray-400 hover:text-white transition-colors">
                                    Read More →
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>

                <Card className="p-12 mt-16 text-center">
                    <TrendingUp className="w-16 h-16 mx-auto mb-6 text-nexus-primary" />
                    <h2 className="text-3xl font-black mb-4">Stay Updated</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Follow us on Twitter and join our Discord for the latest updates, insights, and community discussions
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="https://twitter.com/opinionlabsxyz" target="_blank" rel="noopener noreferrer">
                            <button className="btn-primary">Follow on Twitter</button>
                        </a>
                        <a href="https://discord.gg/opinionlabs" target="_blank" rel="noopener noreferrer">
                            <button className="glass px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
                                Join Discord
                            </button>
                        </a>
                    </div>
                </Card>
            </div>
            <Footer />
        </main>
    );
}

const blogPosts = [
    {
        title: 'Introducing Foresight Nexus',
        excerpt: 'The first social prediction market platform where your insights become tokenized, tradeable assets.',
        date: 'Dec 10, 2025',
        category: 'Announcements',
    },
    {
        title: 'Why Prediction Markets Matter',
        excerpt: 'How collective intelligence and skin-in-the-game create the most accurate forecasts.',
        date: 'Dec 8, 2025',
        category: 'Education',
    },
    {
        title: 'Building on Opinion Labs',
        excerpt: 'Deep dive into integrating with Opinion\'s CLOB infrastructure and developer ecosystem.',
        date: 'Dec 5, 2025',
        category: 'Technical',
    },
    {
        title: 'The Power of DAO Resolution',
        excerpt: 'How community governance creates fair, transparent market outcomes without centralized oracles.',
        date: 'Dec 3, 2025',
        category: 'DAO',
    },
    {
        title: 'AI in Prediction Markets',
        excerpt: 'Exploring how our AI Simulator helps users make smarter trading decisions.',
        date: 'Nov 30, 2025',
        category: 'AI',
    },
    {
        title: 'Gamification Done Right',
        excerpt: 'Why leaderboards, badges, and social features make prediction markets more engaging.',
        date: 'Nov 28, 2025',
        category: 'Product',
    },
];
