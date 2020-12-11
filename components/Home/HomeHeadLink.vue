<template>
  <a
    :href="linkTo"
    @mouseenter="renderEnter($event)"
    @mousemove="renderMagnet($event)"
    @mouseleave="renderLeave($event)"
  >
    <h1
      class="pointer-events-none flex items-center justify-start transition-transform duration-75"
    >
      {{ text }}
      <slot class="pointer-events-none"></slot>
    </h1>
  </a>
</template>

<script>
export default {
  props: {
    linkTo: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
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
      // Set transitions on the start for smoothness movement in parent and child
      event.target.style.transition = `${this.startSpeed}ms ease-out`
      event.target.style.transition = event.target.childNodes[0].style.transition = `${this.endSpeed}ms cubic-bezier(0, 0.55, 0.45, 1)`

      this.mouseStart = { x: event.clientX, y: event.clientY }
    },
    leave(event) {
      // Reset Button and Text position
      event.target.style.transform = event.target.childNodes[0].style.transform = `translate3d(0px, 0px, 0px)`
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
        translate3d(${newX * 0.65}px, ${newY * 0.65}px, 0px)
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
