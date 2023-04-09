/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      manrope: ['Manrope', 'serif']
    },
    fontFace: {
      '@import': "url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Manrope:wght@500&display=swap');",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}