<template>
  <div>
    <BlogSpacer key="top" />
    <BlogHeader title="Blog Posts" class="text-pink-500 dark:text-yellow-500" />
    <BlogPosts :posts="blok" />
    <BlogSpacer key="bottom" />
  </div>
</template>

<script>
export default {
  asyncData(context) {
    const version = context.isDev ? 'draft' : 'published'
    return context.app.$storyapi
      .get('cdn/stories', {
        version,
        is_startpage: false,
        startsWith: 'blog/',
        per_page: 10,
      })
      .then((res) => {
        return { blok: res.data.stories }
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
