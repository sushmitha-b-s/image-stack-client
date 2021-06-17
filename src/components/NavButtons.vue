<template>
	<div class="nav__btns">
		<button class="nav__btn">generate</button>
		<button class="nav__btn" @click="openModal">Add image</button>

		<Modal>
			<template slot="header">Add new image</template>
			<template slot="body"> this is the body</template>
		</Modal>
	</div>
</template>

<script>
import Modal from './Modal.vue'

export default {
	name: 'NavButtons',
	components: {
		Modal,
	},

	data() {
		return {
			showModal: false,
		}
	},

	methods: {
		openModal() {
			const modal = document.querySelector('.modal')
			modal.classList.remove('hidden')
		},
	},
}
</script>
