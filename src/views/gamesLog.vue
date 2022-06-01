<template>
	<div v-if="loading"><img src="/assets/images/Logo.png" class="loading-image"/></div>
	<div v-else>
		<h2>Logg</h2>
		<div>
			<ul>
				<li v-for="game in result.gamesPlayed">
					{{ game.title }}
					{{ game.status }}
					{{ game.progress }}
					{{ game._createdAt }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import query from '../groq/gamesLog.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	export default {
		mixins: [viewMixin],

		async created() {
			await this.sanityFetch(query, { slug: this.$route.params.gamesLogSlug})
		}
	}

</script>

<style>

</style>