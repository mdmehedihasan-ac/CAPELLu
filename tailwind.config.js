/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e8eae3',
          200: '#d3d8c8',
          300: '#b4bda3',
          400: '#96a17e',
          500: '#7a8763',
          600: '#5f6b4d',
          700: '#4b553e',
          800: '#3e4634',
          900: '#353c2e',
          950: '#1a1f16',
        },
        cream: {
          50: '#fdfcfa',
          100: '#f9f6f0',
          200: '#f2ecde',
          300: '#e8ddc8',
          400: '#dccaab',
        },
        gold: {
          400: '#c9a96e',
          500: '#b8944f',
          600: '#a37d3c',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
