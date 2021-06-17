<template>
	<div>
		<div class="modal hidden">
			<div class="modal__content">
				<h2 class="modal__header">
					<slot name="header"></slot>
				</h2>

				<span class="modal__close" @click="closeModal">
					&times;
				</span>

				<div class="modal__body">
					<slot name="body"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Modal',

	methods: {
		closeModal() {
			const modal = document.querySelector('.modal')
			modal.classList.add('hidden')
		},
	},
}
</script>
