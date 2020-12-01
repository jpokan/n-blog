<template>
  <div>
    <BlogSpacer key="top" />
    <BlogHeader title="Blog Posts" class="text-pink-500 dark:text-yellow-500" />
    <BlogPosts :posts="blok" />
    <div class="flex justify-center w-full p-5 flex-wrap">
      <NuxtLink
        v-for="page in pages"
        :key="page"
        class="mx-2 font-semibold"
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
