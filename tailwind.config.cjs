/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        light: "0px 0.1px 2px gray",
        dark: "0px 2px 4px wheat",
      },
    },
  },
  plugins: [],
};
