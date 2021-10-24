<template>
  <div class="lg:block hidden">
    <FlakeMagnet
      aria-label="Toggle snow"
      :amount="0.4"
      component="snow"
      class="fixed bottom-40 right-0 cursor-pointer w-20 h-20 m-5"
      @click.native="$emit('select-snow')"
    >
    </FlakeMagnet>
    <FlakeMagnet
      aria-label="Toggle ball"
      :amount="0.4"
      component="ball"
      class="fixed bottom-20 right-0 cursor-pointer w-20 h-20 m-5"
      @click.native="$emit('select-ball')"
    >
    </FlakeMagnet>
    <div
      id="SvgControls"
      class="m-5 bottom-0 right-0 lg:grid grid-cols-1 gap-2 fixed w-20"
    >
      <div>Flakes: {{ flakesCreated }}</div>

      <button
        class="flex bg-gray-200 dark:bg-gray-800 hover:text-gray-100 dark:hover:text-gray-900 hover:bg-pink-500 dark:hover:bg-yellow-500 transition-colors duration-150 justify-center rounded"
        @click.stop="$emit('on-svg-delete')"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flakesCreated: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
