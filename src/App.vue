<script setup>
	import { onMounted } from "vue";
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
