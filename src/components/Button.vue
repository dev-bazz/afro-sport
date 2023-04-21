<script setup>
	const label = "Test Button";
</script>

<template>
	<button
		@click="onClick"
		:disabled="disabled">
		{{ label }}
	</button>
</template>
