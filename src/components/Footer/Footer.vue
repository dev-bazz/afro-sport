<template>
	<footer>
		<div class="container">
			<ul>
				<li>Home</li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	</footer>
</template>

<script setup></script>
<style lang="scss" scoped>
	@use "../../styles/utilities.scss" as *;
	footer {
		background-color: map-get($colors, $key: "black");
		padding: px-to-rem(24px) px-to-rem(16px);

		.container {
			max-width: map-get($containers, "max-width");
			margin-inline: auto;

			ul {
				color: white;
			}
		}
	}
</style>
