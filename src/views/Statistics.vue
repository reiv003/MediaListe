<template>
	<div v-if="loading"><img src="/assets/images/Logo.png" class="loading-image"/></div>
	<div v-else>
		<div>
			<Bar v-if="loaded"
			:chart-data="chartData"
			:plugins="plugins"
			:height="height"
			/>
		</div>

		<div>
			<ul>
				<li v-for="game in result">
					{{ game.title }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import query from '../groq/recommended.groq?raw';
	import viewMixin from '../mixins/viewMixin.js';

	import { Bar } from 'vue-chartjs'

	import { Chart, registerables } from 'chart.js'

	Chart.register(...registerables)

	Chart.defaults.font.size = 20;
	Chart.defaults.font.family = "K2DLight";

	export default {
		mixins: [viewMixin],

		name: 'BarChart',
		components: { Bar },
		props: {
			plugins: {
				type: Object,
				default: () => {}
			},
			height: {
				type: Number,
				default: 180
			}
		},

		data() {
			return {
				loaded: false,
				chartData: {
					labels: ['Jan','Feb','Mar','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Des'],
					datasets: [ {
						label: "Logg",
						/* Couldn't figure out how to get the data from sanity to use here, so I've just added dummy data for now. */
						data: [2,3,6,7,8,9,0,1,2]
					}]
				}
			}
		},

		async created() {
			await this.sanityFetch(query, { documentType: 'game' });
		
			this.loaded = true;
		}
	}

</script>

<style>

</style>