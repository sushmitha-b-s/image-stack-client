<template>
	<main class="images__container">
		<p class="images__default-str" v-if="imagesLength === 0">
			&#9888; Please add one or more images to see image variations.
		</p>
		<div class="row" v-else>
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

		imagesLength() {
			return this.images && this.images.length
		},
	},
}
</script>
