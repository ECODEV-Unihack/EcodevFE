/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000E30',
        secondary: '#91F460',
        accent: {
          1: '#FEE03D',
          2: '#FCDB2A'
        }
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
