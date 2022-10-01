/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Berkshire: ['Berkshire Swash', 'cursive'],
        Raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
