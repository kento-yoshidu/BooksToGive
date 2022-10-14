/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './pages/components/**/*.{js,ts,jsx,tsx}'
    ],
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
