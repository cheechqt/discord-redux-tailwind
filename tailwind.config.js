/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        title: [
          "Sprechen",
          "Whitney Medium",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
        ],
        default: ["Whitney", "Helvetica Neue", "Helvetica", "Arial"],
      },
      colors: {
        blue: "#295DE7",
        blurple: "#7289da",
        purple: "#5865f2",
        green: "#3ba55c",
      },
      
    },
  },
  plugins: [],
};
