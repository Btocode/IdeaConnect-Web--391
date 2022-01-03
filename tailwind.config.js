module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': [
        {'min': '200px',
          'max':'500px'}
      ],
      'md': [
        {'min': '868px'}
      ],
      'md1': [
        {'min': '500px'}
      ],
      'cmd1': [
        {'min': '1150px'}
      ],
      'lg': '1151px',
      'xl': '1400px',
    },
    extend: {},
    colors: {
      // Configure your color palette here
      'blue-bg': '#224957',
      'black': '#000000',
      'white': '#EEEEEE',
      'cleanwhite': '#FFFF',
      'red': '#E80000',
      'green': '#116530',
      'upgreen': '#2a9d8f',
      'downred': '#e63946',
      'bgname': '#A55656',
      'bgnoti': '#D9D9D9',
      'primary': '#C4C4C4',
      'bg-text': '#224957',
      'login-bg': '#20DF7F',
      'create': '#041C32',
      gray : {
        400 : '#969798',
        500 : '#666666',
        700 : '#353535',
        800 : '#262626',
        900 : '#171818',
        600 :  '#232529'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
