/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      screen0: "400px",
      screen1: "500px",
      screen2: "600px",
      screen3: "800px",
      screen4: "900px",
      screen5: "1000px",
      screen6: "1200px",
      screen7: "1350px",
      screen8: "1500px",
      screen9: "1550px",
    },
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
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        carouselBackwards: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "50%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        carousel: "carousel 25s infinite",
        carouselBackwards: "carousel 25s infinite",
      },
    },
  },
  plugins: [],
};
