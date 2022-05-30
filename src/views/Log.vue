<template>
	<div v-if="loading"><img src="/assets/images/Logo.png" class="loading-image"/></div>
	<div v-else>
		<h2>Logg</h2>
		 <!-- {{ JSON.stringify(result, null) }}  -->
		 <!-- <div> {{ result.gamesLog.status }} </div> -->
		<!-- <div><img src="/assets/images/logo.png" class="loading-image"/></div>	  -->
		<div> {{ result.gamesPlayed[0].title }} </div>
		<div> {{ result.gamesPlayed[0].status }} </div>
		<div> {{ result.gamesPlayed[0].progress }} </div>
		<!-- <div> {{ result.gamesPlayed[0].dateAdded }} </div> -->
		<div> {{ result.gamesPlayed[0]._createdAt }} </div>
	</div>
	<!-- <h2>Logg</h2> -->
	<!-- <div>{{ result.user }}</div> -->
	<!-- <div> {{ result.gamesPlayed }} </div> -->
	<!-- <div> {{ result }} </div> -->
</template>

<script>
	import query from '../groq/gamesLog.groq?raw';
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