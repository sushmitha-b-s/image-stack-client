<template>
	<div id="app">
		<NavBar />
		<router-view />

		<footer class="footer">
			&copy; 2021 by ImageStack. All rights reserved.
		</footer>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ImageService from '@/services/ImageService'

export default {
	name: 'App',
	components: {
		NavBar,
	},

	created() {
		ImageService.setCSRFCookie()
	},
}
</script>
