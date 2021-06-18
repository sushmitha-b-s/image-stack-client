import axios from 'axios'

const apiClient = axios.create({
	baseURL: 'http://localhost:8000',
	withCredentials: true,
})

export default {
	// Initialize csrf protection (as mentioned in docs - Laravel Sanctum)
	setCSRFCookie() {
		apiClient.get('/sanctum/csrf-cookie').then(res => {})
	},

	fetchImages() {
		return apiClient.get('/images')
	},

	addImage(newImage) {
		return apiClient.post('/images', newImage)
	},
}
