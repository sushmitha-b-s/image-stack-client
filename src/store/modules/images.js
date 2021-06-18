import ImageService from '../../services/ImageService'

export const namespaced = true

export const state = {
	images: [],
}

export const mutations = {
	SET_IMAGES(state, images) {
		state.images = images
	},
}

export const actions = {
	fetch({ commit }) {
		return ImageService.fetchImages()
			.then(({ data }) => {
				commit('SET_IMAGES', data)
			})
			.catch(err => {
				console.log(err)
			})
	},

	add({ commit }, newImage) {
		return ImageService.addImage(newImage)
			.then(({ data }) => {
				//add setTimeout as the backend takes time to store the file to public folder
				setTimeout(() => {
					commit('SET_IMAGES', data)
				}, 1000)
			})
			.catch(err => {
				console.log(err)
			})
	},
}

export const getters = {
	all: state => state.images,
}
