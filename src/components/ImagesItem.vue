<template>
	<div class="images__variation">
		<figure
			v-for="image in imageVariation"
			:key="image.index"
			:image="image"
			class="images__figure"
		>
			<ImagesSubItem :image="image" />
		</figure>
	</div>
</template>

<script>
import ImagesSubItem from './ImagesSubItem.vue'

export default {
	name: 'ImagesItem',
	components: {
		ImagesSubItem,
	},

	props: {
		imageVariation: {
			type: Array,
			required: true,
		},
	},
}
</script>
