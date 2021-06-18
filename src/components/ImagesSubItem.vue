<template>
	<!-- 
		The below require method inside image src works only if frontend 
		and backend projects are on the same level inside a folder 
	-->
	<img
		:src="
			require(`../../../image-stack-server/public/storage/images/${image.name}`)
		"
		:alt="`Image layer ${image.index}`"
		:class="`images__layer images--${image.index}`"
	/>
</template>

<script>
export default {
	name: 'ImagesSubItem',
	props: {
		image: {
			type: Object,
			required: true,
		},
	},
}
</script>
