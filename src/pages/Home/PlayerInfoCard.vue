<script setup lang="ts">
	interface Props {
		dp?: string;
		price?: number;
		name?: string;
		category?: string;
		club?: string;
	}
	defineProps<Props>();
</script>

<template>
	<div className="card-player">
		<div className="card__img">
			<img
				src="./assets/player-dp.png"
				alt="Player DP" />
			<p>{{ price ? `From $${price}` : "Free" }}</p>
		</div>
		<div className="card__info">
			<h2>{{ name ?? "Player Name" }}</h2>
			<p>
				{{ category ?? "Goalkeeper" }} •
				{{ club ?? "Free agent" }}
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use "../../styles/utilities.scss" as *;
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
