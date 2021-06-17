<template>
	<div class="nav__btns">
		<button class="nav__btn btn btn--round btn--move">generate</button>
		<button class="nav__btn btn btn--round btn--move" @click="openModal">
			Add image
		</button>

		<Modal>
			<template slot="header">Add new image</template>
			<template slot="body">
				<AddImageForm />
			</template>
		</Modal>
	</div>
</template>

<script>
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
