<script setup>
	import CardComponent from './CardComponent.vue'

	const data = [
		{ id:'tag-1', title: 'Tag 1', url: 'tag-1' },
		{ id:'tag-2', title: 'Tag 2', url: 'tag-2' } 
	]
</script>

<template>
	<section class="gn_title_main">
		<h1>Tags</h1>
	</section>
	
	<section class="gn_main">
		<CardComponent url="/add" type="icon">
    		<i class="las la-plus"></i>
		</CardComponent>

		<CardComponent 
			v-for="item in data"
			:key="item.id" 
			:url="`/tag/${item.url}`"
			type="title"
			>
			{{ item.title }}
		</CardComponent>
	</section>
</template>
