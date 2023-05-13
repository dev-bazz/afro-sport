<script setup>
	import Navbar from "./components/NavBar/NavBar.vue";
	import Footer from "./components/Footer/Footer.vue";
	import HomeVue from "./pages/Home/Home.vue";
	import { onMounted } from "vue";

	const getPlayers = async () => {
		const response = await fetch("/api/test");
		const data = JSON.parse(response._bodyInit);
		console.log(data);
	};

	onMounted(() => {
		console.log("Mounted");
		getPlayers();
	});
</script>

<template>
	<RouterView />
</template>

<style lang="scss">
	#app {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
		min-height: 100dvh;
	}
</style>
