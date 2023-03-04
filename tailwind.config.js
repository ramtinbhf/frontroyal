/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'danawt': 'danawt'
    },
    extend: {
      boxShadow: {
        'mobile-menu': '0 0px 10px 0px rgba(0, 0, 0, .14);',
      }
    },
  },
  plugins: [],
}
