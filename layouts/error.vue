<template>
  <div class="absolute inset-0">
    <div
      class="flex items-center justify-center h-screen flex-col text-center p-5"
    >
      <div class="font-bold text-5xl sm:text-6xl mb-5">PAGE NOT FOUND.</div>
      <NuxtLink
        to="/"
        class="hover:text-pink-500 dark:hover:text-yellow-500 transition-colors duration-300"
        ><span class="flex gap-2 items-center">
          <SvgBack class="w-4 fill-current" />
          Go back to home
        </span></NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
