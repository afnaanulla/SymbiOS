/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#dbe5ff',
          200: '#bfd2ff',
          300: '#93b4ff',
          400: '#608cff',
          500: '#3b64ff',
          600: '#1e3ff7',
          700: '#152ae0',
          800: '#1825b5',
          900: '#192490',
          950: '#121550',
        },
        secondary: {
          50: '#f4f2ff',
          100: '#ebe7ff',
          200: '#d9d2ff',
          300: '#bcadff',
          400: '#9b80ff',
          500: '#7d51ff',
          600: '#6c29ff',
          700: '#5d12f2',
          800: '#4c0fd0',
          900: '#3f10a9',
          950: '#260979',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e0e2e5',
          200: '#c1c5ca',
          300: '#9ba1a9',
          400: '#787f89',
          500: '#5f6672',
          600: '#4a505c',
          700: '#3d414a',
          800: '#2d3038',
          900: '#1a1c22',
          950: '#0a0b0d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}