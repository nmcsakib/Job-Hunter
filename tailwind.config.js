/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      manrope: ['Manrope', 'serif'],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}