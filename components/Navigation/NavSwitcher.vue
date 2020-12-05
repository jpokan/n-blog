<template>
  <div class="items-center flex">
    <button
      aria-label="Switch color mode"
      class="hover:text-pink-500 dark:hover:text-yellow-500 transition-colors duration-300 relative"
      @click="toggleColorMode()"
    >
      <SvgMoon id="moon" class="fill-current absolute w-6 h-6" />
      <SvgSun id="sun" class="fill-current w-6 h-6" />
    </button>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  mounted() {
    this.checkColorMode()
  },
  methods: {
    checkColorMode() {
      const mode = localStorage.getItem('nuxt-color-mode')
      const color = this.$colorMode.value
      // const unknown = this.$colorMode.unknown

      if (mode === 'light') {
        this.showMoon()
        this.hideSun()
      } else if (mode === 'dark') {
        this.showSun()
        this.hideMoon()
      } else if (color === 'system') {
        this.showMoon()
        this.hideSun()
      }
    },
    toggleColorMode() {
      if (this.$colorMode.preference === 'dark') {
        this.$colorMode.preference = 'light'
        this.hideSun()
        this.showMoon()
      } else {
        this.$colorMode.preference = 'dark'
        this.hideMoon()
        this.showSun()
      }
    },
    showSun() {
      gsap.to('#sun', {
        opacity: 1,
        duration: 1,
        rotation: 90,
        ease: 'slow(0.7, 0.7, false)',
        scale: 1,
      })
    },
    showMoon() {
      gsap.to('#moon', {
        opacity: 1,
        duration: 1,
        ease: 'slow(0.7, 0.7, false)',
        rotation: 360,
        scale: 1,
      })
    },
    hideSun() {
      gsap.to('#sun', {
        opacity: 0,
        ease: 'slow(0.7, 0.7, false)',
        duration: 1,
        rotation: 180,
        scale: 0,
      })
    },
    hideMoon() {
      gsap.to('#moon', {
        opacity: 0,
        ease: 'slow(0.7, 0.7, false)',
        duration: 1,
        rotation: -360,
        scale: 0,
      })
    },
  },
}
</script>

<style></style>
