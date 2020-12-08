<template>
  <div class="max-w-screen-md lg:px-5 relative mx-auto">
    <BlogSpacer key="top" />
    <BlogHeader title="Blog Posts" class="text-pink-500 dark:text-yellow-500" />
    <BlogPosts :posts="blok" />
    <BlogPagination :pages="pages" />
    <BlogSpacer key="bottom" />
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const perPage = 6
    const page = context.params.page
    const version = context.isDev ? 'draft' : 'published'
    return await context.app.$storyapi
      .get('cdn/stories', {
        version,
        is_startpage: false,
        starts_with: 'blog/',
        page,
        per_page: perPage,
      })
      .then((res) => {
        if (res.data.stories.length > 0) {
          // Calculate pages for pagination and return number of pages
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
