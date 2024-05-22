/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      suit: ['SUIT Variable', 'sans-serif'],
    },
    screens: {
      'sm': '480px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

