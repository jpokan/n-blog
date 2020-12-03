<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-100"
    @click="createFlake($event, svg.length)"
  >
    <Background :svg="svg" />
    <div class="container mx-auto px-5 relative min-h-screen">
      <NavBar class="md:sticky md:top-0 bottom-0 left-0 right-0 fixed z-50" />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { svg: [] }
  },
  mounted() {},
  methods: {
    createFlake(event, length) {
      const newFlake = {
        id: `snowflake-${length}`,
        top: event.clientX,
        left: event.clientY,
      }
      this.svg.push(newFlake)
    },
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
