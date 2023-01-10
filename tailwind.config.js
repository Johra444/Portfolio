/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gris: '#202023',
        gris2: 'rgba(255, 255, 255, 0.06)',
        current: 'currentColor',
        myPurple: '#805AD5',
        peach: '#fbd38d',
      },
      animation: {
        'opacityTransition': 'opacityTransition 1.2s',
        'opacityTransition2': 'opacityTransition 0.8s',
    },
    keyframes: {
      opacityTransition: {
            '0%': {
              opacity: 0,
              transform: 'translateY(20px)'
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0px)'
            },
        }
    }
    },
  },
  plugins: [],
}
