const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sky: {
          550: '#0ABEFF',
        }
      }
    },
  },
  plugins: [],
};
