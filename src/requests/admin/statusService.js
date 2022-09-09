import requestService from "../requestService";
import store from '@/store';

export default {
	async createStatus(form) {
		const response = await requestService.post(`/status`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
    async updateStatus(id,form) {
		const response = await requestService.post(`/status/${id}`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
    async getStatusList(type) {
		const response = await requestService.get(`/statuses${type}`, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
    async getStatus(id) {
		const response = await requestService.post(`/status/${id}`, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
}