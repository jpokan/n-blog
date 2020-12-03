<template>
  <div class="w-full h-full fixed">
    <!-- Animating svgs go here -->
    <div id="SvgCanvas" class="">
      <SvgSnow
        v-for="item in snowFlakes"
        :id="item.id"
        :key="item.id"
        :style="`transform: translate3d(${item.top}px,${item.left}px,0px)`"
        class="snowflake w-6 h-6 fill-current text-gray-600 dark:text-gray-300 absolute -top-3 -left-3"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  props: {
    snowFlakes: {
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
    snowFlakes(event) {
      const newFlakeId = `#${event[event.length - 1].id}`
      this.$nextTick(() => this.appear(newFlakeId))
    },
  },
  mounted() {},
  methods: {
    appear(newFlakeId) {
      const tl = gsap.timeline()
      tl.fromTo(
        newFlakeId,
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 'random(1,1.5)',
        }
      ).to(
        newFlakeId,
        {
          rotate: 'random(-360,360)',
          duration: 'random(8,10)',
          y: 'random(1800,1900)',
        },
        '-=0.55'
      )
    },
  },
}
</script>
