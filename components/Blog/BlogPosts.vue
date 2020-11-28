<template>
  <div
    class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <NuxtLink
      v-for="post in posts"
      :key="post.id"
      :to="`/${post.full_slug}`"
      class="post-enter opacity-0 transform scale-90 relative flex flex-col justify-end dark:bg-gray-800 bg-gray-200 rounded-lg group dark:hover:bg-yellow-500 hover:bg-pink-500 duration-100 transition-all hover:text-gray-100 dark:hover:text-gray-900"
    >
      <div
        v-if="post.content.thumbnail.filename"
        :style="`background-image: url(${post.content.thumbnail.filename})`"
        class="h-40 dark:bg-gray-800 bg-gray-200 bg-center bg-cover bg-no-repeat rounded-md relative mt-1 mx-1 shadow-inner"
      ></div>
      <div>
        <div class="relative text-xl p-5 h-36 flex flex-col justify-between">
          <p>
            <NuxtLink :to="`/${post.full_slug}`" class="font-semibold">
              {{ post.name }}
            </NuxtLink>
          </p>
          <div
            class="text-sm font-normal flex justify-between text-gray-500 dark:group-hover:text-gray-900 group-hover:text-gray-100"
          >
            <p>
              {{ createdAt(post) }}
            </p>
            <NuxtLink class="font-semibold underline" :to="`/${post.full_slug}`"
              ><span class="flex items-center gap-1">Read<SvgForward /></span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    gsap.fromTo(
      '.post-enter',
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.15,
        duration: 0.25,
        ease: 'slow(0.7, 0.7, false)',
      }
    )
  },
  beforeDestroy() {},
  methods: {
    createdAt(post) {
      const date = new Date(post.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      return date
    },
  },
}
</script>

<style scoped></style>
