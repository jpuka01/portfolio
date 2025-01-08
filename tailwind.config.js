/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './frontend/**/*.html',
    './frontend/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        title: ['Dancing Script', 'serif'],
        headers: ['DM Serif Text', 'serif'],
        body: ['Roboto', 'serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

