module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'spacemono': ['Spacemono', 'sans-serif'],
      'sporting': ['Sporting', 'sans-serif']
    },
    extend: {
      backgroundImage: theme => ({
        'film-reel': "url('images/film-reel.png')",
      }),
      colors: {
        'maroon-oak': {
          '50': '#f7f3f3', 
          '100': '#efe6e8', 
          '200': '#d6c1c5', 
          '300': '#bd9ba2', 
          '400': '#8c505d', 
          '500': '#5A0517', 
          '600': '#510515', 
          '700': '#440411', 
          '800': '#36030e', 
          '900': '#2c020b'
      },
      'scarlet': {
        '50': '#fef3f3', 
        '100': '#fde8e8', 
        '200': '#fbc4c4', 
        '300': '#f8a1a1', 
        '400': '#f35b5b', 
        '500': '#EE1414', 
        '600': '#d61212', 
        '700': '#b30f0f', 
        '800': '#8f0c0c', 
        '900': '#750a0a'
    },
    'blue-charcoal': {
      '50': '#f2f2f3', 
      '100': '#e6e6e8', 
      '200': '#c0c0c5', 
      '300': '#999ba2', 
      '400': '#4d4f5c', 
      '500': '#010416', 
      '600': '#010414', 
      '700': '#010311', 
      '800': '#01020d', 
      '900': '#00020b'
    },
      }
    },
  },
  variants: {
    extend: {
      width: ['hover'],
    },
  },
  plugins: [],
}
