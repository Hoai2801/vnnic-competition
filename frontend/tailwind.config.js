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
        primary: "#121212",
        secondary: "#F2F2F2",
      },
      fontFamily: {
        canopee: ["Canopee", "sans-serif"],
        neue: ["NeueMontreal", "sans-serif"],
      },
    },
  },
  plugins: [],
};
