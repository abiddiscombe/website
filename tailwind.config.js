/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", "Menlo", "Consolas", "Monaco", "Liberation Mono", "Lucida Console", "monospace"],
      },
    }
  },
  plugins: [],
};
