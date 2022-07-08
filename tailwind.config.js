/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/views/**/*'],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
}
