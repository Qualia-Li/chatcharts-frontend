/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'border-black'
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FCD40B",
      },
    },
  },
  plugins: [],
} 