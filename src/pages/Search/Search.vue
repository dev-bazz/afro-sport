<template class="view">
	<NavBarVue />
	<div class="content">
		<h1>Hello World</h1>
		<p>Search Result</p>
	</div>
	<Footer />
</template>

<script setup>
	import NavBarVue from "../../components/NavBar/NavBar.vue";
	import Footer from "../../components/Footer/Footer.vue";
</script>

<style lang="scss">
	.view {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
		min-height: 100dvh;
	}
</style>
