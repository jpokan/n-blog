<template>
  <button
    :disabled="animating"
    aria-label="Open or close menu"
    class="hover:text-pink-500 dark:hover:text-yellow-500 transition-colors duration-300 md:hidden relative"
    @click="$emit('burger-click')"
  >
    <SvgBurger
      id="burger"
      class="absolute fill-current stroke-current w-8 h-8"
    />
    <SvgBurgerClose
      id="burger_close"
      class="fill-current stroke-current w-8 h-8 opacity-0"
    />
  </button>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: {
    value: {
      type: Boolean,
    },
    animating: {
      type: Boolean,
    },
  },
  watch: {
    value() {
      if (this.value) {
        this.hideBurger()
        this.showBurgerClose()
      } else {
        this.showBurger()
        this.hideBurgerClose()
      }
    },
  },
  methods: {
    showBurgerClose() {
      gsap.to('#burger_close', {
        opacity: 1,
        duration: 0.25,
      })
    },
    hideBurgerClose() {
      gsap.to('#burger_close', {
        opacity: 0,
        duration: 0.25,
      })
    },
    hideBurger() {
      gsap.to('#burger', {
        opacity: 0,
        duration: 0.25,
      })
    },
    showBurger() {
      gsap.to('#burger', {
        opacity: 1,
        duration: 0.25,
      })
    },
  },
}
</script>

<style></style>
