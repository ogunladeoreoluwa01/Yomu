/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "synthwave"],
  },
  theme: {
    extend: {
      colors: {
        main: "#00FF94",
        "main-glass": "rgba(0, 255, 148, 0.4)",
        "glass-border": "rgba(255, 255, 255, 0.125)",
        logo: "#FE8743",
        white: "#ffff",
        white2:"#ffffffd5" // Define main color
      },
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
        sub: ["Noto Sans Mono", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
};
