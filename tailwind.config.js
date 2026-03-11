/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#1a365d',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600:'#C18C2C'
        },
        cream: {
          50: '#fef7ed',
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

