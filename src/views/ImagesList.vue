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

<!-- <img
    src="https://wallpapersafari.com/wallpaper-pictures-nature/"
    alt="Nature"
/>

<img
    src="https://images-na.ssl-images-amazon.com/images/I/71j7BLvnvXL._SX355_.jpg"
    alt=""
/>

<img
    src="https://i.ytimg.com/vi/a49Tn9iRpWQ/maxresdefault.jpg"
    alt=""
/>

<img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjnSBQSOCJ30SsmDfnbz2X4q8rydo4SYFzR8puD-YGcTn7guk2R27oEw3oJN5WIfjwxQ&usqp=CAU"
    alt=""
/>

<img
    src="https://images.squarespace-cdn.com/content/v1/5ef35bc51f8b3552e6bf9633/1617201648287-OY8I0RP1T9H4K0SQMII6/ke17ZwdGBToddI8pDm48kFpMX3xNTiJ3K2ARERDRu9d7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jAoOkRmPE63FUjiJOEKAz6CWiIXCa_EZdV2f9jqcEhicpkgyNdjLnHuUHgFJG3ySQ/unsplash-image-IHKBF23A_iw.jpg?format=2500w"
    alt=""
/> -->
