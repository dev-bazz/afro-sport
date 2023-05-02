<script setup>
	import Navbar from "./components/NavBar/NavBar.vue";
	import Footer from "./components/Footer/Footer.vue";
	import HomeVue from "./pages/Home/Home.vue";
</script>

<template>
	<!-- <RouterView /> -->

	<HomeVue />
</template>

<style lang="scss">
	#app {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
		min-height: 100dvh;
	}
</style>
