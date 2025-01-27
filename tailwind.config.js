/** @type {import('tailwindcss').Config} */ 

export default {
  extend: {
    backgroundImage: {
      'custom-texture': "url('/path/to/your/texture-image.png')",
   },
    keyframes: {
      bounce: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-6px)' },
      },
      'bounce2': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-3px)' },
      },
    },
    animation: {
      'bounce': 'bounce 0.5s infinite',
      'bounce2': 'bounce2 0.5s infinite',
    },
  },
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
}