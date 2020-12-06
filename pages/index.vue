<template>
  <div class="lg:max-w-none max-w-screen-md mx-auto relative">
    <HomeHero />
    <div class="md:px-10">
      <HomeDescription id="description" />
      <div id="dev" class="border h-screen pt-28">Featured posts</div>
      <div id="arch" class="border h-screen pt-28">Featured projects</div>
    </div>
    <div class="p-5">
      <div class="h-8"></div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Homepage',
      meta: [
        {
          name: 'description',
          hid: 'description',
          content: 'Homepage of jpokan website.',
        },
      ],
    }
  },
}
</script>

<style></style>
