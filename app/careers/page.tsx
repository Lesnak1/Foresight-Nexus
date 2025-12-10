'use client';

import { Card } from '@/components/ui/Card';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Code, Globe, Users } from 'lucide-react';

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-nexus-darker">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black mb-6">
                        <span className="gradient-text">Join Our Team</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Help us build the future of social prediction markets. We're looking for passionate builders who believe in decentralization and community-driven innovation.
                    </p>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {values.map((value, index) => (
                        <Card key={index} className="p-6 text-center">
                            <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mx-auto mb-4`}>
                                {value.icon}
                            </div>
                            <h3 className="font-bold mb-2">{value.title}</h3>
                            <p className="text-sm text-gray-400">{value.description}</p>
                        </Card>
                    ))}
                </div>

                {/* Open Positions */}
                <h2 className="text-3xl font-black mb-8">
                    <span className="gradient-text">Open Positions</span>
                </h2>
                <div className="space-y-4 mb-16">
                    {positions.map((position, index) => (
                        <Card key={index} hover className="p-6">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Globe className="w-4 h-4" />
                                            {position.location}
                                        </span>
                                        <span>•</span>
                                        <span>{position.type}</span>
                                    </div>
                                    <p className="text-gray-400">{position.description}</p>
                                </div>
                                <button className="btn-primary ml-6 flex-shrink-0">
                                    Apply Now
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Benefits */}
                <Card className="p-12 bg-gradient-to-r from-nexus-primary/10 to-nexus-secondary/10 border-2 border-nexus-primary/30">
                    <h2 className="text-3xl font-black mb-8 text-center">
                        <span className="gradient-text">Why Work With Us?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-nexus-primary mt-2 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold mb-1">{benefit.title}</h3>
                                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Contact */}
                <Card className="p-8 mt-12 text-center">
                    <h3 className="text-2xl font-bold mb-4">Don't See a Perfect Fit?</h3>
                    <p className="text-gray-400 mb-6">
                        We're always looking for talented people. Send us your portfolio and let's talk!
                    </p>
                    <a href="mailto:careers@foresightnexus.io">
                        <button className="glass px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
                            Email Us: careers@foresightnexus.io
                        </button>
                    </a>
                </Card>
            </div>
            <Footer />
        </main>
    );
}

const values = [
    {
        icon: <Code className="w-6 h-6 text-nexus-primary" />,
        title: 'Innovation',
        description: 'Push boundaries with cutting-edge tech',
        color: 'bg-nexus-gradient',
    },
    {
        icon: <Users className="w-6 h-6 text-purple-400" />,
        title: 'Community',
        description: 'Build with and for our users',
        color: 'bg-purple-500/20',
    },
    {
        icon: <Globe className="w-6 h-6 text-cyan-400" />,
        title: 'Remote-First',
        description: 'Work from anywhere in the world',
        color: 'bg-cyan-500/20',
    },
    {
        icon: <Briefcase className="w-6 h-6 text-green-400" />,
        title: 'Ownership',
        description: 'Equity and token grants',
        color: 'bg-green-500/20',
    },
];

const positions = [
    {
        title: 'Senior Full-Stack Engineer',
        location: 'Remote',
        type: 'Full-time',
        description: 'Build our Next.js platform, integrate Opinion API, and scale to 10K+ users.',
    },
    {
        title: 'Smart Contract Developer',
        location: 'Remote',
        type: 'Full-time',
        description: 'Develop and audit Nexus Node NFT contracts, DAO voting, and staking mechanisms.',
    },
    {
        title: 'Product Designer',
        location: 'Remote',
        type: 'Full-time',
        description: 'Own the entire design system and create delightful Web3 user experiences.',
    },
    {
        title: 'Community Manager',
        location: 'Remote',
        type: 'Part-time',
        description: 'Grow and engage our Discord/Twitter community, manage DAO governance.',
    },
];

const benefits = [
    {
        title: 'Competitive Salary',
        description: 'Market-rate compensation with token grants',
    },
    {
        title: 'Flexible Hours',
        description: 'Work when you are most productive',
    },
    {
        title: 'Remote Work',
        description: 'Work from anywhere globally',
    },
    {
        title: 'Learning Budget',
        description: 'Conferences, courses, and books',
    },
    {
        title: 'Health Insurance',
        description: 'Comprehensive coverage for you and family',
    },
    {
        title: 'Team Retreats',
        description: 'Annual all-hands in exotic locations',
    },
];
