<script setup lang="ts">
	import NavBarVue from "../../components/NavBar/NavBar.vue";
	import Hero from "./Hero.vue";

	const check = (e: any) => {
		e.preventDefault();
		console.log("clicked");
	};
</script>

<template>
	<NavBarVue />
	<Hero />
</template>

<style lang="scss" scoped></style>
