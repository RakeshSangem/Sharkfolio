/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'main-pattern': "linear-gradient(to bottom, rgba(7, 57, 75, 0.5), rgba(9, 27, 36, 0.8)), url('./src/assets/bg-ocean.png')",
      },
      fontFamily: {
        Berkshire: ['Berkshire Swash', 'cursive'],
        Raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
