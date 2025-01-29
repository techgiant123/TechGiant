const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
   
      },
      keyframes: {
       
        scroll: {
      
        },
      },
    },
  },
  plugins: [
    // If you want to define custom colors or variables, use this plugin approach:
    // function to define color variables globally
    // This is just a placeholder since `addVariablesForColors` is not defined.
    // For example:
    function ({ addUtilities }) {
      addUtilities({
        '.scroll-animation': {
          animation: 'scroll 40s forwards linear infinite',
        },
      });
    },
  ],
};
