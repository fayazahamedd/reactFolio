/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    colors: {
      'primary': "#8265F5", 
      'secondary': "#00040f",
      "ternary": "lemonchiff",
      'black': '#282828',
      'blue' : '#0078ff',
      'true-black': '#000000',
      'white': '#ffffff',
      'grey': '#f5f5f5',
      'grey-dark': '#9C9999',
      'dimWhite': "rgba(255, 255, 255, 0.7)",
      'dimBlue': "rgba(9, 151, 124, 0.1)",
    },

    extend: {
      fontFamily: {
        'inters': ['Inter', 'sans-serif'],
        'lights': ['Inter Light', 'sans-serif'],
        'mediums': ['Inter Medium', 'sans-serif'],
        'semibolds': ['Inter SemiBold', 'sans-serif'],
        'bolds': ['Inter Bold', 'sans-serif'],
      }
    },

    screens: {
      'xs': "480px",
      'ss': "620px",
      'sm': "768px",
      'md': "1060px",
      'lg': "1200px",
      'xl': "1700px",
    }
  },
  plugins: [],
}