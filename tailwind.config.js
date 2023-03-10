/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#423F71',
      },
      keyframes: {
        heartbeat:
        {
          "0%":
          {
            transform: 'scale(.75)'
          },
          "20%":
          {
            transform: 'scale(1)'
          },
          "40%":
          {
            transform: 'scale(.75)'
          },
          "60%":
          {
            transform: 'scale(1)'
          },
          "80%":
          {
            transform: 'scale(.75)'
          },
          '100%':
          {
            transform: 'scale(.75)'
          }
        }
      },
      animation: {
        'heart-beat': 'heartbeat 1s infinite;',
      },
    },
    screens: {
      'mobile': {
        max: '768px'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),
  require('tailwind-scrollbar'),],
}