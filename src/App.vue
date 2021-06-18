<template>
	<div id="app">
		<NavBar />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ImageService from '@/services/ImageService'

export default {
	name: 'App',
	components: {
		NavBar,
		Footer,
	},

	created() {
		ImageService.setCSRFCookie()
	},
}
</script>
