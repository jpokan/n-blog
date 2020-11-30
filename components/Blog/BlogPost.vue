<template>
  <div v-editable="blok" class="max-w-2xl mx-auto">
    <BlogHeader class="text-gray-400" title="Blog Post" />
    <div v-if="blok.thumbnail.filename" class="mb-5">
      <img
        class="rounded-lg min-w-full max-h-60 sm:max-h-80 md:max-h-96 object-cover"
        :src="blok.thumbnail.filename"
        :alt="blok.thumbnail.alt"
      />
    </div>
    <h1
      class="rounded-md md:px-5 py-5 text-3xl md:text-5xl font-semibold text-pink-500 dark:text-yellow-500"
    >
      {{ title }}
    </h1>
    <p class="md:p-5 text-gray-500">
      {{
        new Date(published).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }}
    </p>
    <p v-if="blok.summary" class="md:p-5 py-10 md:text-xl">
      <span class="font-bold">Summary:</span> {{ blok.summary }}
    </p>
    <div
      v-if="blok.markdown"
      class="md:p-5 min-w-full prose max-w-none md:prose-lg dark:prose-dark"
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
      default: 'Published date',
    },
    title: {
      type: String,
      default: 'Title',
    },
  },
}
</script>

<style scoped></style>
