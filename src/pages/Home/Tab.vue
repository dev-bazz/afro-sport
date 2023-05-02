<script setup lang="ts">
	import { withDefaults } from "vue";
	interface Props {
		title: string;
		link: string;
	}
	withDefaults(defineProps<Props>(), {
		title: "Title",
		link: "View all",
	});
</script>

<template>
	<div className="Tab--head">
		<span>{{ title }}</span> <span className="link">{{ link }}</span>
	</div>
</template>

<style lang="scss">
	@use "../../styles/utilities.scss" as *;

	.Tab--head {
		@include flex();
		justify-content: space-between;
		max-width: px-to-rem(map-get($containers, "max-width"));
		@include fontFamily;
		text-transform: uppercase;
		font-size: px-to-rem(18.27px);
		margin: auto;
		padding-inline: px-to-rem(16px);

		.link {
			cursor: pointer;
		}
	}
</style>
