<template>
  <BlogPosts :posts="blok" />
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: 'draft',
        startsWith: 'blog/',
        filter_query: {
          component: {
            not_in: 'Blank',
          },
        },
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
          // console.error(res.response.data)
          context.error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
  },
}
</script>
