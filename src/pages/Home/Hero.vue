<script setup lang="ts">
	const check = (e: any) => {
		e.preventDefault();
		console.log("clicked");
	};
</script>

<template>
	<section className="hero">
		<div className="hero__container">
			<div className="content msg">
				<div className="message">
					<h1>The best and brightness african football talent</h1>
					<p>Enquire about players/managers and contact them instantly.</p>
					<form>
						<div className="search">
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<mask
									id="mask0_55_1379"
									style="mask-type: alpha"
									maskUnits="userSpaceOnUse"
									x="0"
									y="0"
									width="16"
									height="16">
									<path
										d="M14.3067 14.5154L10.0809 9.9038C11.0308 8.91387 11.5595 7.59396 11.5556 6.22202C11.5556 4.79802 11.0009 3.45757 9.9929 2.45135C9.49896 1.95471 8.91148 1.5609 8.26442 1.29268C7.61737 1.02446 6.92357 0.88715 6.22312 0.888685C4.79823 0.888685 3.45868 1.44335 2.45157 2.45135C1.95498 2.94547 1.56127 3.53313 1.2932 4.18034C1.02513 4.82755 0.888019 5.52149 0.889787 6.22202C0.889787 7.64602 1.44445 8.98646 2.45157 9.99268C2.94572 10.4895 3.53348 10.8835 4.18086 11.1517C4.82824 11.4199 5.52238 11.5571 6.22312 11.5554C7.44979 11.5554 8.61423 11.1438 9.55645 10.3856L13.7831 14.9954C13.8145 15.03 13.8525 15.0581 13.8948 15.0779C13.9371 15.0978 13.9829 15.1091 14.0296 15.1112C14.0763 15.1133 14.1229 15.106 14.1668 15.09C14.2107 15.0739 14.251 15.0493 14.2853 15.0176C14.3549 14.9539 14.3963 14.8652 14.4004 14.7711C14.4046 14.6769 14.3712 14.5849 14.3076 14.5154H14.3067ZM1.60001 6.22202C1.60001 3.67357 3.67379 1.5998 6.22223 1.5998C8.77068 1.5998 10.8445 3.67357 10.8445 6.22202C10.8445 8.77046 8.77068 10.8442 6.22223 10.8442C4.99678 10.8428 3.82192 10.3554 2.95539 9.48886C2.08886 8.62233 1.60142 7.44747 1.60001 6.22202Z"
										fill="white" />
								</mask>
								<g mask="url(#mask0_55_1379)">
									<path
										d="M12.6668 -1.125H3.33346C0.387937 -1.125 -1.99988 1.26281 -1.99988 4.20833V13.5417C-1.99988 16.4872 0.387937 18.875 3.33346 18.875H12.6668C15.6123 18.875 18.0001 16.4872 18.0001 13.5417V4.20833C18.0001 1.26281 15.6123 -1.125 12.6668 -1.125Z"
										fill="#89949F" />
								</g>
							</svg>

							<input
								type="text"
								placeholder="search for players positions" />
							<button @click="check">Search</button>
						</div>
					</form>
				</div>
			</div>
			<div className="content ">
				<div className="player">
					<img
						src="./assets/player 1.png"
						alt="football_player"
						className="football_player" />
					<img
						src="./assets/ball 1.png"
						alt="ball"
						className="ball" />
				</div>
			</div>
		</div>
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
		padding: 0 px-to-rem(16px);

		.content {
			@include fontFamily;
			color: map-get($colors, $key: "white");

			&:is(.msg) {
				display: grid;
				align-items: center;

				.message {
					:is(h1, p) {
						margin: 0;
					}
					margin-left: 4vw;
					margin-left: 4dvw;

					.search {
						margin-top: 4vh;
						margin-top: 4dvh;
						max-width: px-to-rem(510px);
						display: flex;
						padding: px-to-rem(4px) px-to-rem(8px);
						background-color: map-get($colors, $key: "white");
						border-radius: px-to-rem(4px);
						min-height: px-to-rem(30px);
						@include custom-media-query("mobile", 929px) {
							max-width: px-to-rem(380px);
						}

						align-items: center;

						input {
							width: 100%;
							border: none;
							outline: none;
							margin-left: 4px;
							font-size: px-to-rem(16px);
							&::placeholder {
								color: #a0a0a0;
							}
						}
						button {
							@include button;
							padding: 8px 12px;
							font-size: px-to-rem(14px);
						}
					}

					h1 {
						font-size: px-to-rem(37.07px);
						font-weight: 600;
						text-transform: uppercase;
						max-width: 28ch;
					}
					p {
						margin-top: px-to-rem(16px);
					}
				}
			}
		}

		&__container {
			background: linear-gradient(
					89.8deg,
					rgba(0, 0, 0, 0.2) 21.28%,
					rgba(0, 0, 0, 0) 58.42%
				),
				linear-gradient(270.44deg, #fdde49 1.19%, #58dc53 43.55%);
			border-radius: px-to-rem(7.41333px);
			max-width: calc(map-get($containers, "max-width") - 16px);
			margin-inline: auto;
			width: 100%;
			min-height: px-to-rem(324px);
			display: grid;
			padding-block: px-to-rem(32px);

			grid-template-columns: 1.5fr 1fr;
			@include custom-media-query("mobile", 420px) {
				grid-template-columns: 1fr;
			}
		}
		.player {
			position: relative;
			.football_player {
				position: absolute;
				top: px-to-rem(-8px);
				@include animation(
					upDown,
					1.5s,
					0,
					infinite,
					alternate,
					cubic-bezier(0.65, 0.05, 0.36, 1),
					none
				);
				@include custom-media-query("mobile", 929px) {
					left: -16%;
				}
				@include custom-media-query("mobile", 800px) {
					display: none;
				}
			}
			.ball {
				position: absolute;
				left: 46%;
				bottom: px-to-rem(-254px);
				@include custom-media-query("mobile", 929px) {
					left: 58%;
				}

				@include animation(
					ball,
					1.5s,
					1.2s,
					infinite,
					alternate,
					ease-in-out,
					none
				);
			}
		}
	}
</style>
