/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      weight: {
        280: '280px'
      },
      height: {
        78: '78px'
      },
      fontSize: {
        '2.5xl': [
          '26px',
          {
            lineHeight: '34px'
          }
        ]
      },
      colors: {
        mustard: '#CD5B25',
        bgcolor: '#D9D9D9'
      },
      fontFamily: {
        K2D: ['K2D', 'sans-serif']
      }
    }
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
}
