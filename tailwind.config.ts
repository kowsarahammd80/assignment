/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
      screens: {
          xs: "450px",
          // => @media (min-width: 450px) { ... }

          sm: "575px",
          // => @media (min-width: 576px) { ... }

          md: "768px",
          // => @media (min-width: 768px) { ... }

          lg: "992px",
          // => @media (min-width: 992px) { ... }

          xl: "1200px",
          // => @media (min-width: 1200px) { ... }

          "2xl": "1400px"
          // => @media (min-width: 1400px) { ... }
      },
      extend: {
          colors: {
              white: "#FFFFFF",
              black: "#000000",
              primary: "#F97316",
              secondary: "#d3d3d36c",
              info: "#00B8D9",
              success: "#4e8353",
              warning: "#FFAB00",
              error: "#FF5630",
            
          },
         
      }
  },

  plugins: []
};
