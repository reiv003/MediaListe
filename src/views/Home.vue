<template>
	<div class="home-container">
		<div>
			<h2>Legg til oppføring</h2>
			<div class="raised-box">
				<div>
					<label for="category-select">Kategori:</label>
				 	<select name="category-select" id="category-select">
						 <option value="">--Velg kategori--</option>
						 <option value="book">Bøker</option>
						 <option value="game">Spill</option>
						 <option value="film">Film</option>
						 <option value="series">Serier</option>
						 <option value="webcomic">Webcomics</option>
					 </select>
				</div>
				<div>Tittel:</div>
				<div>Status:</div>
				<div>Vurdering:</div>
			</div>
		</div>

		<div>
			<div>
				<h2>Siste oppføringer</h2>
				<div class="flat-box">
					<Latest/>
				</div>
			</div>
				<div>
				<h2>Anbefalinger</h2>
				<div class="flat-box">
					<Recommended/>
				</div>
			</div>
		</div>

		<div class="home-buttons">
			<RouterLink :to="{ name: 'statistics' }"><button>Statistikk</button></RouterLink>
			<button>Kalender</button>
			<button>Eksport</button>
		</div>
		
	</div>
</template>

<script>
 import Latest from '../components/Latest.vue';
 import Recommended from '../components/Recommended.vue';
	

	export default {
		components: {
			Latest, Recommended
		}
		
	};
</script>

<style>
	
</style>