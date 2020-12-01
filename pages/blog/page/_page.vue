<template>
  <div>
    <BlogSpacer key="top" />
    <BlogHeader title="Blog Posts" class="text-pink-500 dark:text-yellow-500" />
    <BlogPosts :posts="blok" />
    <div class="w-full text-center p-5">
      <NuxtLink to="/blog/page/2">Page 2</NuxtLink>
    </div>
    <BlogSpacer key="bottom" />
  </div>
</template>

<script>
export default {
  asyncData(context) {
    const page = context.params.page
    const version = context.isDev ? 'draft' : 'published'
    return context.app.$storyapi
      .get('cdn/stories', {
        version,
        is_startpage: false,
        startsWith: 'blog/',
        page,
        per_page: 1,
      })
      .then((res) => {
        if (res.data.stories.length > 0) {
          return { blok: res.data.stories }
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
