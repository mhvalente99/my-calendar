/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#FFF',


      gray: {
        400: '#7C7C8A',
        800: '#202024',
        900: '#121214',
      },
      green: {
        50: '#F0FDF4',
        600: '#16A34A',
      },
      red: {
        700: '#CA202080',
      },
    },
    extend: {
      fontFamily: 'Inter, sans-serif'
    },
  },
  plugins: [],
}
