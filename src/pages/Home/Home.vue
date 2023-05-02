<script setup>
	import NavBarVue from "../../components/NavBar/NavBar.vue";
	import Hero from "./Hero.vue";
	import Tab from "./Tab.vue";
	import Footer from "../../components/Footer/Footer.vue";
	import Player from "./PlayerInfoCard.vue";
	import { reactive } from "vue";
	import { register } from "swiper/element/bundle";

	register();

	const sliderConfig = reactive({
		slidesPerView: 3.8,
		loop: true,
		speed: 500,
		mobile: {
			900: {
				slidesPerView: 4,
			},
			835: {
				slidesPerView: 3,
			},
			375: {
				slidesPerView: 1.8,
			},
			320: {
				slidesPerView: 1.2,
			},
		},
	});
</script>

<template>
	<NavBarVue />
	<div className="layout">
		<!-- fix the type issue with NavBarVue -->
		<Hero />
		<div className="players">
			<Tab
				title="Top Rated"
				link="See all" />

			<swiper-container
				className="swiper-container"
				:loop="true"
				speed="500"
				:space-between="8"
				:autoplay="{
					delay: 5000,
				}"
				:breakpoints="sliderConfig.mobile">
				<template v-for="n in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
					<swiper-slide> <Player :price="100" /> </swiper-slide>
				</template>
			</swiper-container>
		</div>
		<div className="players">
			<Tab
				title="Recommended"
				link="See all" />

			<swiper-container
				className="swiper-container"
				:loop="true"
				speed="500"
				:space-between="8"
				:autoplay="{
					delay: 5000,
				}"
				:breakpoints="sliderConfig.mobile">
				<template v-for="n in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
					<swiper-slide> <Player :price="100" /> </swiper-slide>
				</template>
			</swiper-container>
		</div>

		<div className="players">
			<Tab
				title="Recommended"
				link="See all" />
			<div className="flitters">
				<template
					v-for="n in [
						'Goalkeeper',
						'Center backs(Defenders)',
						'Fullbacks(Defenders)',
						'Central midfielders',
						'Attacking midfielders',
						'Defensive midfielders ',
						'Wingers',
						'Striker',
					]">
					<div className="filter">
						{{ n }}
					</div>
				</template>
			</div>
			<div className="grid">
				<template
					v-for="n in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]">
					<Player :price="100" />
				</template>
			</div>
		</div>
	</div>
	<Footer />
</template>

<style lang="scss" scoped>
	@use "../../styles/utilities.scss" as *;

	.container-hero {
		margin: auto;
	}
	.swiper-container {
		@include containerL;

		margin-top: 24px;
	}
	.players {
		margin-top: px-to-rem(40px);
		.grid {
			display: grid;
			grid-template-columns: repeat(4, auto);
			gap: px-to-rem(16px);
			@include containerL;
			margin-top: px-to-rem(24px);
			padding-bottom: px-to-rem(32px);
		}
	}

	.flitters {
		@include containerL;
		display: flex;
		justify-content: space-between;
		margin-top: px-to-rem(24px);
		flex-wrap: wrap;
		gap: px-to-rem(14px);

		.filter {
			border: 1px solid #d0d4d9;
			border-radius: 27px;
			padding-inline: px-to-rem(12px, 1em);
			padding-block: px-to-rem(4px);
			cursor: pointer;
			font-size: px-to-rem(14px);
			background-color: map-get($colors, $key: "white");
			font-family: "lato";
			user-select: none;

			&:active {
				background-color: #e9eff2;
			}
		}
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

	.layout {
		@include containerL;
		padding: 0;
	}
</style>
