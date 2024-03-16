/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js,css}"
  '/node_modules/preline/preline.js',],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#081242",
      secondary: "#4F8CE5",
      para: "#808390",
    },
    extend: {
       
    },
    plugins: [
      require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
      require('preline/plugin'),
   
    
    ],
  },
};
