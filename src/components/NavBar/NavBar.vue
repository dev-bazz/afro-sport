<script setup></script>

<template>
	<nav class="nav">
		<div class="nav__wrapper">
			<img
				src="./assets/afrosport-logo.png"
				alt="logo" />
			<ul class="nav__list">
				<li class="btn__white">Login</li>
				<li class="btn__black">Create Account</li>
			</ul>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
	@use "../../styles/utilities.scss" as *;
	.nav {
		&__wrapper {
			@include flexSpaceBetween;
			max-width: calc(map-get($containers, "max-width") - 16px);
			margin-inline: auto;
			padding-inline: pix-rems(16);
		}

		&__list {
			@include flex;
			list-style: none;
			gap: px-to-rem(24px);

			li {
				@include fontFamily;
			}
			.btn__black {
				@include button;
			}
			.btn__white {
				@include button(true);
			}
		}
	}
</style>
