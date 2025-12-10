'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Sparkles,
    Compass,
    Scale,
    Bot,
    Trophy,
    User,
    Menu,
    X
} from 'lucide-react';
import { WalletButton } from '@/components/WalletButton';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navigation = [
    { name: 'Dashboard', href: '/app/dashboard', icon: LayoutDashboard },
    { name: 'Create Nexus', href: '/app/create', icon: Sparkles },
    { name: 'Explore', href: '/app/explore', icon: Compass },
    { name: 'DAO Hub', href: '/app/dao', icon: Scale },
    { name: 'AI Simulator', href: '/app/simulator', icon: Bot },
    { name: 'Leaderboard', href: '/app/leaderboard', icon: Trophy },
    { name: 'Profile', href: '/app/profile', icon: User },
];

export default function AppLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-nexus-darker flex">
            {/* Mobile Menu Button */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden fixed top-6 left-6 z-50 glass p-3 rounded-xl"
            >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Sidebar */}
            <AnimatePresence>
                {(sidebarOpen || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
                    <motion.aside
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className="fixed lg:sticky top-0 left-0 h-screen w-72 glass-strong border-r border-white/10 p-6 flex flex-col z-40"
                    >
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 mb-10">
                            <div className="w-10 h-10 rounded-xl bg-nexus-gradient flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold gradient-text">Foresight Nexus</span>
                        </Link>

                        {/* Navigation */}
                        <nav className="flex-1 space-y-2">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href;
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setSidebarOpen(false)}
                                        className={cn(
                                            'flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all',
                                            isActive
                                                ? 'bg-nexus-gradient text-white shadow-lg'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        )}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span>{item.name}</span>
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Footer */}
                        <div className="pt-6 border-t border-white/10">
                            <div className="glass p-4 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-nexus-accent pulse-live" />
                                    <span className="text-sm font-semibold">BNB Chain</span>
                                </div>
                                <p className="text-xs text-gray-400">Connected & Secured</p>
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen">
                {/* Top Bar */}
                <header className="glass-strong border-b border-white/10 px-6 lg:px-10 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">
                            <h1 className="text-2xl font-bold">
                                {navigation.find(item => item.href === pathname)?.name || 'Dashboard'}
                            </h1>
                        </div>
                    </div>

                    <WalletButton />
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6 lg:p-10">
                    {children}
                </main>
            </div>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}
