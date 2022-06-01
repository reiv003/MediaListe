<template>
	<div v-if="loading"><img src="/assets/images/Logo.png" class="loading-image"/></div>
	<div v-else>
		<div>
			<ul>
				<li v-for="game in result.slice(0,3)">
					{{ game.title }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import query from '../groq/recommended.groq?raw';
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