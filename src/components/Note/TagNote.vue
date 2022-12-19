<script setup>
	import CardComponent from './../CardComponent.vue'

	const data = [
		{ id:'note-1', title: 'Note 1', url: 'note-1' },
		{ id:'note-2', title: 'Note 2', url: 'note-2' },
		{ id:'note-3', title: 'Note 3', url: 'note-3' }
	]

	defineProps({
		// Esta props es la que se envia por el Path - Url 
		tag: String
	})
</script>

<template>
	<section class="gn_title_main">
		<h1>Tags > {{ tag }}</h1>
	</section>

	<section class="gn_main">
		<CardComponent url="/add" type="icon">
    		<i class="las la-plus"></i>
		</CardComponent>

		<CardComponent 
			v-for="item in data"
			:key="item.id" 
			:url="`/note/${item.url}`"
			type="title"
			>
			{{ item.title }}
		</CardComponent>
	</section>
</template>

<style scoped lang="scss"></style>