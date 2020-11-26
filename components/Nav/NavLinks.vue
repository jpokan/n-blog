<template>
  <div class="flex items-center justify-center h-full">
    <ul
      class="flex flex-col md:flex-row md:gap-5 md:text-xl font-semibold text-6xl text-left"
    >
      <li
        v-for="link in links"
        :key="link"
        class="menu-links"
        @click="$emit('link-click')"
      >
        <NuxtLink
          class="hover:text-pink-500 dark:hover:text-yellow-500 transition-colors duration-300"
          :to="`/${link}`"
          >{{ link }}</NuxtLink
        >
      </li>
      <div class="flex gap-5 justify-start md:p-0 md:w-24 py-5 w-40">
        <li class="menu-links" @click="$emit('link-click')">
          <a
            rel="noopener"
            title="Github"
            aria-label="Github"
            href="https://github.com/jpokan"
            target="_blank"
            class="hover:text-pink-500 dark:hover:text-yellow-500 transition-colors duration-300"
            ><SvgGithub class="fill-current"
          /></a>
        </li>
        <li class="menu-links" @click="$emit('link-click')">
          <a
            rel="noopener"
            title="Codepen"
            aria-label="Codepen"
            href="https://codepen.io/jpokan"
            target="_blank"
            class="hover:text-pink-500 dark:hover:text-yellow-500 transition-colors duration-300"
            ><SvgCodepen class="fill-current"
          /></a>
        </li>
        <li class="menu-links" @click="$emit('link-click')">
          <a
            rel="noopener"
            title="Twitter"
            aria-label="Twitter"
            href="https://twitter.com/jpokan"
            target="_blank"
            class="hover:text-lightblue-500 transition-colors duration-300"
            ><SvgTwitter class="fill-current"
          /></a>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  props: {
    isOpened: {
      type: Boolean,
    },
  },
  data() {
    return {
      links: ['blog', 'contact', 'photos', 'work'],
    }
  },
  watch: {
    isOpened() {
      this.isOpened ? this.show() : this.hide()
    },
  },
  methods: {
    hide() {
      gsap.set('.menu-links', {
        yPercent: 0,
        opacity: 1,
      })
    },
    show() {
      gsap.fromTo(
        '.menu-links',
        {
          yPercent: 50,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          delay: 0.25,
          duration: 0.3,
          stagger: 0.1,
          onStart: () => this.$emit('link-animation-start'),
          onComplete: () => this.$emit('link-animation-complete'),
        }
      )
    },
  },
}
</script>

<style>
.menu-links {
  min-height: 28px;
  display: flex;
  align-items: center;
}
</style>
