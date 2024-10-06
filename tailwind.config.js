/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{ts,tsx,html,js}',
  ],
  theme: {
    extend: {},
    fontFamily:{
      'body': ['"Inter"'],
    }
  },
  plugins: [
  ],
}

