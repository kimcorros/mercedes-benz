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
      },
      animation: {
        'scrolldown': 'scrolldown 2.2s cubic-bezier(0.76, 0, 0.3, 1) forwards infinite',
      },
      backgroundPosition: {
        scrolldown: '0 -48px'
      },
      backgroundImage: {
        scroll: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 50%, rgba(116, 113, 112, .3) 50%)'
      }
    },
  },
  plugins: [],
};
