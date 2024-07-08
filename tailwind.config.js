/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "0px", max: "600px" },
      tb: { min: "601px", max: "800px" },
      lp: { min: "801px", max: "1425px" },
      lg: { min: "1426px" }, // From 1426px and up
    },
    extend: {
      colors: {
        nav: "#DFDFDF",
        navbutton: "#3E3AEC",
        buttonColor: "#fffff",
        lightblue:"blue"
      },
    },
  },
  plugins: [],
};