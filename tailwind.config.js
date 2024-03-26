/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./**/*.{html,js}",
    "./scripts/**/*.js",
    "node_modules/preline/dist/*.js",
  ],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      main: "#081242",
      sec: "#4F8CE5",
      para: "#808390",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      yellow: colors.yellow,
      blue: colors.blue,
    },
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms"), 
  require("preline/plugin"), ],
  
};
