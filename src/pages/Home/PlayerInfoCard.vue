<script setup lang="ts">
	import { computed } from "vue";

	interface Props {
		dp?: string;
		price?: number;
		fName?: string;
		lName?: string;
		category?: string;
		club?: string;
		type?: string;
		image?: string;
		position: Array<string>;
	}
	const props = defineProps<Props>();
	const positions = computed(() => {
		if (props.position) {
			return props.position.length > 1 ? "Multiple" : props.position[0];
		} else {
			return;
		}
	});
</script>

<template>
	<div className="card-player">
		<div className="card__img">
			<img
				v-if="image"
				:src="image"
				alt="" />
			<img
				v-else
				src="./assets/player-dp.png"
				alt="Player DP" />
			<p>{{ price ? `${type ?? "exact $"} ${price}` : "Free" }}</p>
		</div>
		<div className="card__info">
			<h2>{{ fName && lName ? `${fName} ${lName}` : "Player Name" }}</h2>
			<p className="pc">
				<span> {{ positions ?? "Goalkeeper" }} </span>
				•
				<span>
					{{ club ?? "Free agent" }}
				</span>
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use "../../styles/utilities.scss" as *;

	.pc {
		@include ellipsis;
	}
	.card-player {
		max-width: px-to-rem(327px);
		border: 1px solid #dcdcdc;
		border-radius: px-to-rem(8px);
		padding: px-to-rem(8px);
		font-family: "Lato", sans-serif;
		background-color: map-get($colors, $key: "white");
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		&:hover {
			background-color: #e9eff2;
		}
	}

	.card__img {
		position: relative;
	}

	.card__img img {
		width: 100%;
		border-radius: 8px;
	}

	.card__img p {
		position: absolute;
		bottom: 10px;
		right: 10px;
		background-color: #fff;
		padding: 7px;
		border-radius: 23px;
		font-size: 11px;
	}

	.card__info {
		padding-top: px-to-rem(25px);
	}
	.card__info h2 {
		font-size: px-to-rem(20px);
		font-weight: 400;
		text-transform: capitalize;
		margin: 0;
		margin-bottom: px-to-rem(10px);
	}

	.card__info p {
		font-size: 18px;
		color: #5a6979;
		margin: 0;
	}
</style>
