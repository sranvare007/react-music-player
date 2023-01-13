/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['Dancing Script', 'sans-serif'],
        'sofia-sans': ['Sofia Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
