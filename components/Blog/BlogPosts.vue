<template>
  <div>
    <BlogHeader />
    <BlogSpacer />
    <div class="flex flex-col gap-5 justify-between">
      <NuxtLink v-for="post in posts" :key="post.id" :to="`/${post.full_slug}`">
        <div
          class="rounded-lg dark:bg-gray-800 bg-gray-200 hover:bg-pink-500 dark:hover:bg-yellow-500 p-5 font-semibold text-lg transition-colors duration-100 h-36"
        >
          {{ post.name }}
        </div></NuxtLink
      >
    </div>
    <BlogSpacer />
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
