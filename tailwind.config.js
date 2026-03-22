/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  safelist: [
    /* Brand */
    'bg-primary-800', 'bg-primary-700', 'bg-primary-600', 'bg-primary-500',
    /* Accent blue */
    'bg-accent-700', 'bg-accent-600', 'bg-accent-500', 'bg-accent-400',
    'text-accent-700', 'text-accent-600', 'text-accent-500', 'text-accent-400',
    'border-accent-700', 'border-accent-600', 'border-accent-500',
    /* Teal */
    'bg-teal-700', 'bg-teal-600', 'bg-teal-500', 'bg-teal-400',
    'text-teal-700', 'text-teal-600', 'text-teal-500', 'text-teal-400',
    'border-teal-700', 'border-teal-600', 'border-teal-500',
    /* Gold */
    'bg-gold-500', 'bg-gold-400', 'bg-gold-300',
    'text-gold-500', 'text-gold-400', 'text-gold-300',
    /* Neutrals */
    'bg-neutral-50', 'bg-neutral-100', 'bg-neutral-200',
    'text-neutral-400', 'text-neutral-500', 'text-neutral-600', 'text-neutral-700',
    /* Semantic chip patterns */
    'bg-blue-500/10', 'text-blue-600', 'border-blue-200',
    'bg-green-500/10', 'text-green-600', 'border-green-200',
    'bg-amber-500/10', 'text-amber-600', 'border-amber-200',
    'bg-red-500/10', 'text-red-600', 'border-red-200',
    'bg-purple-500/10', 'text-purple-600', 'border-purple-200',
    'bg-slate-500/10', 'text-slate-600', 'border-slate-200',
    'bg-cyan-500/10', 'text-cyan-600', 'border-cyan-200',
    'bg-emerald-500/10', 'text-emerald-600', 'border-emerald-200',
    'bg-orange-500/10', 'text-orange-600', 'border-orange-200',
    'bg-indigo-500/10', 'text-indigo-600', 'border-indigo-200',
    'bg-rose-500/10', 'text-rose-600', 'border-rose-200',
    'bg-teal-500/10', 'text-teal-600', 'border-teal-200',
    /* KPI icon bg/text patterns */
    'bg-blue-500/10', 'bg-emerald-500/10', 'bg-amber-500/10', 'bg-red-500/10',
    'bg-purple-500/10', 'bg-cyan-500/10', 'bg-indigo-500/10', 'bg-rose-500/10',
    'text-blue-600', 'text-emerald-600', 'text-amber-600', 'text-red-600',
    'text-purple-600', 'text-cyan-600', 'text-indigo-600', 'text-rose-600',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        manrope: ['var(--font-manrope)'],
        mono: ['IBM Plex Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'display-xl': ['2.5rem', { lineHeight: '3rem', fontWeight: '700' }],
        'display-l':  ['2rem',   { lineHeight: '2.5rem', fontWeight: '700' }],
        'h1': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        'h2': ['1.5rem',  { lineHeight: '2rem', fontWeight: '700' }],
        'h3': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '650' }],
        'h4': ['1.125rem',{ lineHeight: '1.625rem', fontWeight: '650' }],
        'title': ['1rem', { lineHeight: '1.5rem', fontWeight: '650' }],
        'body-l': ['1rem',   { lineHeight: '1.5rem', fontWeight: '400' }],
        'body-m': ['0.875rem',{ lineHeight: '1.375rem', fontWeight: '400' }],
        'body-s': ['0.8125rem',{ lineHeight: '1.25rem', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.125rem', fontWeight: '500' }],
        'data': ['0.75rem',    { lineHeight: '1.125rem', fontWeight: '500' }],
      },
      borderRadius: {
        'xs': '6px',
        's':  '8px',
        'm':  '10px',
        'l':  '14px',
        'xl': '18px',
        'lg': 'var(--radius)',
        'md': 'calc(var(--radius) - 2px)',
        'sm': 'calc(var(--radius) - 4px)',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
      },
      colors: {
        /* Shadcn semantic tokens */
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          800: 'hsl(var(--primary-800))',
          700: 'hsl(var(--primary-700))',
          600: 'hsl(var(--primary-600))',
          500: 'hsl(var(--primary-500))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
          700: 'hsl(var(--accent-700))',
          600: 'hsl(var(--accent-600))',
          500: 'hsl(var(--accent-500))',
          400: 'hsl(var(--accent-400))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
          dark: 'hsl(var(--success-dark))',
          bg: 'hsl(var(--success-bg))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
          dark: 'hsl(var(--warning-dark))',
          bg: 'hsl(var(--warning-bg))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
          bg: 'hsl(var(--info-bg))',
        },
        border: 'hsl(var(--border))',
        'border-strong': 'hsl(var(--border-strong))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        /* Brand palette */
        brand: {
          900: '#0B1620',
          800: '#102232',
          700: '#143149',
          600: '#1A4668',
          500: '#215C87',
        },
        /* Accent extended */
        'accent-blue': {
          700: '#1D4ED8',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#60A5FA',
        },
        'accent-teal': {
          700: '#0F766E',
          600: '#0D9488',
          500: '#14B8A6',
          400: '#2DD4BF',
        },
        gold: {
          500: '#C8A96B',
          400: '#D6B97A',
          300: '#E7D3A4',
        },
        neutral: {
          950: '#0A0F14',
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
          400: '#9CA3AF',
          300: '#D1D5DB',
          200: '#E5E7EB',
          100: '#F3F4F6',
          50: '#F8FAFC',
        },
        /* Sidebar */
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
          muted: 'hsl(var(--sidebar-muted))',
        },
        /* Charts */
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      boxShadow: {
        'card':    '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card-md': '0 4px 12px 0 rgb(0 0 0 / 0.07), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
        'drawer':  '-8px 0 24px 0 rgb(0 0 0 / 0.10), -2px 0 6px 0 rgb(0 0 0 / 0.06)',
        'modal':   '0 20px 48px 0 rgb(0 0 0 / 0.14), 0 8px 16px -4px rgb(0 0 0 / 0.10)',
        'overlay': '0 32px 64px 0 rgb(0 0 0 / 0.18), 0 12px 24px -8px rgb(0 0 0 / 0.12)',
        'focus':   '0 0 0 3px hsl(221 83% 53% / 0.20)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(8px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.25s ease-out',
        'slide-in-right': 'slide-in-right 0.25s ease-out',
      },
    },
  },
  plugins: [],
}
