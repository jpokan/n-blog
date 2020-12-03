<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-100"
    @click="createFlake($event, snowFlakes.length)"
  >
    <Background :snow-flakes="snowFlakes" @on-fall-complete="removeFlake" />
    <div class="container mx-auto px-5 relative min-h-screen">
      <NavBar class="md:sticky md:top-0 bottom-0 left-0 right-0 fixed z-50" />
      <Nuxt />
    </div>
    <div class="fixed bottom-0 p-5">Flakes: {{ flakesCreated }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return { snowFlakes: [], flakesCreated: 0 }
  },
  watch: {
    $route() {
      this.removeFlake()
    },
  },
  mounted() {},
  methods: {
    removeFlake() {
      this.snowFlakes = []
    },
    createFlake(event, length) {
      const newFlake = {
        id: `snowflake-${this.flakesCreated}`,
        top: event.clientX,
        left: event.clientY,
      }
      this.flakesCreated += 1
      this.snowFlakes.push(newFlake)
    },
  },
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
