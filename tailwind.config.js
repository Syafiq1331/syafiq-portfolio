const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace"]
      },
      colors: {
        primaryGray: {
          DEFAULT: "#F7F7FB",
          "200": "#E8E8FB",
          "300": "#BFBFE3"
        }
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat"
        },
        ".shadow-skill": {
          "box-shadow": " 0px 15px 30px 0px rgba(0,0,0,0.1)"
        }
      };
      addUtilities(utilities);
    })
  ],
}