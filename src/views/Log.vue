<template>
	<h2>Logg</h2>
	<!-- <div>{{ result.user }}</div> -->
	<!-- <div> {{ result.booksLogged }} </div> -->
	<div> {{ result.slug }} </div>
</template>

<script>
	import query from '../groq/log.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	export default {
		mixins: [viewMixin],

		async created() {
			await this.sanityFetch(query, { slug: this.$route.params.logSlug})
		}
	}

</script>

<style>

</style>