'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface StatsCounterProps {
    end: number;
    duration?: number;
    decimals?: number;
}

export function StatsCounter({ end, duration = 2, decimals = 0 }: StatsCounterProps) {
    const [isVisible, setIsVisible] = useState(false);
    const spring = useSpring(0, { duration: duration * 1000 });
    const display = useTransform(spring, (current) =>
        current.toFixed(decimals)
    );

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (isVisible) {
            spring.set(end);
        }
    }, [isVisible, spring, end]);

    return <motion.span>{display}</motion.span>;
}
