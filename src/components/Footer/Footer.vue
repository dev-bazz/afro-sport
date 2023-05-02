<template>
	<footer>
		<div class="container">
			<div class="top">
				<div class="left">
					<ul>
						<li>Solutions for</li>
						<li>Athletes</li>
						<li>Brands</li>
						<li>Sponsors</li>
						<li>Donors</li>
					</ul>
					<ul>
						<li>Company</li>
						<li>About us</li>
						<li>Careers</li>
						<li>Blog</li>
					</ul>
					<ul>
						<li>Support</li>
						<li>Help</li>
						<li>Contact us</li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div class="right">
					<h4>Afro Sport</h4>
					<p>
						AfriSport is a platform dedicated to connecting the bestAfrican
						talents to new Opprtunities
					</p>
				</div>
			</div>
			<div class="bottom">
				<span>© 2022 AfriSport-Pro</span>
				<span><span>Terms of use</span> <span>Privacy policy</span></span>
			</div>
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
		.left {
			display: grid;
			grid-template-columns: repeat(3, auto);
			max-width: px-to-rem(600px);
			gap: px-to-rem(24px);
			flex: 1 1 0;
		}
		.right {
			flex: 1 1 0;
			max-width: px-to-rem(400px);
			h4 {
				color: white;
				font-weight: 700;
				font-size: px-to-rem(24px);
				margin-bottom: px-to-rem(16px);
			}
			p {
				color: white;
				font-size: px-to-rem(16px);
				line-height: px-to-rem(24px);
			}
		}

		.top {
			display: flex;
			justify-content: space-between;
		}
		.bottom {
			color: white;
			display: flex;
			justify-content: space-between;
			margin-top: 24px;
		}
	}
</style>
