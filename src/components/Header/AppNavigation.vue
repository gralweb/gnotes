<script setup>
	defineProps({
		menuState: Boolean,
		menuHandle: Function
	})
</script>

<template>
	
	<section :class=" menuState ? 'gn_navigation open' : 'gn_navigation' ">
		<button type="button" class="gn_navigation_close" @click="menuHandle">
			<span></span>
			<span></span>
		</button>

		<ul>
			<li>
				<router-link to="/">Home View</router-link>
			</li>
			<li>
				<router-link to="/note/id-or-name-note">Note View</router-link>
			</li>
			<li>
				<router-link to="/add">Add Note View</router-link>
			</li>
			<li>
				<router-link to="/tag/tag-name-or-id">Tag Notes View</router-link>
			</li>
			<li>
				<router-link to="/edit/id-or-name-note">Edit Note View</router-link>
			</li>
		</ul>
	</section>

</template>
