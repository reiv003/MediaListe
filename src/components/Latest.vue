<template>
	<div v-if="loading"><img src="/assets/images/Logo.png" class="loading-image"/></div>
	<div v-else>
		<div>
			<ul>
				<!-- Had to do the slice here, as slicing the groq directly didn't give correct results (the two lists would just be mirrored, now they correctly show the 3 elements at the top and bottom of the list chronologically). Latest and Recommended components are also almost the same, the only difference is in the groq where the list is ordered descending or ascending.  -->
				<li v-for="game in result.slice(0,3)">
					{{ game.title }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import query from '../groq/latest.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	export default {
		mixins: [viewMixin],

		async created() {
			await this.sanityFetch(query, { documentType: 'game' });
		}
	}

</script>

<style>

</style>