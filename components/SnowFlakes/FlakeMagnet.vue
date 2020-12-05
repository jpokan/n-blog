<template>
  <div
    class="text-gray-200 hover:text-pink-500 dark:text-gray-800 dark:hover:text-yellow-500"
    @mouseenter="renderEnter($event)"
    @mousemove="renderMagnet($event)"
    @mouseleave="renderLeave($event)"
  >
    <component
      :is="`svg-${component}`"
      class="fill-current pointer-events-none"
    >
    </component>
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
    component: {
      type: String,
      default: 'snow',
    },
    amount: {
      type: Number,
      default: 0.18,
    },
    startSpeed: {
      type: Number,
      default: 150,
    },
    endSpeed: {
      type: Number,
      default: 600,
    },
  },
  data() {
    return {
      mouse: 'null',
      center: 'null',
    }
  },
  methods: {
    enter(event) {
      event.target.style.transition = `${this.startSpeed}ms ease-out`
      this.mouseStart = { x: event.clientX, y: event.clientY }
      console.log(event)
    },
    leave(event) {
      // Transition speed when mouse leave
      event.target.style.transition = event.target.childNodes[0].style.transition = `${this.endSpeed}ms cubic-bezier(0, 0.55, 0.45, 1)`

      // Reset Button and Text position
      event.target.style.transform = event.target.childNodes[0].style.transform = `translate(0px, 0px)`
    },
    magnet(event) {
      const amount = this.amount

      // Lerp
      function lerp(start, end, amount) {
        return (1 - amount) * start + amount * end
      }

      // Get current mouse position (mx, my) on client
      const mouseX = event.clientX
      const mouseY = event.clientY
      this.mouse = { x: mouseX, y: mouseY }
      // console.log('Mouse: ' + mouseX, mouseY)

      // OffsetLeft & OffsetTop must be related from 0,0 viewport
      const viewportOffset = event.target.getBoundingClientRect()
      const offsetLeft = viewportOffset.left
      const offsetTop = viewportOffset.top
      // Get center position (cx, cy) of item
      const centerX = offsetLeft + event.target.offsetWidth / 2
      const centerY = offsetTop + event.target.offsetHeight / 2
      this.center = { x: centerX, y: centerY }
      // console.log('Center: ' + centerX, centerY)

      // Distance to translate in x and y axis
      const x = centerX - mouseX
      const y = centerY - mouseY
      // console.log('x=' + x * -1, 'y=' + y * -1)

      const newX = lerp(0, x, amount)
      const newY = lerp(0, y, amount)

      // Translate button, inverted values to make it follow mouse
      event.target.style.transform = `
        translate3d(${-newX}px, ${-newY}px, 0)
      `

      // Translate inner text element
      event.target.childNodes[0].style.transform = `
        translate3d(${newX * 0.6}px, ${newY * 0.6}px, 0)
      `
    },
    renderMagnet(event) {
      requestAnimationFrame(() => this.magnet(event))
    },
    renderEnter(event) {
      requestAnimationFrame(() => this.enter(event))
    },
    renderLeave(event) {
      requestAnimationFrame(() => this.leave(event))
    },
  },
}
</script>

<style></style>
