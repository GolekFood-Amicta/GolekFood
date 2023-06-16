/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'GF-grey': '#3D3D3D',
        'GF-green': '#219653',
        'GF-soft-green': '#5F7161'
      }
    },
  },
  plugins: [],
}

