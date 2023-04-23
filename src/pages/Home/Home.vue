<script setup lang="ts">
	import NavBarVue from "../../components/NavBar/NavBar.vue";
	import Hero from "./Hero.vue";
</script>

<template>
	<div className="layout">
		<NavBarVue />
		<Hero />
	</div>
</template>

<style lang="scss" scoped>
	@use "../../styles/utilities.scss" as *;

	.layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
</style>
