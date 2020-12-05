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
    <div class="p-5 md:p-10 gap-5 flex justify-between">
      <NavLogo
        class="z-10"
        @logo-click="
          menuOpened = false
          animating = false
        "
      />
      <NavLinks class="hidden md:flex" />
      <NavBurger
        v-model="menuOpened"
        class=""
        :animating="animating"
        @burger-click="toggleMenuStatus"
      />
      <NavSwitcher class="" />
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
