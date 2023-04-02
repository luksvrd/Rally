/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFFFF",
        black: "#000000",
        "rally-purple": "#A229F2",
        "rally-blue": "#314DD1",
        "light-grey": "#A6A6A6",
        "fade-text-grey": "#C0C8C2",
      },
      fontFamily: {
        audiowide: ["Audiowide", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
