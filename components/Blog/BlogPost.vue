<template>
  <div v-editable="blok" class="max-w-2xl mx-auto">
    <BlogHeader class="text-gray-400" title="Blog Post" />
    <div class="mb-5">
      <img
        class="rounded-lg min-w-full"
        :src="blok.thumbnail.filename"
        :alt="blok.thumbnail.alt"
      />
    </div>
    <h1
      class="rounded-md p-5 text-3xl md:text-5xl font-semibold text-pink-500 dark:text-yellow-500"
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
    <p v-if="blok.summary" class="p-5 text-lg">
      <span class="font-bold">Summary:</span> {{ blok.summary }}
    </p>
    <div
      v-if="blok.markdown"
      class="p-5 min-w-full prose max-w-prose md:prose-lg text-gray-700 dark:text-gray-100"
      v-html="$md.render(blok.markdown)"
    ></div>
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

<style scoped></style>
