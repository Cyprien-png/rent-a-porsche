/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,svg}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'Porsche-red' : '#9D0620',
        'Porsche-yellow': '#F8CD02',
        'Porsche-white' : '#F4F4F4',
        'Porsche-gray' : '#A3ACB3',
        'background-gray': '#0E0E0E',
        'default-100' : '#1e1e1e',
        'default-500' : '#FFFFFF',
        'background' : '#585858',
        'default-foreground' : '#FFFFFF',
        'foreground' : '#FFFFFF'
      },
      fontFamily: {
        "Porscha": ["'911 Porscha'", 'sans-serif'],
        "Next": ["'Porsche Next'", 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
