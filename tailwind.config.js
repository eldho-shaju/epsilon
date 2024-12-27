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
      height: {
        header: "4.5rem",
        breadcrumb: "2.5rem",
        main: "calc(100svh - 4.5rem)",
      },
      spacing: {
        header: "4.5rem",
        breadcrumb: "2.5rem",
      },
    },
  },
  plugins: [],
};
