/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      slider: {
        handle: 'h-6 w-6 bg-gray-400 rounded-lg',
        track: 'h-1 bg-gray-200'
      },
      colors: {
        'GF-grey': '#3D3D3D',
        'GF-green': '#219653',
        'GF-soft-green': '#5F7161'
      }
    },
  },
  plugins: [],
}

