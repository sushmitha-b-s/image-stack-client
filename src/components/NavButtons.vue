<template>
	<div class="nav__btns">
		<button
			class="nav__btn btn btn--round btn--move"
			@click="generateImages"
			v-if="imagesLength"
		>
			generate
		</button>
		<button class="nav__btn btn btn--round btn--move" @click="openModal">
			Add image
		</button>

		<Modal :closeModal="closeModal">
			<template slot="header">Add new image</template>
			<template slot="body">
				<AddImageForm
					@clicked:add-image="addImage"
					:newImage="newImage"
					:imagesLength="imagesLength"
				/>
			</template>
		</Modal>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Modal from './Modal'
import AddImageForm from './AddImageForm'

export default {
	name: 'NavButtons',
	components: {
		Modal,
		AddImageForm,
	},

	data() {
		return {
			showModal: false,
			newImage: this.createNewImage(),
		}
	},

	computed: {
		...mapGetters({
			images: 'images/all',
		}),

		imagesLength() {
			return this.images && this.images.length
		},
	},

	methods: {
		openModal() {
			this.newImage = this.createNewImage()

			const modal = document.querySelector('.modal')
			modal.classList.remove('hidden')
		},

		closeModal() {
			const modal = document.querySelector('.modal')
			modal.classList.add('hidden')

			this.newImage = this.createNewImage()
		},

		createNewImage() {
			return {
				arrayIndex: '',
			}
		},

		addImage(image) {
			this.$store.dispatch('images/add', image).then(() => {
				this.closeModal()
			})
		},

		generateImages() {
			this.$store.dispatch('images/fetch')
		},
	},
}
</script>
