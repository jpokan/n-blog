<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-100"
    @click="createFlake($event, snowFlakes.length)"
  >
    <Background v-model="selectedSvg" :snow-flakes="snowFlakes" />

    <div class="container mx-auto px-5 relative min-h-screen">
      <NavBar class="md:relative bottom-0 left-0 right-0 fixed z-50" />
      <Nuxt />
    </div>
    <FlakeControls
      :flakes-created="flakesCreated"
      @on-svg-delete="removeFlake"
      @select-ball="selectedSvg = 'svg-ball'"
      @select-snow="selectedSvg = 'svg-snow'"
    />
  </div>
</template>

<script>
export default {
  data() {
    return { snowFlakes: [], flakesCreated: 0, selectedSvg: 'svg-snow' }
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
