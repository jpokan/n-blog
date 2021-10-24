<template>
  <div class="w-full h-full fixed">
    <!-- Animating svgs go here -->
    <div id="FlakeCanvas">
      <component
        :is="value"
        v-for="item in snowFlakes"
        :id="item.id"
        :key="item.id"
        class="snowflake w-6 h-6 fill-current text-gray-200 dark:text-gray-800 absolute -top-6 -left-3 opacity-0"
      ></component>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import SvgSnow from '~/components/Svg/Animate/SvgSnow'
import SvgBall from '~/components/Svg/Animate/SvgBall'

export default {
  components: {
    SvgSnow,
    SvgBall,
  },
  props: {
    snowFlakes: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: 'svg-snow',
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
      let duration = 8
      let easing = 'power1.out'
      if (this.value === 'svg-ball') {
        easing = 'bounce.out'
        duration = 3
      }
      tl.fromTo(
        newFlakeId,
        {
          scale: 0,
          x: posX,
          y: posY,
        },
        {
          duration: 0.5,
          opacity: 1,
          scale: 'random(1,5)',
        }
      ).to(
        newFlakeId,
        {
          immediateRender: true,
          rotate: 'random([-720,720,-360,360,-600,500,400])',
          duration,
          ease: easing,
          y: '100vh',
        },
        '-=0.5'
      )
    },
  },
}
</script>
