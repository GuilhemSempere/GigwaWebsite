/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#303030',
        primary: '#6AFF79',
        "light-primary": '#D7FFDB',
        secondary: '#183D3D',
        "light-secondary1": '#244F4F',
        "light-secondary2": "#416D6D",
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      image: {
        app: 'url("/src/assets/app.png")',
    },
    },
  },
  plugins: [],
}