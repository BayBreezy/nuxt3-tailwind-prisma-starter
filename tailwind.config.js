const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  // For dark mode with VueUse
  darkMode: "class",
  theme: {
    extend: {
      //add custom min-height
      minHeight: {
        hero: "calc(100vh - 80px)",
      },
      height: {
        hero: "calc(100vh - 80px)",
      },
      // update font
      fontFamily: { sans: ["Inter", ...defaultTheme.fontFamily.sans] },
      // update colors
      colors: {
        // set dark bg color
        dark: "#090C13",
        // set primary color
        primary: {
          DEFAULT: colors.violet[600],
          ...colors.violet,
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
