<script setup>
	import FormNoteVue from './FormNote.vue';

	const data = [
		{
			id:'note-1',
			title: 'Note 1',
			url: 'note-1',
			content: "Lorem ipsum dolor sit.",
			tags: ['jobs', 'gnotes']
		},
		{
			id:'note-2',
			title: 'Note 2',
			url: 'note-2',
			content: "Lorem ipsum dolor sit.",
			tags: ['gaming', 'LOL']
		},
	]
	
	const props = defineProps([
		// Esta props es la que se envia por el Path - Url 
		'id'
	])

	const note = data.filter(nt => ( nt.id == props.id ))
</script>

<template>
	<h1>GNOTES - Edit Note Form</h1>

	<FormNoteVue
		:title="note[0].title"
		:tags="note[0].tags"
		:content="note[0].content"
	/>
</template>