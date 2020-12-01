<template>
  <div class="mx-auto max-w-2xl">
    <BlogSpacer key="top" />
    <BlogHeader title="Blog Posts" class="text-pink-500 dark:text-yellow-500" />
    <BlogPosts :posts="blok" />
    <div class="flex gap-2 justify-center w-full p-5 flex-wrap">
      <NuxtLink
        v-for="page in pages"
        :key="page"
        class="w-6 text-center font-semibold rounded bg-gray-200 hover:bg-pink-500 hover:text-gray-100 dark:bg-gray-800 dark:hover:bg-yellow-500 dark:hover:text-gray-900"
        :to="`/blog/page/${page}`"
        >{{ page }}</NuxtLink
      >
    </div>
    <BlogSpacer key="bottom" />
  </div>
</template>

<script>
export default {
  asyncData(context) {
    const perPage = 6
    const page = context.params.page
    const version = context.isDev ? 'draft' : 'published'
    return context.app.$storyapi
      .get('cdn/stories', {
        version,
        is_startpage: false,
        startsWith: 'blog/',
        page,
        per_page: perPage,
      })
      .then((res) => {
        if (res.data.stories.length > 0) {
          const pages =
            res.total % perPage === 0
              ? Math.floor(res.total / perPage)
              : Math.floor(res.total / perPage) + 1
          return { blok: res.data.stories, perPage, pages }
        } else {
          return context.error({
            statusCode: 404,
            message: 'No posts found',
          })
        }
      })
      .catch((res) => {
        if (!res.response) {
          context.error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
  },
}
</script>
