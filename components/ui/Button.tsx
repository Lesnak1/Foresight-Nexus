'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}: ButtonProps) {
    const baseStyles = 'font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2';

    const variants = {
        primary: 'bg-nexus-gradient text-white hover:shadow-2xl hover:shadow-nexus-primary/50',
        secondary: 'glass border-2 border-nexus-primary/50 hover:border-nexus-primary hover:bg-white/5',
        ghost: 'hover:bg-white/5',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
}
