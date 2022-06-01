<template>
	<div v-if="loading"><img src="/assets/images/Logo.png" class="loading-image"/></div>
	<div v-else>
		<h2>Logg</h2>
		<div>
			<ul>
				<!-- The data doesn't get retrieved. No errors in console, and I can't see what the difference is between this and gamesLog (which works). I wasn't able to create a more dynamic solution for displaying these logs, with this solution I would need to create a separate view, groq file and route for each category. Since I can't get it to work, I just left it as is. The only log that is implemented is therefore gamesLog. -->
				<li v-for="movie in result.moviesLogged">
					{{ movie.title }}
					{{ movie.status }}
					{{ movie._createdAt }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import query from '../groq/moviesLog.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	export default {
		mixins: [viewMixin],

		async created() {
			await this.sanityFetch(query, { slug: this.$route.params.moviesLogSlug})
		}
	}

</script>

<style>

</style>