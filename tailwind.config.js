module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-dark': "url('/img/hero-dark.jpg')",
        'footer-bg': "url('/img/footer-bg.jpg')",
      },
      colors: {
        netflix: '#E41E26',
      },
    },
  },
  plugins: [],
}
