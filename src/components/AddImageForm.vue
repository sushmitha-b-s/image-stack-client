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
		</div>

		<div class="form__btn">
			<input type="submit" value="Add" class="btn btn--rect" />
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
			currImageFile: '',
		}
	},

	methods: {
		onFileChange(e) {
			const files = e.target.files

			if (files.length) {
				this.currImageFile = files[0]
			}
		},

		submit() {
			const formData = new FormData()
			formData.append('arrayIndex', this.newImage.arrayIndex)
			formData.append('imageFile', this.currImageFile)

			this.$emit('clicked:add-image', formData)
		},
	},
}
</script>
