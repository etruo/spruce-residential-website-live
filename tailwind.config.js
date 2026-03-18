/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#F5F0E8', dark: '#EDE6D8' },
        sage: { light: '#95A688', DEFAULT: '#7A8B6F', dark: '#5E6B55' },
        terracotta: { light: '#D4957B', DEFAULT: '#C67A5C', dark: '#A8614A' },
        charcoal: { light: '#4A4A4A', DEFAULT: '#2C2C2C' },
        'warm-white': '#FDFBF7',
        'warm-gray': '#B5AFA5',
      },
      fontFamily: {
        display: ['DM Serif Display', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
