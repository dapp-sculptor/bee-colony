/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        ready: 'ready 1s infinite',
        play: 'playing 1s infinite',
        fire: 'fire 2s infinite'
      },
      fontFamily: {
        "fenomen-sans-book": "Fenomen Sans Book",
        "Montserrat": "Montserrat",
        "nippori": "Nippori"
      },
      screens: {
        '1cs': '700px',
        '2cs': '1200px',
        '3cs': '1920px',
        '4cs': '2400px',
      }
    }
  },
  plugins: []
}
