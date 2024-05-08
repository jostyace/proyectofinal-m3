/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        'normal': '#1E213A',
        'oscuro': '#100E1D',
        'primario': '#FFEC65',
        'secundario': '#3C47E9',
        'elementos': '#6E707A',
        'textoClaro': '#E7E7EB',
        'textoMedio': '#A09FB1',
        'textoOscuro': '#88869D',


      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif']
      },
      screens: {
      },
      backgroundImage: {
        'fondo': "url('/bg.svg')"
      }
    },
  },
  plugins: [],
}