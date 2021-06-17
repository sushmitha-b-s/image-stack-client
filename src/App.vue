<template>
	<div id="app">
		<NavBar />
		<router-view />
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
