/** @type {import('tailwindcss').Config} */ 

export default {
  extend: {
    backgroundImage: {
      'custom-texture': "url('/path/to/your/texture-image.png')",
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