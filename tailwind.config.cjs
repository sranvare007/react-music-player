/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dancing-script": ["Dancing Script", "sans-serif"],
        "sofia-sans": ["Sofia Sans", "sans-serif"],
      },
      keyframes: {
        scaleup: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        // scaledown: {
        //   "0%": { transform: "scale(1)" },
        //   "100%": { transform: "scale(0)" },
        // },
      },
      animation: {
        scaleup: "scaleup 0.2s ease-in-out",
        // scaledown: "scaledown 0.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
