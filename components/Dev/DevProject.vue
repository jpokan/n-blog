<template>
  <div class="grid grid-cols-1 lg:grid-cols-8 gap-20 md:mx-10 md:my-40">
    <section class="col-span-full xl:col-span-5">
      <div class="bg-pink-500 dark:bg-yellow-500 xl:perspective mb-20">
        <video
          v-if="thumbnailType(blok.content.thumbnail.filename) === 'video'"
          :src="blok.content.thumbnail.filename"
          :alt="blok.content.thumbnail.alt"
          type="video/mp4"
          loop
          muted
          autoplay
          class="object-center object-cover w-full imagen shadow-xl transition-transform duration-500"
          @mouseover="normalize($event)"
          @mouseleave="perspective($event)"
        />
        <img
          v-else
          :src="blok.content.thumbnail.filename"
          :alt="blok.content.thumbnail.alt"
          class="object-center object-cover w-full imagen shadow-xl transition-transform duration-500"
          @mouseover="normalize($event)"
          @mouseleave="perspective($event)"
        />
      </div>
      <div
        v-if="blok.content.images"
        class="grid grid-cols-1 gap-5 grid-flow-row place-items-center"
      >
        <img
          v-for="image in blok.content.images"
          :key="image.id"
          :src="image.filename"
          :alt="image.alt"
        />
        <video
          v-for="video in blok.content.videos"
          :key="video.id"
          :src="video.filename"
          :alt="video.alt"
          type="video/mp4"
          loop
          muted
          autoplay
        ></video>
      </div>
    </section>
    <section class="col-span-full xl:col-span-3">
      <div class="flex flex-row justify-between">
        <h1
          class="text-4xl md:text-5xl font-semibold dark:text-yellow-500 text-pink-500"
        >
          {{ blok.name }}
        </h1>
        <ul class="flex-col flex gap-2">
          <a
            v-if="blok.content.github_link.url"
            target="_blank"
            :href="blok.content.github_link.url"
          >
            <li>
              <SvgLinkGithub
                class="w-5 fill-current dark:text-yellow-500 text-pink-500"
              /></li
          ></a>
          <a
            v-if="blok.content.site_link.url"
            target="_blank"
            :href="blok.content.site_link.url"
          >
            <li>
              <SvgOpen
                class="w-5 stroke-current dark:text-yellow-500 text-pink-500"
              />
            </li>
          </a>
        </ul>
      </div>
      <h2 class="text-lg text-gray-500 my-5">
        {{ blok.content.year }}
      </h2>
      <article
        class="prose md:prose-lg dark:prose-dark"
        v-html="$md.render(blok.content.markdown)"
      ></article>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  methods: {
    thumbnailType(filename) {
      const fileType = filename.substring(filename.lastIndexOf('.') + 1)
      const type = fileType === 'mp4' ? 'video' : 'img'
      return type
    },
    normalize(event) {
      event.target.style.transform = 'rotateY(0deg)'
    },
    perspective(event) {
      event.target.style.transform = 'rotateY(0.5deg)'
    },
  },
}
</script>

<style scoped>
.imagen {
  transform: rotateY(0.5deg);
}
</style>
