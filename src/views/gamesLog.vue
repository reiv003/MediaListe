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
		<br>
		<div>
			<!-- Using a local API which would house non-personal information about the media entries, such as release date and studio. This is just to show that it's possible to get the data, to get actual use out of this I would have to write an if statement that shows these values if the title the user has added (in the CMS) matches one of the titles in the API, or something similar. -->
			<ul>
				<li v-for="game in gamesList">
					{{ game.studio }}
					{{ game.releaseYear }}
				</li>
			</ul> 
		</div>
	</div>
</template>

<script>
	import query from '../groq/gamesLog.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	import data from '/assets/media-API.js';

	export default {
		data() {
			return {
				gamesList: data.games
			}
		},

		mixins: [viewMixin],

		async created() {
			await this.sanityFetch(query, { slug: this.$route.params.gamesLogSlug})
		}
	}

</script>

<style>

</style>