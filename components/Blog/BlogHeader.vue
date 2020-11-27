<template>
  <div
    class="p-5 bg-gray-100 dark:bg-gray-900 top-0 left-0 right-0 md:hidden fixed z-10"
  >
    <h1 class="h-8 text-xl font-semibold flex items-center">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Blog',
    },
  },
}
</script>
