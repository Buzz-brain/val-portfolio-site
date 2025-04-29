/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#722F37',
          50: '#F2E9EA',
          100: '#E5D3D5',
          200: '#CBA7AB',
          300: '#B17B82',
          400: '#975058',
          500: '#722F37',
          600: '#5B252C',
          700: '#451C22',
          800: '#2E1217',
          900: '#17090B',
        },
        accent: {
          DEFAULT: '#D4AF37',
          50: '#FCF8E8',
          100: '#F9F1D1',
          200: '#F3E3A3',
          300: '#EDD576',
          400: '#E7C748',
          500: '#D4AF37',
          600: '#AA8C2C',
          700: '#7F6921',
          800: '#554616',
          900: '#2A230B',
        },
        secondary: {
          DEFAULT: '#2C3E50',
          50: '#E9ECF0',
          100: '#D3D9E1',
          200: '#A7B3C3',
          300: '#7B8DA5',
          400: '#4F6787',
          500: '#2C3E50',
          600: '#233240',
          700: '#1A2530',
          800: '#111920',
          900: '#080C10',
        },
      },
    },
  },
  plugins: [],
};