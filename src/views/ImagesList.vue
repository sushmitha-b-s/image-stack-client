<template>
	<main class="images__container">
		<div class="row">
			<div
				class="col images__col"
				v-for="(variation, index) in images"
				:key="index"
				:variation="variation"
			>
				<div class="images__variation">
					<figure
						v-for="image in variation"
						:key="image.index"
						:image="image"
						class="images__figure"
					>
						<img
							:src="
								require(`../../../image-stack-server/public/storage/images/${image.name}`)
							"
							alt=""
							:class="`images__layer images--${image.index}`"
						/>
					</figure>
				</div>
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
