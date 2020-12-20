<template>
  <div>
    <SocialHead
      :title="story.name"
      :image="story.content.thumbnail.filename"
      :description="story.content.summary"
    />
    <BlogSpacer key="top" />
    <BlogPost
      :blok="story.content"
      :last-published="story.published_at"
      :title="story.name"
      :tags="story.tag_list"
    />
    <BlogSpacer key="bottom" />
  </div>
</template>

<script>
export default {
  asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi
      .get(`cdn/stories/blog/${context.params.slug}`, {
        version,
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          // console.error(res)
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
  data() {
    return {
      story: { content: {} },
    }
  },
  mounted() {
    // Use the input event for instant update of content
    this.$storybridge.on('input', (event) => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content
      }
    })
    // Use the bridge to listen the events
    this.$storybridge.on(['published', 'change'], (event) => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true,
      })
    })
  },
}
</script>

<style>
@import '~/node_modules/highlight.js/styles/hopscotch.css';
</style>
