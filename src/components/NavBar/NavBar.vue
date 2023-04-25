<script setup lang="ts">
	interface Props {
		isLogged: boolean;
		notifications: number;
	}
	const props = defineProps<Props>();
</script>

<template>
	<nav className="nav">
		<div className="nav__wrapper">
			<img
				src="./assets/afrosport-logo.png"
				alt="logo" />
			<ul className="nav__list">
				<template v-if="isLogged === true && isLogged">
					<li className="logged">
						<span
							className="notification"
							v-if="notifications > 0"
							>{{ notifications }}</span
						>
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M27.725 21.9925C27.0313 20.7975 26 17.4163 26 13C26 10.3478 24.9464 7.8043 23.0711 5.92893C21.1957 4.05357 18.6522 3 16 3C13.3479 3 10.8043 4.05357 8.92895 5.92893C7.05358 7.8043 6.00002 10.3478 6.00002 13C6.00002 17.4175 4.96752 20.7975 4.27377 21.9925C4.0966 22.2963 4.00268 22.6415 4.00148 22.9931C4.00027 23.3448 4.09182 23.6906 4.26689 23.9956C4.44196 24.3006 4.69437 24.5541 4.99865 24.7304C5.30293 24.9068 5.64833 24.9997 6.00002 25H11.1013C11.332 26.1289 11.9455 27.1436 12.8382 27.8722C13.7308 28.6009 14.8477 28.9989 16 28.9989C17.1523 28.9989 18.2692 28.6009 19.1618 27.8722C20.0545 27.1436 20.6681 26.1289 20.8988 25H26C26.3516 24.9995 26.6968 24.9064 27.0009 24.73C27.3051 24.5535 27.5573 24.3 27.7322 23.9951C27.9071 23.6901 27.9986 23.3444 27.9973 22.9928C27.996 22.6412 27.9021 22.2962 27.725 21.9925ZM16 27C15.3798 26.9998 14.7749 26.8074 14.2685 26.4492C13.7622 26.0911 13.3793 25.5848 13.1725 25H18.8275C18.6208 25.5848 18.2379 26.0911 17.7315 26.4492C17.2252 26.8074 16.6202 26.9998 16 27Z"
								fill="black" />
						</svg>
					</li>
					<li className="logged">
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M28.9871 26.4999C27.1212 23.2856 24.1345 20.873 20.5996 19.7249C22.294 18.7173 23.6107 17.1814 24.3474 15.3529C25.0842 13.5245 25.2002 11.5047 24.6778 9.60396C24.1553 7.70316 23.0233 6.02648 21.4555 4.83148C19.8877 3.63647 17.9709 2.98926 15.9996 2.98926C14.0283 2.98926 12.1116 3.63647 10.5438 4.83148C8.97601 6.02648 7.84393 7.70316 7.32148 9.60396C6.79902 11.5047 6.91508 13.5245 7.65184 15.3529C8.38859 17.1814 9.70528 18.7173 11.3996 19.7249C7.86475 20.873 4.87805 23.2856 3.01213 26.4999C2.92052 26.6506 2.87207 26.8235 2.87207 26.9999C2.87207 27.1762 2.92052 27.3492 3.01213 27.4999C3.0976 27.6531 3.22284 27.7805 3.37464 27.8685C3.52644 27.9565 3.69918 28.0019 3.87463 27.9999H28.1246C28.3001 28.0019 28.4728 27.9565 28.6246 27.8685C28.7764 27.7805 28.9017 27.6531 28.9871 27.4999C29.0787 27.3492 29.1272 27.1762 29.1272 26.9999C29.1272 26.8235 29.0787 26.6506 28.9871 26.4999Z"
								fill="black" />
						</svg>
					</li>
				</template>
				<template v-else>
					<li className="btn__white">Login</li>
					<li className="btn__black">Create Account</li>
				</template>
			</ul>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
	@use "../../styles/utilities.scss" as *;
	.nav {
		padding-inline: px-to-rem(16px);
		border-bottom: 1px solid #cccccc;
		&__wrapper {
			@include flexSpaceBetween;
			max-width: calc(map-get($containers, "max-width") - 16px);
			margin-inline: auto;
			padding-inline: px-to-rem(16px);
		}
// Nav Bar List
		&__list {
			@include flex;
			list-style: none;
			gap: px-to-rem(24px);

			li {
				@include fontFamily;
				position: relative;
				.notification {
					position: absolute;
					top: 0;
					right: 0;
					width: 18px;
					aspect-ratio: 1/1;
					border-radius: 50px;
					background-color: red;
					color: white;
					@include flex;
					justify-content: center;
					align-items: center;
					font-size: 10px;
				}
			}
			.logged {
				cursor: pointer;
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
