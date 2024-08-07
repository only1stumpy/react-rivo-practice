/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
    '2xl': {'max': '1535px'},
    'xl': {'max': '1279px'},
    'lg': {'max': '1023px'},
    'md': {'max': '768px'},
    'sm': {'max': '639px'},
    'vsm':{'max':'375px'}
  },
  fontFamily: {
    'road' : ['RoadRadio','sans-serif'],
    'gilroy':['Gilroy','sans-serif']
  },
    extend: {},
  },
  plugins: [],
}

