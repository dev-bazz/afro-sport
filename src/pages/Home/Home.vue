<script setup>
	import NavBarVue from "../../components/NavBar/NavBar.vue";
	import Hero from "./Hero.vue";
	import Tab from "./Tab.vue";
	import Footer from "../../components/Footer/Footer.vue";
	import Player from "./PlayerInfoCard.vue";
	import { reactive } from "vue";
	import { register } from "swiper/element/bundle";
	import { onMounted, ref } from "vue";

	const players = ref([]);
	const getPlayers = async () => {
		const response = await fetch("/api/test");
		const data = JSON.parse(response._bodyInit);
		players.value = data?.players || data;
		console.log(data);
	};
	register();
	onMounted(() => {
		console.log("Mounted");
		getPlayers();
	});

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
				slidesPerView: 1.4,
				centeredSlides: true,
			},
			320: {
				slidesPerView: 1.1,
				centeredSlides: true,
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
				:breakpoints="{
					900: {
						slidesPerView: 4,
					},
					835: {
						slidesPerView: 3,
					},
					600: {
						slidesPerView: 2.1,
					},
					375: {
						slidesPerView: 1.2,
					},
					320: {
						slidesPerView: 1.1,
					},
				}">
				<template v-for="player in players">
					<swiper-slide>
						<Player
							:price="player?.price.value.trim()"
							:type="player?.price.type"
							:image="player?.imageSrc"
							:fName="player?.firstName"
							:lName="player?.lastName"
							:position="player?.position"
							:club="player?.currentClub" />
					</swiper-slide>
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
				:breakpoints="{
					900: {
						slidesPerView: 4,
					},
					835: {
						slidesPerView: 3,
					},
					600: {
						slidesPerView: 2.1,
					},

					535: {
						slidesPerView: 2,
					},
					375: {
						slidesPerView: 1.2,
					},
					320: {
						slidesPerView: 1.1,
					},
				}">
				<template v-for="player in players">
					<swiper-slide>
						<Player
							:price="player?.price.value.trim()"
							:type="player?.price.type"
							:image="player?.imageSrc"
							:fName="player?.firstName"
							:lName="player?.lastName"
							:position="player?.position"
							:club="player?.currentClub" />
					</swiper-slide>
				</template>
			</swiper-container>
		</div>

		<div className="players">
			<Tab
				title="Explore"
				link="See all" />
			<div class="white-space">
				<ul className="flitters">
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
						<li className="filter">
							{{ n }}
						</li>
					</template>
				</ul>
			</div>
			<div className="grid">
				<Player
					v-for="player in players"
					:price="player?.price.value.trim()"
					:type="player?.price.type"
					:image="player?.imageSrc"
					:fName="player?.firstName"
					:lName="player?.lastName"
					:position="player?.position"
					:club="player?.currentClub" />
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

		@include custom-media-query("desktop", 320px) {
			max-width: calc(100dvw - 16px);
		}
		@include custom-media-query("desktop", 375px) {
			max-width: calc(100dvw - 16px);
		}
		@include custom-media-query("desktop", 535px) {
			max-width: calc(100dvw - 16px);
		}
		@include custom-media-query("desktop", 835px) {
			max-width: calc(835px - 16px);
		}
		@include custom-media-query("desktop", 900px) {
			@include containerL;
		}

		margin-top: 24px;
	}

	.white-space {
		white-space: nowrap;
		overflow-x: auto;
		max-width: 100dvw;
	}
	.players {
		margin-top: px-to-rem(40px);
		.grid {
			display: grid;
			grid-template-columns: repeat(4, auto);
			gap: px-to-rem(8px);
			@include containerL;
			margin-top: px-to-rem(24px);
			padding-bottom: px-to-rem(32px);
			@include custom-media-query("mobile", 400px) {
				grid-template-columns: repeat(2, auto);
			}
			@include custom-media-query("mobile", 400px) {
				place-items: center;
				grid-template-columns: repeat(1, auto);
			}
			@include custom-media-query("desktop", 410px) {
				place-items: center;
				grid-template-columns: repeat(1, auto);
			}
			@include custom-media-query("desktop", 540px) {
				place-items: center;
				grid-template-columns: repeat(2, auto);
			}
			@include custom-media-query("desktop", 635px) {
				place-items: center;
				grid-template-columns: repeat(3, auto);
			}
			@include custom-media-query("desktop", 900px) {
				place-items: center;
				grid-template-columns: repeat(4, auto);
			}
		}
	}

	.flitters {
		@include containerL;
		display: flex;
		justify-content: space-between;
		margin-top: px-to-rem(24px);

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
		max-width: none;
		padding: 0;
	}
</style>
