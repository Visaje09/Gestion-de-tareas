/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        gray: {
          750: '#2f3a4b', // Tonos intermedios para modo oscuro
        }
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      }
    }
  },
  darkMode: 'class', // Habilitar modo oscuro basado en clase
  plugins: [],
}

