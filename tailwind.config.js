/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      colors: {
        primary: colors.zinc,
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "avenir next", "avenir", "segoe ui", "helvetica neue", "helvetica", "Cantarell", "Ubuntu", "roboto", "noto", "arial", "sans-serif"],
      },
    }
  },
  plugins: [],
};
