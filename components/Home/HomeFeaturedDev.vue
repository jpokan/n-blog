<template>
  <section id="dev" class="min-h-screen py-10 md:py-16">
    <h2
      class="font-bold text-2xl md:text-5xl text-center text-pink-500 dark:text-yellow-500 my-20"
    >
      WEB DEVELOPMENT
    </h2>
    <div class="relative mx-auto max-w-screen-lg my-10">
      <div
        class="grid grid-cols-1 gap-5 lg:gap-5 lg:grid-cols-2 justify-items-center"
      >
        <NuxtLink
          v-for="project in featured"
          :key="project.id"
          :to="`/${project.full_slug}`"
          class="group max-w-lg shadow-lg flex flex-col justify-end rounded-lg lg:rounded-2xl group dark:bg-gray-800 bg-gray-200 transition-all hover:-translate-y-2 transform duration-300"
        >
          <img
            v-if="project.content.thumbnail.filename"
            :src="project.content.thumbnail.filename"
            :alt="project.content.thumbnail.alt"
            class="h-80 object-cover object-left-top lg:rounded-2xl rounded-md mt-1 mx-1"
          />
          <div
            class="p-5 h-44 flex flex-col justify-between text-gray-700 dark:text-gray-100"
          >
            <p class="font-semibold text-2xl">
              {{ project.name }}
            </p>
            <p class="sm:w-3/4">
              {{ project.content.summary }}
            </p>

            <div
              class="text-sm font-normal flex justify-between items-end text-gray-600 dark:text-gray-300"
            >
              <ul class="flex flex-wrap gap-1">
                <li
                  v-for="tag in project.tag_list"
                  :key="tag"
                  class="text-sm leading-none dark:bg-gray-700 bg-gray-300 p-1 rounded"
                >
                  {{ tag }}
                </li>
              </ul>
              <div class="flex items-center gap-2 font-semibold underline">
                <SvgRight
                  class="w-5 stroke-current group-hover:translate-x-1 transform duration-150"
                />
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="relative mx-auto max-w-screen-lg mt-20">
      <div
        class="grid grid-cols-1 gap-5 lg:gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        <NuxtLink
          v-for="project in other"
          :key="project.id"
          :to="`/${project.full_slug}`"
          class="group shadow-lg flex flex-col justify-end rounded-lg lg:rounded-2xl group dark:bg-gray-800 bg-gray-200 transition-all hover:-translate-y-2 transform duration-300"
        >
          <img
            v-if="project.content.thumbnail.filename"
            :src="project.content.thumbnail.filename"
            :alt="project.content.thumbnail.alt"
            class="h-44 xl:h-60 object-cover object-left-top lg:rounded-2xl rounded-md mt-1 mx-1"
          />
          <div
            class="text-xl p-5 h-44 flex flex-col justify-between text-gray-700 dark:text-gray-100"
          >
            <p class="font-semibold text-2xl">
              {{ project.name }}
            </p>
            <ul class="flex flex-wrap gap-1">
              <li
                v-for="tag in project.tag_list"
                :key="tag"
                class="text-sm leading-none dark:bg-gray-700 bg-gray-300 p-1 rounded"
              >
                {{ tag }}
              </li>
            </ul>
            <div
              class="text-sm font-normal flex justify-between items-end text-gray-600 dark:text-gray-300"
            >
              <p>
                {{ project.content.year }}
              </p>
              <div class="flex items-center gap-2 font-semibold underline">
                <SvgRight
                  class="w-5 stroke-current group-hover:translate-x-1 transform duration-150"
                />
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
    other: {
      type: Array,
      default: () => [],
    },
    featured: {
      type: Array,
      default: () => [],
    },
  },
  computed: {},
  methods: {},
}
</script>

<style></style>
