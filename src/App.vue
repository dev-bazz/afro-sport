<script setup>
	import Navbar from "./components/NavBar/NavBar.vue";
	import Footer from "./components/Footer/Footer.vue";
</script>

<template>
	<RouterView />
	<h1>Hi</h1>
</template>

<style lang="scss">
	#app {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
		min-height: 100dvh;
	}
</style>
