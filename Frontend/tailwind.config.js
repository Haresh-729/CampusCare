/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#1E2251',
        'yellow': '#FFCA5A',
        'red': '#FF1B1C',
        'green': '#13EC00',
        'avocado': '#5C8001',
        'superiory-blue': '#6EA4BF',
        'ebony': '#626C66',
        'light-blue': '#A7CECB',
        'madder': '#B10F2E',
        'light-gray': '#E5E5E5'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

