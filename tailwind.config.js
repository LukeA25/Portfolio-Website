/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-gray-400": "rgb(64, 64, 80)",
        "theme-gray-500": "rgb(53, 53, 67)",
        "theme-gray-600": "rgb(45, 45, 57)",
        "theme-gray-700": "rgb(40, 40, 51)",
        "theme-red": "rgb(141, 0, 0)",
      },
    },
  },
};
