<script setup lang="ts">
	import NavBarVue from "../../components/NavBar/NavBar.vue";
	import Hero from "./Hero.vue";
	import Tab from "./Tab.vue";
	import Player from "./PlayerInfoCard.vue";
	import { reactive } from "vue";

	import { register } from "swiper/element/bundle";
	import { Pagination } from "swiper";
	register();

	const sliderConfig = reactive({
		spaceBetween: 4,
	});
</script>

<template>
	<div className="layout">
		<NavBarVue />

		<Hero />
		<div className="players">
			<Tab
				title="Recommended"
				link="See all" />

			<swiper-container
				:slides-per-view="4"
				space-between="2"
				:centered-slides="true"
				className="swiper-container"
				loop="true"
				speed="500"
				:autoplay="{
					delay: 5000,
				}">
				<swiper-slide> <Player price="$100" /> </swiper-slide>
			</swiper-container>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use "../../styles/utilities.scss" as *;

	.container-hero {
		margin: auto;
	}
	.swiper-container {
		max-width: map-get($containers, $key: "max-width");
		margin: auto;
		display: flex;
		gap: px-to-rem(8px);
		padding-inline: 16px;
		margin-top: 24px;
		justify-content: space-between;
	}
	.players {
		margin-top: px-to-rem(30px);
	}

	.card {
		width: px-to-rem(328px);
		background-color: map-get($colors, $key: "black");
		aspect-ratio: 2/1;
		border-radius: px-to-rem(8px);
		color: white;
		display: grid;
		place-items: center;
	}
</style>
