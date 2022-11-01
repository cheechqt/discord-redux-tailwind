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
        default_bold: [
          "Whitney Bold",
          "Whitney",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
        ],
      },
      colors: {
        blue: "#295DE7",
        blurple: "#7289da",
        purple: "#5865f2",
        green: "#3ba55c",
      },
      gridTemplateColumns: {
        12: "repeat(12,1fr)",
        8: "repeat(8,1fr)",
        4: "repeat(4,1fr)",
      },
    },
  },
  plugins: [],
};
