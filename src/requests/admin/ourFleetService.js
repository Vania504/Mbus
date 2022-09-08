import requestService from "../requestService";
import store from '@/store';

export default {
	async createBus(form) {
		const response = await requestService.post(`/bus`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async updateBus(uuid, form) {
		const response = await requestService.post(`/bus/${uuid}`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async getBuses() {
		const response = await requestService.get(`/buses`)
		return response?.data
	},
	async getBusesForAdmin() {
		const response = await requestService.get(`/bus`,  {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async getBus(id) {
		const response = await requestService.get(`/bus/${id}`,)
		return response?.data
	},
	async deleteBus(uuid) {
		const response = await requestService.post(`/${uuid}`)
		return response?.data
	},
}