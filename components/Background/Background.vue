<template>
  <div class="bg-gray-500 w-full h-full fixed">
    <!-- Animating svgs go here -->
    <div id="SvgCanvas" class="">
      <SvgSnow
        v-for="item in svg"
        :id="item.id"
        :key="item.id"
        :style="`transform: translate3d(${item.top}px,${item.left}px,0px)`"
        class="snowflake w-6 h-6 fill-current text-gray-300 absolute -top-3 -left-3"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  props: {
    svg: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      leaf: 10,
    }
  },
  watch: {
    svg(event) {
      const addedFlakeId = event[event.length - 1].id
      this.$nextTick(() => this.appear(addedFlakeId))
    },
  },
  mounted() {},
  methods: {
    appear(addedFlakeId) {
      gsap.fromTo(
        `#${addedFlakeId}`,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
        }
      )
    },
  },
}
</script>
