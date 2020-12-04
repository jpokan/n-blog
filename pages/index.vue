<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 max-w-screen-lg mx-auto gap-5 py-20"
  >
    <div class="lg:col-span-2 rounded-lg">
      <LinkMagnet
        text="FRONT END"
        class="font-bold text-5xl sm:text-6xl text-gray-800 dark: dark:hover:text-yellow-500 hover:bg-pink-500 dark:hover:bg-yellow-500 px-5"
      />
      <LinkMagnet
        text=" DEVELOPER"
        class="font-bold text-5xl sm:text-6xl text-gray-800 dark: dark:hover:text-yellow-500 hover:bg-pink-500 dark:hover:bg-yellow-500 px-5"
      />
      <LinkMagnet
        text="+ ARCHITECT,"
        class="font-bold text-5xl sm:text-6xl text-gray-300 hover:bg-pink-500 dark:hover:bg-yellow-500 px-5"
      />
      <LinkMagnet
        text="DESIGNER"
        class="font-bold text-5xl sm:text-6xl text-gray-300 hover:bg-pink-500 dark:hover:bg-yellow-500 px-5"
      />
    </div>
    <div class="bg-pink-500 dark:bg-yellow-500 rounded-lg p-5">
      Jorge Po-Kan
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
