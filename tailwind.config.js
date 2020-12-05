/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
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
    extend: {
      screens: {
        xs: '420px',
      },
      spacing: {
        '10vh': '10vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '75vh': '75vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // used for markdown-it-attr {data=""}
            pre: {
              position: 'relative',
              paddingTop: '1.25rem',
              paddingBottom: '1.25rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
            },
            'pre code::before': {
              content: 'attr(data)',
              position: 'absolute',
              right: '0.5rem',
              top: '0.125rem',
              color: theme('colors.gray.400'),
            },
            strong: {
              fontWeight: '700',
            },
            a: {
              color: theme('colors.gray.700'),
              transition: 'color 150ms',
              '&:hover': {
                color: theme('colors.pink.500'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.100'),
            a: {
              color: theme('colors.gray.100'),
              transition: 'color 150ms',
              '&:hover': {
                color: theme('colors.yellow.500'),
              },
            },

            hr: {
              borderColor: theme('colors.gray.700'),
            },

            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            h4: {
              color: theme('colors.gray.100'),
            },
            h5: {
              color: theme('colors.gray.100'),
            },
            h6: {
              color: theme('colors.gray.100'),
            },

            strong: {
              fontWeight: '700',
              color: theme('colors.yellow.500'),
            },

            code: {
              color: theme('colors.gray.100'),
            },

            blockquote: {
              color: theme('colors.gray.100'),
            },

            'ol > li::before': {
              fontWeight: '400',
              color: theme('colors.gray.300'),
            },

            figcaption: {
              color: theme('colors.gray.100'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
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
