<template>
  <div class="flex items-center" @click="$emit('logo-click')">
    <NuxtLink
      class="hover:text-pink-500 dark:hover:text-yellow-500 transition-colors duration-300 font-bold text-2xl leading-none w-6 h-6"
      to="/"
      >JPK
    </NuxtLink>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
