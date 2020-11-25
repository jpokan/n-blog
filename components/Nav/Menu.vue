<template>
  <div
    id="menu"
    class="fixed top-0 bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 opacity-0 md:hidden"
  >
    <Links
      :is-opened="value"
      @link-click="hideMenu"
      @link-animation-start="$emit('link-animation-on')"
      @link-animation-complete="$emit('link-animation-off')"
    />
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: {
    value: {
      type: Boolean,
    },
  },
  mounted() {
    gsap.set('#menu', { yPercent: 120, opacity: 1 })
  },
  methods: {
    showMenu() {
      gsap.fromTo(
        '#menu',
        {
          yPercent: 120,
          opacity: 1,
          onStart: () => this.$emit('show-menu-start'),
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.25,
          onComplete: () => this.$emit('show-menu-complete'),
        }
      )
    },
    hideMenu() {
      gsap.to('#menu', {
        yPercent: 120,
        opacity: 1,
        duration: 0.5,
        onStart: () => this.$emit('hide-menu-start'),
        onComplete: () => this.$emit('hide-menu-complete'),
      })
    },
  },
}
</script>

<style></style>
