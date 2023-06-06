/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../templates/**/*.{html,js}",
    "../docs/**/*.{html,js}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      primary: '#8CBDB9',
      secondary: '#E09E50',
      gray50:'#222222',
      gray40:'#717171',
      gray30: '#dddddd',
      gray20: '#F3F3F3',
      background: '#f3f3f3',
      green400:'#a3e635',
      navbar: '#8CBDB9',
      green600:'#059669',
      red400:'#f87171',
      red600:'#dc2626'
    },
    extend: {},
  },
  plugins: [],
}

