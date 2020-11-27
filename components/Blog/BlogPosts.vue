<template>
  <div
    class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <div
      v-for="post in posts"
      :key="post.id"
      class="relative dark:bg-gray-800 bg-gray-200 rounded-lg group dark:hover:bg-yellow-500 hover:bg-pink-500 duration-100 transition-all hover:text-gray-100 dark:hover:text-gray-900"
    >
      <div
        v-if="post.content.thumbnail.filename"
        :style="`background-image: url(${post.content.thumbnail.filename})`"
        class="h-40 dark:bg-gray-800 bg-gray-200 bg-center bg-cover bg-no-repeat rounded-md relative mt-2 mx-2"
      ></div>
      <div class="relative text-xl p-5 h-36">
        <NuxtLink :to="`/${post.full_slug}`" class="font-semibold">
          {{ post.name }}</NuxtLink
        >
      </div>
      <div
        class="text-sm font-normal absolute bottom-0 left-0 right-0 p-5 flex justify-between text-gray-400 dark:group-hover:text-gray-900 group-hover:text-gray-100"
      >
        <p>
          {{
            new Date(post.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }}
        </p>
        <NuxtLink
          class="font-semibold underline dark:text-gray-600 group-hover:text-gray-100 dark:group-hover:text-gray-900"
          :to="`/${post.full_slug}`"
          >Read</NuxtLink
        >
      </div>
    </div>
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

<style scoped></style>
