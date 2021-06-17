<template>
	<main class="images__container">
		<div class="row">
			<div class="col">
				col 1
			</div>
			<div class="col">
				col 2
			</div>
			<div class="col">
				col 3
			</div>
			<div class="col">
				col 4
			</div>
			<div class="col">
				col 6
			</div>
			<div class="col">
				col 6
			</div>
		</div>
	</main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'ImagesList',

	created() {
		this.$store.dispatch('images/fetch')
	},

	computed: {
		...mapGetters({
			images: 'images/all',
		}),
	},
}
</script>
