/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,php}",
            "./js/*.js"],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        btnColor: '#88ceeb'
      }
    },
  },
  plugins: [],
}

