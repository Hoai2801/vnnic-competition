/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        background: "#333",
        dark: "#181818",
      },
      fontFamily: {
        canopee: ["Canopee", "sans-serif"],
        neue: ["NeueMontreal", "sans-serif"],
      },
    },
  },
  plugins: [],
};
