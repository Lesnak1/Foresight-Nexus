import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatAddress(address: string): string {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function formatNumber(num: number, decimals: number = 2): string {
    if (num >= 1e9) {
        return `${(num / 1e9).toFixed(decimals)}B`;
    }
    if (num >= 1e6) {
        return `${(num / 1e6).toFixed(decimals)}M`;
    }
    if (num >= 1e3) {
        return `${(num / 1e3).toFixed(decimals)}K`;
    }
    return num.toFixed(decimals);
}

export function calculateOdds(yesShares: number, noShares: number): number {
    const total = yesShares + noShares;
    if (total === 0) return 50;
    return (yesShares / total) * 100;
}

export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
}
