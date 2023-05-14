<script setup>
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
