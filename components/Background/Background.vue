<template>
  <div class="w-full h-full fixed">
    <!-- Animating svgs go here -->
    <div id="SvgCanvas">
      <SvgSnow
        v-for="item in snowFlakes"
        :id="item.id"
        :key="item.id"
        class="snowflake w-6 h-6 fill-current text-gray-300 dark:text-gray-200 absolute stroke-1 -top-3 -left-3"
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
  watch: {
    snowFlakes(event) {
      if (event.length >= 1) {
        const lastFlake = event[event.length - 1]
        this.$nextTick(() =>
          this.appear(`#${lastFlake.id}`, lastFlake.top, lastFlake.left)
        )
      }
    },
  },
  mounted() {},
  methods: {
    appear(newFlakeId, posX, posY) {
      const tl = gsap.timeline()
      tl.fromTo(
        newFlakeId,
        {
          scale: 0,
          x: posX,
          y: posY,
        },
        {
          duration: 0.5,
          scale: 'random(0.5,5)',
        }
      ).to(
        newFlakeId,
        {
          immediateRender: true,
          rotate: 'random([-720,720,-360,360,-600,500,400])',
          duration: 8,
          y: '100vh',
        },
        '-=0.55'
      )
    },
  },
}
</script>
