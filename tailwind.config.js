const typography = require('@tailwindcss/typography');

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: ['./src/**/*.{mdx,tsx,scss}'],
  plugins: [typography],
};
