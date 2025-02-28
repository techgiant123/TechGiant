const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#120420",
        // bgColor: "#212B38",
        navBg: "#1A0B2E",
        cardBg: "#726EFF",
        carousel1: "#500073",
        carousel2: "#AA60C8",
        carousel3: "#D69ADE",
        carousel4: "#EABDE6",
      },
      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
        blink: "blink 0.8s infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },
        scroll: {},
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
        ".scroll-animation": {
          animation: "scroll 40s forwards linear infinite",
        },
      });
    },
  ],
};
