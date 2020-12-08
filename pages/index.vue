<template>
  <div class="lg:max-w-none max-w-screen-md mx-auto relative">
    <HomeHero />
    <div class="sm:px-10">
      <HomeDescription />
      <HomeFeaturedDev :blok="blok" />
      <HomeFeaturedArch />
    </div>
    <div class="p-5">
      <div class="h-8"></div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const version = context.isDev ? 'draft' : 'published'
    return await context.app.$storyapi
      .get('cdn/stories', {
        version,
        is_startpage: false,
        starts_with: 'dev/',
        sort_by: 'position:desc',
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
  head() {
    return {
      title: 'Homepage',
      meta: [
        {
          name: 'description',
          hid: 'description',
          content: 'Homepage of jpokan website.',
        },
      ],
    }
  },
}
</script>

<style></style>
