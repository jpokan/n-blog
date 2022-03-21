export default {
	server: {
		port: 3000, // default: 3000
		host: '0.0.0.0'
	},
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'Jpokan',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'Personal website, blog, and portfolio made with Nuxt.js, Vue.js, TailwindCSS and other cool libraries.'
			},

			// Twitter
			// Test on: https://cards-dev.twitter.com/validator
			{
				hid: 'twitter:card',
				name: 'twitter:card',
				content: 'summary_large_image'
			},
			{ hid: 'twitter:site', name: 'twitter:site', content: 'Jpokan' },
			{
				hid: 'twitter:url',
				name: 'twitter:url',
				content: 'https://jpokan.netlify.app'
			},
			{
				hid: 'twitter:title',
				name: 'twitter:title',
				content: 'Jpokan'
			},
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content:
					'Personal website, blog, and portfolio made with Nuxt.js, Vue.js, TailwindCSS and other cool libraries.'
			},
			{
				hid: 'twitter:image',
				name: 'twitter:image',
				content: 'https://a.storyblok.com/f/98358/800x407/5f03585a87/jpokan800.gif'
			},

			// Open Graph
			// Test on: https://developers.facebook.com/tools/debug/
			{ hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt' },
			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{
				hid: 'og:url',
				property: 'og:url',
				content: 'https://jpokan.netlify.app'
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: 'Jpokan'
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content:
					'Personal website, blog, and portfolio made with Nuxt.js, Vue.js, TailwindCSS and other cool libraries.'
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content: 'https://a.storyblok.com/f/98358/800x407/5f03585a87/jpokan800.gif'
			},
			{
				hid: 'og:image:secure_url',
				property: 'og:image:secure_url',
				content: 'https://a.storyblok.com/f/98358/800x407/5f03585a87/jpokan800.gif'
			},
			{
				hid: 'og:image:alt',
				property: 'og:image:alt',
				content: 'Jpokan'
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	generate: {
		fallback: '404.html'
	},
	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
		'@/assets/css/fonts.css', // Serve custom fonts from server.
		'@/assets/css/tailwind.css'
	],
	router: {
		linkActiveClass: 'dark:text-yellow-500 text-pink-500' // using tailwind styles
	},
	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: ['~/plugins/gsap-extras.js'],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,
	path: '~/components/Svg/',
	ignore: ['**/Animate/*.vue'], // Except this folder

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		// https://color-mode.nuxtjs.org
		'@nuxtjs/color-mode'
	],
	tailwindcss: {
		viewer: false
	},
	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		[
			'@nuxtjs/markdownit',
			{
				html: true,
				injected: true,
				use: [
					'markdown-it-attrs'
					// 'markdown-it-highlightjs'
				]
			}
		],
		[
			'storyblok-nuxt',
			{
				accessToken: process.env.STORYBLOK_SPACE_PREVIEW_TOKEN,
				cache: 'auto',
				cacheProvider: 'memory'
			}
		]
	],
	// Disable @nuxt/color-mode classSuffix to work with TailwindCSS 1.8+
	colorMode: {
		classSuffix: ''
	},
	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		transpile: ['gsap', 'highlight.js']
	}
}
