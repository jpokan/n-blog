<template>
  <div>
    <h1 class="text-xl font-semibold py-5 text-pink-500 dark:text-yellow-500">
      Blog Posts
    </h1>
    <div class="flex flex-col gap-5 justify-between">
      <div
        v-for="post in posts"
        :key="post.id"
        class="rounded-lg dark:bg-gray-800 bg-gray-200 hover:bg-pink-500 dark:hover:bg-yellow-500 p-5 font-semibold text-lg transition-colors duration-100 h-36"
      >
        {{ post.name }}
      </div>
    </div>
    <div class="h-8 p-5 si fixed bg-gray-400 bottom-0 left-0 right-0">
      sesae
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
    },
  },
}
</script>

<style scoped>
.si {
  z-index: 60;
}
</style>
