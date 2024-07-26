/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "back": "#0D0D0D",
        "view-icon": "#2d2d2d"
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif;"
      },
      screens: {
        "mobile": "280px",
      }
    },
  },
  plugins : [  
    // eslint-disable-next-line no-undef
    require( 'tailwind-scrollbar' ) 
] , 
}