/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'normal': "linear-gradient(to bottom, rgba(7, 57, 75, 0.5), rgba(9, 27, 36, 0.8)), url('/bg-ocean.png')",
        'main': "linear-gradient(to bottom, rgba(7, 57, 75, 0.2), rgba(9, 27, 36, 0.2)), url('/shark.png')",
      },
      fontFamily: {
        Berkshire: ['Berkshire Swash', 'cursive'],
        Raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
