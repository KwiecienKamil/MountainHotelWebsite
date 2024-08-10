/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        navBackground: "url('/src/assets/navbarBackground.png')",
      },
      colors: {
        accLight: "#FE7C12",
        dark: "#1B1C1B",
        light: "#FCFFFC",
      },
      fontFamily: {
        mont: "Montserrat",
      },
      keyframes: {
        carousel: {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(-120px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        carousel: "carousel 30s infinite",
      },
    },
  },
  plugins: [],
};
