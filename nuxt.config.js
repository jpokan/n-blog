export default {
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0',
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'jpokan',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Personal website, blog, and portfolio made with Nuxt.js, Vue.js, TailwindCSS and other cool libraries.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  generate: {
    fallback: '404.html',
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/fonts.css', // Serve custom fonts from server.
    {
      src: '~/node_modules/highlight.js/styles/hopscotch.css',
      lang: 'css',
    },
  ],
  router: {
    linkExactActiveClass: 'dark:text-yellow-500 text-pink-500', // using tailwind styles
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/gsap-extras.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/markdownit',
      {
        html: true,
        injected: true,
        use: ['markdown-it-attrs', 'markdown-it-highlightjs'],
      },
    ],
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_SPACE_PREVIEW_TOKEN,
        cacheProvider: 'memory',
      },
    ],
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
  ],
  // Disable @nuxt/color-mode classSuffix to work with TailwindCSS 1.8+
  colorMode: {
    classSuffix: '',
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['gsap'],
  },
}
