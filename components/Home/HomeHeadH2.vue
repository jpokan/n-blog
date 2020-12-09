<template>
  <h2
    class="font-semibold text-2xl md:text-3xl lg:text-4xl text-pink-500 dark:text-yellow-500"
  >
    {{ text }}
  </h2>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
