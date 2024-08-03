/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        navBackground: "url('/src/assets/navbarBackground.png')",
      },
      colors: {
        accDark: "#333945",
        accLight: "#B1D4FA",
      },
      fontFamily: {
        mont: "Montserrat",
      },
    },
  },
  plugins: [],
};
