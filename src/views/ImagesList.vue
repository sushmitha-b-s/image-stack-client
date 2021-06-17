<template>
	<main class="images__container">
		<div class="row">
			<div
				class="col images__col"
				v-for="(variation, index) in images"
				:key="index"
				:variation="variation"
			>
				<ImagesItem :imageVariation="variation" />
			</div>
		</div>
	</main>
</template>

<script>
import { mapGetters } from 'vuex'
import ImagesItem from '@/components/ImagesItem'

export default {
	name: 'ImagesList',
	components: {
		ImagesItem,
	},

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
