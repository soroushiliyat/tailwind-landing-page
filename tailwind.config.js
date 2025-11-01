/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ← خیلی مهم!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};