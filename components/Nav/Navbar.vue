<template>
  <div>
    <Menu
      ref="Menu"
      v-model="menuOpened"
      @show-menu-start="animating = true"
      @show-menu-complete="animating = false"
      @hide-menu-start="
        animating = true
        menuOpened = false
      "
      @hide-menu-complete="
        animating = false
        menuOpened = false
      "
      @link-animation-off="animating = false"
      @link-animation-on="animating = true"
    />
    <div class="relative p-5 gap-5 flex justify-between">
      <Logo
        @logo-click="
          menuOpened = false
          animating = false
        "
      />
      <Burger
        v-model="menuOpened"
        :animating="animating"
        @burger-click="toggleMenuStatus"
      />
      <Links class="hidden md:flex" />
      <Switcher />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpened: false,
      animating: false,
    }
  },
  watch: {
    menuOpened() {
      this.menuOpened ? this.$refs.Menu.showMenu() : this.$refs.Menu.hideMenu()
    },
  },
  methods: {
    toggleMenuStatus() {
      this.menuOpened = !this.menuOpened
    },
  },
}
</script>

<style></style>
