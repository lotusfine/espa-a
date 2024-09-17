// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cormorant Garamond', 'serif'],  // Agrega 'Cormorant Garamond' como fuente personalizada
      },
    },
  },
  plugins: [],
};
