'use client';

import Link from 'next/link';
import { Sparkles, Twitter, MessageCircle, Github, Mail } from 'lucide-react';

const footerLinks = {
    product: [
        { name: 'Features', href: '/features' },
        { name: 'How it Works', href: '/how-it-works' },
        { name: 'Roadmap', href: '/roadmap' },
        { name: 'Pricing', href: '/pricing' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press Kit', href: '/press' },
    ],
    legal: [
        { name: 'Terms of Service', href: '/legal/terms' },
        { name: 'Privacy Policy', href: '/legal/privacy' },
        { name: 'Cookie Policy', href: '/legal/cookies' },
        { name: 'Disclaimer', href: '/legal/disclaimer' },
    ],
    resources: [
        { name: 'Documentation', href: 'https://docs.opinion.trade', external: true },
        { name: 'API Reference', href: '/api-docs' },
        { name: 'Community', href: 'https://discord.gg/opinionlabs', external: true },
        { name: 'Support', href: '/support' },
    ],
};

const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/opinionlabsxyz' },
    { name: 'Discord', icon: MessageCircle, href: 'https://discord.gg/opinionlabs' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/opinionlabs' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@foresightnexus.io' },
];

export function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-nexus-dark">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-nexus-gradient flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold gradient-text">Foresight Nexus</span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            The social network for future predictions. Tokenize your insights, share with the community, and earn together.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg glass hover:bg-white/10 flex items-center justify-center transition-all group"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-nexus-primary transition-colors" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-bold mb-4">Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-bold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-bold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-bold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                                        >
                                            {link.name}
                                            <span className="text-xs">↗</span>
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-gray-500 text-center md:text-left">
                            © {new Date().getFullYear()} Foresight Nexus. All rights reserved.
                            <span className="mx-2">•</span>
                            Built for <span className="text-nexus-primary font-semibold">Opinion Labs</span> ecosystem
                            <span className="mx-2">•</span>
                            Built by <a
                                href="https://github.com/Lesnak1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-nexus-accent hover:text-nexus-primary transition-colors font-semibold"
                            >
                                Leknax
                            </a>
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                            <span className="text-gray-500">Powered by BNB Chain</span>
                            <span className="text-gray-600">•</span>
                            <span className="text-gray-500">Secured by CLOB</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nexus-primary to-transparent opacity-50" />
        </footer>
    );
}
