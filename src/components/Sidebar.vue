<template>
	<div class="sidebar">
		<nav>
			<div><RouterLink :to="{ name: 'home' }"><img src="/assets/images/Logo.png" class="logo"/></RouterLink></div>
			<ul>
				<li>Bøker</li>
				<li>Spill</li>
				<li>Film</li>
				<li>Serier</li>
				<li>Webcomics</li>
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