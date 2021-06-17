import axios from 'axios'

const apiClient = axios.create({
	baseURL: 'http://localhost:8000',
	withCredentials: true,
})

export default {
	setCSRFCookie() {
		apiClient.get('/sanctum/csrf-cookie').then(res => {})
	},

	fetchImages() {
		return apiClient.get('/images')
	},
}
