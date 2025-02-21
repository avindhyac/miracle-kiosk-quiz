/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#005299',
          light: '#9fddf9',
        },
        background: {
          light: '#f8fcff',
        }
      }
    },
  },
  plugins: [],
};