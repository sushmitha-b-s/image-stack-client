<template>
	<form class="form" @submit.prevent="submit">
		<div class="form__group">
			<label for="arrayIndex" class="form__label">Array Index: </label>
			<select
				name="arrayIndex"
				id="arrayIndex"
				class="form__select"
				v-model="newImage.arrayIndex"
			>
				<option value="" class="form__select-option">Select an index</option>
				<option
					v-for="(arrayIndex, index) in arrayIndexes"
					:key="index"
					:arrayIndex="arrayIndex"
					:value="arrayIndex"
					class="form__select-option"
				>
					{{ arrayIndex }}
				</option>
			</select>

			<p class="form__error" v-if="errors && errors.arrayIndex">
				{{ this.errors.arrayIndex }}
			</p>
		</div>

		<div class="form__group">
			<label for="imageFile" class="form__label">Image file:</label>
			<input
				type="file"
				name="imageFile"
				id="imageFile"
				class="form__file"
				data__form__file
				@change="onFileChange"
			/>

			<p class="form__error" v-if="errors && errors.imageFile">
				{{ this.errors.imageFile }}
			</p>
		</div>

		<div class="form__btn">
			<input
				type="submit"
				value="Add"
				class="btn btn--rect btn--submit"
				:disabled="!newImage.arrayIndex || !imageFile"
			/>
		</div>
	</form>
</template>

<script>
export default {
	name: 'AddImageForm',

	props: {
		newImage: {
			type: Object,
			required: true,
		},
	},

	data() {
		return {
			arrayIndexes: [0, 1, 2, 3],
			imageFile: '',
			errors: {
				arrayIndex: '',
				imageFile: '',
			},
		}
	},

	methods: {
		onFileChange(e) {
			const files = e.target.files

			if (files.length) {
				this.imageFile = files[0]
			}
		},

		submit() {
			if (!this.newImage.arrayIndex)
				this.errors.arrayIndex = 'Please select the array index.'

			if (!this.imageFile) this.errors.imageFile = 'Please choose a file.'

			if (this.errors.arrayIndex || this.errors.imageFile) return

			const formData = new FormData()
			formData.append('arrayIndex', this.newImage.arrayIndex)
			formData.append('imageFile', this.imageFile)

			this.$emit('clicked:add-image', formData)
		},
	},
}
</script>
