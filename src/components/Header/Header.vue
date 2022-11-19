<script setup>
	import { ref } from 'vue'
	import AppNavigation from './AppNavigation.vue'

	const stateMenu = ref(false)

	const handleMenuOpen = () => {
		stateMenu.value = !stateMenu.value
	}

</script>

<template>
	<header class="gn_header">
		<section class="gn_brand">
			<figure>
				<router-link to="/">
					<img src="./../../assets/gnotes_logo.png" alt="GNOTES" title="GNOTES">
				</router-link>
			</figure>
		</section>
		
		<section class="gn_content_navigation">		
			<button type="button" class="gn_navigation_open" @click="handleMenuOpen">
				<span></span>
				<span></span>
				<span></span>
			</button>

			<AppNavigation :menuState="stateMenu" :menuHandle="handleMenuOpen" />
		</section>
	</header>
</template>
