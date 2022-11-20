<script setup>
	defineProps({
		url: String,
		type: String
	})
</script>

<template>
	<router-link :to="url">
		<article class="gn_card">
			<p v-if="type === 'icon'" class="gn_card_content_icon">
				<slot></slot>
			</p>

			<p v-else class="gn_card_content_title">
				<slot></slot>
			</p>
		</article>
	</router-link>
</template>