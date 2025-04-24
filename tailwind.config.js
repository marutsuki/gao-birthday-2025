/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#bb86fc',
        'neon-blue': '#3f51b5',
        'dark-bg': '#121212',
        'dark-surface': '#1a1a1a',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(156, 39, 176, 0.7)',
        'neon-hover': '0 0 25px rgba(156, 39, 176, 0.9)',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #9c27b0, #3f51b5)',
      },
      textShadow: {
        'neon': '0 0 10px rgba(156, 39, 176, 0.7)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-neon': {
          textShadow: '0 0 10px rgba(156, 39, 176, 0.7)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
