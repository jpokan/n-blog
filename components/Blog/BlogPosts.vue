<template>
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
    <NuxtLink
      v-for="post in posts"
      :key="post.id"
      :to="`/${post.full_slug}`"
      class="gsap-enter opacity-0 transform scale-90 relative flex flex-col justify-end dark:bg-gray-800 bg-gray-200 rounded-lg group dark:hover:bg-yellow-500 hover:bg-pink-500 duration-300 transition-all hover:text-gray-100 dark:hover:text-gray-900"
    >
      <img
        v-if="post.content.thumbnail.filename"
        :src="post.content.thumbnail.filename"
        :alt="post.content.thumbnail.alt"
        :class="
          post.content.thumbnail_position === 'top'
            ? 'object-top'
            : post.content.thumbnail_position === 'bottom'
            ? 'object-bottom'
            : 'object-center'
        "
        class="h-40 object-cover rounded-md mt-1 mx-1"
      />
      <div>
        <div class="text-xl p-5 h-36 flex flex-col justify-between">
          <p class="font-semibold">{{ post.name }}</p>
          <div
            class="text-sm font-normal flex justify-between text-gray-500 dark:group-hover:text-gray-900 group-hover:text-gray-100"
          >
            <p>{{ publishedAt(post) }}</p>
            <span class="flex items-center gap-1 font-semibold underline"
              >Read<SvgRight class="w-4 fill-current"
            /></span>
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
      '.gsap-enter',
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.2,
        ease: 'slow(0.7, 0.7, false)',
      }
    )
  },
  beforeDestroy() {},
  methods: {
    publishedAt(post) {
      const date = new Date(post.published_at).toLocaleDateString('en-US', {
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
