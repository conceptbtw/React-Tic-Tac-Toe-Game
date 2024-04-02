/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        text: "#FFFFFF",
        background: "#000010",
        primary: "#FF9B37",
        darkprimary: "#C86400",
        secondary: "#FF00FF",
        darksecondary: "#C800C8",
        accent: "#379BFF",
        darkaccent: "#0064C8",
      },
    },
  },
  plugins: [],
};
