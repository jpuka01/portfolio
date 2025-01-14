/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
    './public/index.html',
  ],
  content: [
    './frontend/**/*.html',
    './frontend/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        title: ['Poppins', 'serif'],
        headers: ['DM Serif Text', 'serif'],
        body: ['Roboto', 'serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

