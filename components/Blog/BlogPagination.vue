<template>
  <div class="flex gap-2 justify-center w-full p-5 flex-wrap">
    <NuxtLink
      v-for="page in pages"
      :key="page"
      class="w-6 text-center font-semibold rounded bg-gray-200 hover:bg-pink-500 hover:text-gray-100 dark:bg-gray-800 dark:hover:bg-yellow-500 dark:hover:text-gray-900"
      :to="`/blog/page/${page}`"
      >{{ page }}</NuxtLink
    >
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      default: 1,
    },
  },
}
</script>
