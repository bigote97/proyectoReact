module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        verde: {
          spearmint: '#94C973',
          darseafoamk: '#2F5233',
          oscuro: '#1A4314',
          kelly: '#B1D8B7',
          lime: '#76B947',
        }
      }
    },  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
