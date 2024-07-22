/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx,html}"],
  theme: {
    screens: {
      tablet: '720px',
      laptop: '1366px',
      desktop: '1921px',
      ultrawide:"2800px"
    },
    fontSize: {
      'h1_cv': ['1.6rem !important', {
        lineHeight: '2rem',
        letterSpacing: '-0.04em',
        fontWeight: '500',
      }],
      'h2_cv': ['1.4rem', {
        lineHeight: '1.8rem',
        letterSpacing: '0.01em',
        fontWeight: '450',
      }],
      'h3_cv': ['1.2rem', {
        lineHeight: '1.6rem',
        letterSpacing: '0.02em',
        fontWeight: '400',
      }],
      'h4_cv': ['1rem', {
        lineHeight: '1.2rem',
        letterSpacing: '0.02em',
        fontWeight: '300',
      }],
      xs: '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      display: '15vmin'
    },
    fontFamily: {
      sans: ["'Shantell Sans'", '"Josefin Sans"', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['"Josefin Slab"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
    },
    extend: {

      backgroundImage: {
        'nubes-pattern': "url('assets/nubesNaranjas.png')",
      },
      boxShadow: {
        '0deg-md': 'inset 20vmin 0vmin 20vmin -8vmin',
        '45deg-md': '10vmin 4vmin 10vmin -8vmin',
        
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
        orange: {
          custom_1: '#ffbe8186',
        },
        purple: {
          custom_1: '#a5a0d683',
        },
        green: {
          custom_1: '#80e5d8a1',
        }
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'transform: translateX(100%)',
        },
      },
    },
  },
  plugins: [],
}

