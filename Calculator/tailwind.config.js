/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,php}"],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        header: '#a5bacb',
        body: '#d8e0e2',
        topButtons: '#4d738a',
        equal: '#f87e03'
      }
    },
  },
  plugins: [],
}

