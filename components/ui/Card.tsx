'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
}

export function Card({ children, className, hover = false, glow = false }: CardProps) {
    return (
        <motion.div
            whileHover={hover ? { y: -4 } : {}}
            className={cn(
                'glass-strong rounded-2xl p-6',
                hover && 'card-hover cursor-pointer',
                glow && 'glow-secondary',
                className
            )}
        >
            {children}
        </motion.div>
    );
}
