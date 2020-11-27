<template>
  <div>
    <BlogHeader class="text-gray-400" title="Blog Post" />
    <h1
      class="bg-gray-200 dark:bg-gray-800 rounded-md p-5 text-2xl font-bold text-pink-500 dark:text-yellow-500"
    >
      {{ article.content.title }}
    </h1>
    <p class="p-5">{{ published }}</p>
    <p class="font-medium leading-8 p-5">
      {{ article.content.content }}
    </p>
    <BlogBackButton />
    <BlogLargeSpacer />
  </div>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({ app, route, error }) {
    const version = app.context.isDev ? 'draft' : 'published'
    const slug = route.params.slug
    const res = await app.$storyapi.get('cdn/stories', {
      version,
      startsWith: 'blog/',
      by_slugs: '*/' + slug,
    })
    const article = res.data.stories[0]
    const published = new Date(article.published_at).toUTCString()

    if (!article) return error(`Article with slug ${slug} not found`)
    else {
      return { article, published }
    }
  },
}
</script>
