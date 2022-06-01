<template>
	<div class="sidebar">
		<nav>
			<div><RouterLink :to="{ name: 'home' }"><img src="/assets/images/Logo.png" class="logo"/></RouterLink></div>
			<ul>
				<!-- Only the game link display any data. I've hardcoded one of the "users" logs, but it works with other documents created in sanity (ie gjest-game as url). The idea was to dynamically add the username (test, gjest, etc) infront of the categories, but it isn't implemented. -->
				<li><RouterLink :to="'/test-book'" >Bøker</RouterLink></li>
				<li><RouterLink :to="'/test-game'" >Spill</RouterLink></li>
				<li><RouterLink :to="'/test-movie'" >Film</RouterLink></li>
				<li><RouterLink :to="'/test-series'" >Serier</RouterLink></li>
				<li><RouterLink :to="'/test-webcomics'" >Webcomics</RouterLink></li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style>
	
</style>	