/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '100rem',
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        navy: {
          900: '#1a365d',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#C18C2C',
          300: '#FCF38A',
          700: '#DAA520',
        },
        cream: {
          50: '#fef7ed',
          100: '#F7EED9',
          200: '#F5EFE6',
        },
        ink: {
          900: '#1B1B1B',
        },
        sand: {
          300: '#D8C9A6',
          400: '#E6D8B8',
        },
        stone: {
          600: '#6A6A6A',
          700: '#3A3A3A',
        },
        charcoal: {
          700: '#2B2B2B',
        },
        brown: {
          700: '#3b2f2a',
        },
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'wulkan-display': ['Wulkan Display', 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
