/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{js,jsx}",
    "./src/page/**/*.{js,jsx}",
    "./src/widget/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      inset: {
        "4.5rem": "4.5rem",
      },
      height: {
        "4.5rem": "4.5rem",
      },
    },
  },
  plugins: [],
};
