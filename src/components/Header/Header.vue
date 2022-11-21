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
		<router-link to="/">
			<section class="gn_brand">
				<figure>
						<img src="./../../assets/gnotes_logo.png" alt="GNOTES" title="GNOTES">
				</figure>
			</section>
		</router-link>
		
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
