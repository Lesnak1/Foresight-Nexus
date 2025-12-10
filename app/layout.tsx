import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Foresight Nexus - Opinion Labs Ecosystem",
    description: "The social network for future predictions. Tokenize your insights, share with the community, and earn together on the Opinion Labs ecosystem.",
    keywords: ["prediction markets", "blockchain", "Opinion Labs", "DeFi", "BNB Chain", "Web3", "DAO"],
    authors: [{ name: "Foresight Nexus Team" }],
    openGraph: {
        title: "Foresight Nexus - Predict the Future, Start Earning",
        description: "Social prediction markets on the Opinion Labs ecosystem. Transform your forecasts into tokenized assets.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Foresight Nexus",
        description: "The social network for future predictions",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" className="dark">
            <body className={`${inter.variable} antialiased`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
