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
        carouselBackwards: {
          "0%": {
            transform: "translateX(-160px)",
          },
          "50%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-160px)",
          },
        },
      },
      animation: {
        carousel: "carousel 10s infinite",
        carouselBackwards: "carouselBackwards 10s infinite",
      },
    },
  },
  plugins: [],
};
