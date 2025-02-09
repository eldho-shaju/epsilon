/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{js,jsx}",
    "./src/pageRoutes/**/*.{js,jsx}",
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
        mobileheader: "3.5rem",
        breadcrumb: "2.5rem",
        main: "calc(100svh - 4.5rem)",
      },
      spacing: {
        mobileheader: "3.5rem",
        header: "4.5rem",
        breadcrumb: "2.5rem",
        mobile_margin: "3%",
        mobile_line_height: "6",
        pdp_image: "7rem",
      },
      screens: {
        xs: "340px", // Extra small screen
        sm: "600px", // Small screen
        md: "600px", // Alias for medium screen start
        lg: "900px", // Large screen
      },
      colors: {
        primary: "#E30613",
        secondary: "#dc2626",
        natural_gray: "#F7F7F7",
        dark_gray: "#4A4A4A",
        white: "#FFFFFF",
        maroon: "#7a4f4f",
      },
      lineHeight: {
        mobile_line_height: "1.6",
      },
    },
  },
  plugins: [],
};
