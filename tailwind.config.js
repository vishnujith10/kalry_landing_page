/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        fontFamily: {
          'lexend': ['Lexend', 'sans-serif'],
          'manrope': ['Manrope', 'sans-serif'],
        },
        colors: {
          'kalry-bg': '#F8F7FC',
          'kalry-text': '#1C161F',
          'kalry-muted': '#4A4458',
          'kalry-purple': '#6D28D9',
          'gradient-start': '#E9D5FF',
          'gradient-end': '#A7F3D0',
          'gradient-2-start': '#FECDD3',
          'gradient-2-end': '#FBCFE8',
        },
        backgroundImage: {
          'gradient-kalry': 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
          'gradient-kalry-2': 'linear-gradient(135deg, var(--gradient-2-start), var(--gradient-2-end))',
        },
        backdropBlur: {
          'xs': '2px',
        },
        borderRadius: {
          'xl': '1rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
        },
        animation: {
          'scroll': 'scroll 10s infinite linear',
          'float': 'float 8s ease-in-out infinite',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
            '100%': { transform: 'translateY(0)' },
          },
          float: {
            '0%': { transform: 'translateY(0px) translateX(0px)' },
            '50%': { transform: 'translateY(-20px) translateX(20px)' },
            '100%': { transform: 'translateY(0px) translateX(0px)' },
          },
        },
        screens: {
          'xs': '475px',
        },
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '92': '23rem',
          '128': '32rem',
        },
        fontSize: {
          'xs': '0.75rem',
          'sm': '0.875rem',
          'base': '1rem',
          'lg': '1.125rem',
          'xl': '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '3.75rem',
          '7xl': '4.5rem',
          '8xl': '6rem',
          '9xl': '8rem',
          '10xl': '10rem',
        },
        zIndex: {
          '60': '60',
          '70': '70',
          '80': '80',
          '90': '90',
          '100': '100',
        },
        blur: {
          'xs': '2px',
          '4xl': '72px',
          '5xl': '96px',
        },
        scale: {
          '102': '1.02',
          '103': '1.03',
          '104': '1.04',
        },
        boxShadow: {
          'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          'glass-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          'glow': '0 0 20px rgba(139, 92, 246, 0.3)',
          'glow-lg': '0 0 30px rgba(139, 92, 246, 0.4)',
        },
        transitionDuration: {
          '400': '400ms',
          '600': '600ms',
          '800': '800ms',
          '900': '900ms',
        },
        backgroundSize: {
          'auto': 'auto',
          'cover': 'cover',
          'contain': 'contain',
          '24': '24px 24px',
        },
        clipPath: {
          'ellipse': 'ellipse(50% 40% at 50% 50%)',
        },
      },
    },
    plugins: [
      // Add custom utilities
      function({ addUtilities, theme }) {
        const newUtilities = {
          '.glassmorphism': {
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid var(--glass-border)',
          },
          '.glass-card': {
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid var(--glass-border)',
          },
          '.text-gradient': {
            backgroundImage: 'linear-gradient(to right, #e0c3fc, #8ec5fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          },
          '.bg-gradient-soft': {
            background: 'linear-gradient(120deg, #e0c3fc, #8ec5fc)',
          },
          '.reveal': {
            opacity: '0',
            transform: 'translateY(16px)',
            transition: 'opacity 600ms ease, transform 600ms ease',
          },
          '.reveal-visible': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '.feature-card': {
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.16)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          },
          '.feature-card:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
          },
          '.plan-card': {
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          },
          '.plan-card:hover': {
            transform: 'translateY(-4px) scale(1.01)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          },
          '.plan-selected': {
            outline: '2px solid #8b5cf6',
            boxShadow: '0 20px 50px rgba(139,92,246,0.25)',
          },
          '.animated-phone-scroll': {
            animation: 'scroll 10s infinite linear',
          },
          '.stat-chip': {
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.35)',
            backdropFilter: 'blur(8px)',
          },
          '.promo-surface': {
            border: '1px solid rgba(255,255,255,0.35)',
            backdropFilter: 'blur(10px)',
          },
          '.promo-grid': {
            position: 'absolute',
            inset: '0',
            pointerEvents: 'none',
            opacity: '0.15',
          },
          '.promo-grid::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)',
            backgroundSize: '24px 24px, 24px 24px',
          },
          '.glassmorphism-container': {
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '2rem',
            position: 'relative',
            overflow: 'hidden',
          },
        };
        
        addUtilities(newUtilities);
      },
    ],
    safelist: [
      // Ensure these classes aren't purged
      'glassmorphism',
      'glass-card',
      'feature-card',
      'plan-card',
      'animated-phone-scroll',
      'reveal',
      'reveal-visible',
      'active-link',
      'plan-selected',
      'stat-chip',
      'promo-surface',
      'promo-grid',
      'glassmorphism-container',
    ],
    corePlugins: {
      // Enable all core plugins
      preflight: true,
    },
    future: {
      hoverOnlyWhenSupported: true,
    },
    experimental: {
      optimizeUniversalDefaults: true,
    },
    darkMode: ['class', '[data-theme="dark"]'],
  }
  