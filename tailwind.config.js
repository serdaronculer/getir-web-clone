/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
    },

    extend: {
      colors: {
        "brand-color": "#4c3398",
        "nav-text-color": "#dbdbff",
        "primary-color": "#5d3ebc",
        "secondary-color": "#7849f7",
        "brand-yellow": "#ffd300",
        "black": "#191919",
        "primary-light": "#f3f0fe"
      },
    },
  },
  plugins: [],
}


//Main page register input label color #838287