<script setup>
	defineProps({
		title: String,
		tags: Array,
		content: String,
	})

	const handlerForm = e => {
		e.preventDefault()

		console.log("form handler")
	}
</script>

<template>
	<form class="gn_form_note" action="javascript();">
		<div class="gn_form_note_title">
			<label for="title">Titulo</label>
			<input autofocus type="text" id="title" :value="title ?? 'no content'">
		</div>
		<div class="gn_form_note_tags">
			<label for="tags">Tags</label>
			<input type="text" id="tags" :value="tags ?? 'no content'">
		</div>
		<div class="gn_form_note_content">
			<label for="content">Nota</label>
			<textarea id="content">{{ content ?? 'no content' }}</textarea>
		</div>

		<div class="gn_form_note_buttons">
			<button type="submit" @click="handlerForm" class="gn_form_note_cancel">Cancelar</button>
			<button type="submit" @click="handlerForm" class="gn_form_note_save">Guardar</button>
		</div>
	</form>
</template>