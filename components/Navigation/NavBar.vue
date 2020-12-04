<template>
  <div>
    <NavMenu
      ref="Menu"
      v-model="menuOpened"
      @show-menu-start="animating = true"
      @hide-menu-start="
        animating = true
        menuOpened = false
      "
      @hide-menu-complete="animating = false"
      @link-animation-off="animating = false"
    />
    <div
      class="p-5 md:p-10 gap-5 flex justify-between dark:bg-gray-900 bg-gray-100 md:bg-transparent md:dark:bg-transparent"
    >
      <NavLogo
        @logo-click="
          menuOpened = false
          animating = false
        "
      />
      <NavBurger
        v-model="menuOpened"
        :animating="animating"
        @burger-click="toggleMenuStatus"
      />
      <NavLinks class="hidden md:flex" />
      <NavSwitcher />
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
