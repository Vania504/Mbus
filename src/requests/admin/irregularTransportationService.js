import requestService from "../requestService";
import store from '@/store';

export default {
	async sendOrder(form) {
		const response = await requestService.post(`/requestOrder`, form)
		return response?.data
	},
	async updateOrder(id, form) {
		const response = await requestService.post(`/requestOrder/${id}`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async getOrders(status_id) {
		const response = await requestService.get(`/requestOrders/${status_id}`, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async getOrder(id) {
		const response = await requestService.get(`/requestOrder/${id}`, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
}