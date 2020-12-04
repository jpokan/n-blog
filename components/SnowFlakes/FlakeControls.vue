<template>
  <div>
    <div
      id="SvgControls"
      class="p-5 bottom-0 lg:grid grid-cols-1 gap-2 fixed hidden w-36"
    >
      <div>Flakes: {{ flakesCreated }}</div>
      <button
        class="flex bg-gray-200 dark:bg-gray-800 hover:text-gray-100 dark:hover:text-gray-900 hover:bg-pink-500 dark:hover:bg-yellow-500 transition-colors duration-150 justify-center rounded"
        @click.stop="$emit('select-ball')"
      >
        <SvgBall class="w-6 h-6 fill-current" />
      </button>
      <button
        class="flex bg-gray-200 dark:bg-gray-800 hover:text-gray-100 dark:hover:text-gray-900 hover:bg-pink-500 dark:hover:bg-yellow-500 transition-colors duration-150 justify-center rounded"
        @click.stop="$emit('select-snow')"
      >
        <SvgSnow class="w-6 h-6 fill-current" />
      </button>
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
import SvgSnow from '~/components/Svg/Animate/SvgSnow'
import SvgBall from '~/components/Svg/Animate/SvgBall'

export default {
  components: {
    SvgSnow,
    SvgBall,
  },
  props: {
    flakesCreated: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>
