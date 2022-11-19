<script setup>
	defineProps({
		// Esta props es la que se envia por el Path - Url 
		tag: String
	})
</script>

<template>
	<h1>GNOTES - Tag Notes</h1>

	<h1>{{ tag }}</h1>
</template>

<style scoped lang="scss"></style>