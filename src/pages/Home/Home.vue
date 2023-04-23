<script setup lang="ts">
	import NavBarVue from "../../components/NavBar/NavBar.vue";
</script>

<template>
	<NavBarVue />
	<section className="hero">
		<div className="hero__container">hero</div>
	</section>
</template>

<style lang="scss" scoped>
	@use "../../styles/utilities.scss" as *;
	.hero {
		max-width: none;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
		padding: 0;
		margin: 0 0;
		margin-top: px-to-rem(32px);

		color: inherit;

		&__container {
			background: linear-gradient(
					89.8deg,
					rgba(0, 0, 0, 0.2) 21.28%,
					rgba(0, 0, 0, 0) 58.42%
				),
				linear-gradient(270.44deg, #fdde49 1.19%, #58dc53 43.55%);
			border-radius: px-to-rem(7.41333px);
			max-width: calc(map-get($containers, "max-width") - 16px);
			padding-inline: px-to-rems(16px);
			margin-inline: auto;
			width: 100%;
			min-height: px-to-rem(324px);
		}
	}
</style>
