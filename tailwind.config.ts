import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                nexus: {
                    primary: '#FF6B35',
                    secondary: '#9D4EDD',
                    accent: '#06FFA5',
                    dark: '#0A0A0A',
                    darker: '#050505',
                    surface: 'rgba(255, 255, 255, 0.03)',
                    border: 'rgba(255, 255, 255, 0.1)',
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'nexus-gradient': 'linear-gradient(135deg, #FF6B35 0%, #9D4EDD 100%)',
                'nexus-gradient-hover': 'linear-gradient(135deg, #FF8C5E 0%, #B76EF5 100%)',
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'slide-up': 'slideUp 0.5s ease-out',
                'fade-in': 'fadeIn 0.3s ease-in',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(157, 78, 221, 0.5)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};

export default config;
