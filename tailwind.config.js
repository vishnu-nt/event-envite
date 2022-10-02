/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        purple: '#240D57',
        'gray-1': '#4F4F4F',
        'gray-2': '#828282',
        'gray-3': '#bdbdbd',
        'purple-secondary-1': '#CCB6FF',
        'purple-secondary-2': '#EDE5FF',
        'purple-2': '#8456EC',

      },
      backgroundImage: {
        none: 'none',
        'gradient-to-t': 'linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%);',
      },
    },
  },
  plugins: [],
}
