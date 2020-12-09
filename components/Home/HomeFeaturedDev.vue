<template>
  <section id="dev" class="min-h-screen py-10 md:py-28">
    <h1
      class="font-bold text-2xl md:text-5xl text-center text-pink-500 dark:text-yellow-500 my-20"
    >
      WEB DEVELOPMENT
    </h1>
    <div class="relative mx-auto">
      <div
        class="grid grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2 xl:grid-cols-3"
      >
        <NuxtLink
          v-for="project in blok"
          :key="project.id"
          to="/"
          class="group relative flex flex-col justify-end rounded-lg lg:rounded-2xl group dark:bg-gray-800 bg-gray-200 dark:hover:bg-yellow-500 hover:bg-pink-500 duration-300 transition-all hover:text-gray-100 dark:hover:text-gray-900"
        >
          <img
            v-if="project.content.thumbnail.filename"
            :src="project.content.thumbnail.filename"
            :alt="project.content.thumbnail.alt"
            class="h-44 xl:h-60 object-cover object-left-top lg:rounded-2xl rounded-md mt-1 mx-1"
          />
          <div
            class="text-xl p-5 h-44 flex flex-col justify-between text-gray-700 dark:text-gray-100 dark:group-hover:text-gray-900 group-hover:text-gray-100"
          >
            <p class="font-semibold text-2xl">
              {{ project.name }}
            </p>
            <div class="flex flex-wrap gap-1">
              <label
                v-for="tag in project.tag_list"
                :key="tag"
                class="text-sm leading-none dark:bg-gray-700 bg-gray-300 group-hover:bg-pink-600 dark:group-hover:bg-yellow-600 p-1 rounded"
                >{{ tag }}</label
              >
            </div>
            <div
              class="text-sm font-normal flex justify-between items-end text-gray-600 dark:text-gray-300 dark:group-hover:text-gray-900 group-hover:text-gray-100"
            >
              <p>
                {{ project.content.summary }}
              </p>
              <span class="flex items-center gap-1 font-semibold underline"
                >View<SvgRight class="w-4 fill-current"
              /></span>
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
