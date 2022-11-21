<script setup>
	defineProps({
		// Esta props es la que se envia por el Path - Url 
		tag: String
	})
</script>

<template>
	<section class="gn_title_main">
		<h1>Tags > {{ tag }}</h1>
	</section>
</template>

<style scoped lang="scss"></style>