<template>
  <section id="dev" class="min-h-screen py-10 md:py-28">
    <h1
      class="font-bold text-5xl text-center text-pink-500 dark:text-yellow-500 my-20"
    >
      WEB DEVELOPMENT
    </h1>
    <div class="relative mx-auto">
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="project in blok"
          :key="project.id"
          to="/"
          class="group relative flex flex-col justify-end border-2 dark:border-gray-800 border-gray-200 rounded-lg group dark:hover:bg-yellow-500 hover:bg-pink-500 duration-300 transition-all hover:text-gray-100 dark:hover:text-gray-900"
        >
          <img
            v-if="project.content.thumbnail.filename"
            :src="project.content.thumbnail.filename"
            :alt="project.content.thumbnail.alt"
            class="h-40 md:h-80 object-cover object-left-top rounded-md mt-1 mx-1"
          />
          <div>
            <div class="text-xl p-5 h-36 flex flex-col justify-between">
              <p
                class="font-semibold dark:group-hover:text-gray-900 group-hover:text-gray-100 text-gray-700 dark:text-gray-100"
              >
                {{ project.name }}
              </p>
              <div
                class="text-sm font-normal flex justify-between items-end text-gray-500 dark:group-hover:text-gray-900 group-hover:text-gray-100"
              >
                <p>
                  {{ project.content.summary }}
                </p>
                <span class="flex items-center gap-1 font-semibold underline"
                  >View<SvgRight class="w-4 fill-current"
                /></span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style></style>
