import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF4E4',
        paper: '#F3E9D1',
        ink: '#0F1B36',
        'ink-mid': '#1E2D4A',
        pink: {
          DEFAULT: '#E63890',
          dark: '#C42772',
          light: '#F26AAE',
        },
        yellow: {
          DEFAULT: '#F7C944',
          dark: '#E0AE1D',
        },
        teal: {
          DEFAULT: '#0DBFC4',
          dark: '#077A82',
          light: '#4DD4D8',
        },
        sand: '#E8DCC0',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: { tightest: '-0.06em' },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
