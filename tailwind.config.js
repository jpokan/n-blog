/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const colors = require('tailwindcss/colors')
module.exports = {
  // experimental: {
  //   darkModeVariant: true,
  // },
  // dark: 'class',
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
    },
    colors: {
      gray: colors.blueGray,
      pink: colors.pink,
      yellow: colors.yellow,
      lightblue: colors.lightBlue,
    },
    fontFamily: {
      sans: [
        'Proxima Soft',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
      ],
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
