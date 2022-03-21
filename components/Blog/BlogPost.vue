<template>
	<div v-editable="blok" class="max-w-screen-md mx-auto">
		<BlogHeader class="text-gray-400" title="Blog Post" />
		<div v-if="blok.thumbnail.filename" class="mb-5">
			<img
				:class="
					blok.thumbnail_position === 'top'
						? 'object-top'
						: blok.thumbnail_position === 'bottom'
						? 'object-bottom'
						: 'object-center'
				"
				class="rounded-lg min-w-full max-h-60 sm:max-h-80 md:max-h-96 object-cover"
				:src="blok.thumbnail.filename"
				:alt="blok.thumbnail.alt"
			/>
		</div>
		<h1
			class="rounded-md md:px-5 md:pb-2 md:pt-10 text-3xl md:text-5xl font-semibold text-pink-500 dark:text-yellow-500"
		>
			{{ title }}
		</h1>
		<p v-if="lastPublished" class="py-2 md:px-5 text-gray-500 dark:text-gray-300">
			Last updated:
			{{
				new Date(lastPublished).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})
			}}
		</p>
		<div class="flex flex-row md:px-5">
			<span v-for="tag in tags" :key="tag" class="px-1 bg-gray-200 rounded dark:bg-gray-800 mr-2">{{ tag }}</span>
		</div>
		<p v-if="blok.summary" class="md:p-5 md:py-10 py-10 md:text-lg">
			<span class="font-bold">Summary:</span> {{ blok.summary }}
		</p>
		<div
			v-if="blok.markdown"
			ref="Post"
			class="md:p-5 md:py-10 min-w-full prose max-w-none md:prose-lg dark:prose-dark rounded-lg"
			v-html="$md.render(blok.markdown)"
		></div>
		<BlogBackButton class="md:hidden" />
		<div class="h-5 my-4"></div>
	</div>
</template>

<script>
	export default {
		props: {
			blok: {
				type: Object,
				required: true
			},
			lastPublished: {
				type: String,
				default: 'Published date'
			},
			title: {
				type: String,
				default: 'Title'
			},
			tags: {
				type: Array,
				default: () => []
			}
		},
		mounted() {},
		updated() {},
		methods: {}
	}
</script>

<style scoped></style>
