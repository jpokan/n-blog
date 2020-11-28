<template>
  <div v-editable="blok" class="max-w-2xl mx-auto">
    <BlogHeader class="text-gray-400" title="Blog Post" />

    <div class="mb-5">
      <img
        class="rounded-lg"
        :src="blok.thumbnail.filename"
        :alt="blok.thumbnail.alt"
      />
    </div>
    <h1
      class="rounded-md p-5 text-2xl font-bold text-pink-500 dark:text-yellow-500"
    >
      {{ name }}
    </h1>
    <p class="p-5 text-gray-500">
      {{
        new Date(published).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }}
    </p>
    <p class="p-5 text-gray-500">{{ blok.description }}</p>
    <p class="font-medium leading-8 p-5">
      {{ blok.content }}
    </p>
    <p class="font-medium leading-8 p-5">
      {{ blok.markdown }}
    </p>
    <BlogBackButton class="md:hidden" />
    <div class="h-5"></div>
    <div class="h-8"></div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
    published: {
      type: String,
    },
    name: {
      type: String,
    },
  },
}
</script>
