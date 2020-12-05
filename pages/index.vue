<template>
  <div class="max-w-screen-lg mx-auto">
    <Hero />
    <div>Next thing goes here</div>
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
