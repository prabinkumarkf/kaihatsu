/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin"); 
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/scripts/**/*.js",
    "../node_modules/preline/dist/*.js",
  ],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#081242",
      secondary: "#4F8CE5",
      para: "#808390",
    },
    extend: {},
  },
  plugins: [ 
    require("@tailwindcss/forms"),
    require('preline/plugin'),
  ],
};
