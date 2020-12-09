<template>
  <section id="description" class="py-10">
    <div class="md:grid md:place-content-center md:h-screen">
      <HomeHeadH2 text="Hi, I'm Jorge Po-Kan" />
      <p
        class="font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-10 w-11/12"
      >
        I develop fun and engaging interfaces and interactions with modern
        tools.
      </p>
      <p
        class="text-lg lg:text-2xl xl:text-3xl mt-5 text-gray-600 dark:text-gray-300 lg:w-3/5"
      >
        Love building things with VueJS, NuxtJS, TailwindCSS and serverless
        functions.<br />
        Fan of JAMstack sites.
      </p>
      <p
        class="text-lg lg:text-2xl xl:text-3xl mt-5 text-gray-600 dark:text-gray-300 lg:w-3/5"
      >
        I am also an architect and designer.
      </p>
      <div class="flex items-center justify-end lg:justify-start">
        <HomeHeadLink
          link-to="#dev"
          text="Check my work"
          class="underline md:text-lg lg:text-xl xl:text-2xl mt-5 group flex items-center hover:bg-pink-500 dark:hover:bg-yellow-500"
          ><SvgRight
            class="w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 ml-2 rotate-90 group-hover:translate-y-2 transform transition-transform duration-300"
          />
        </HomeHeadLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
