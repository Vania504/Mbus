import requestService from "../requestService";
import store from '@/store';

export default {
	async createRoute(form) {
		const response = await requestService.post(`/route`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async updateRoute(uuid, form) {
		const response = await requestService.post(`/route/${uuid}`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async getRoute(uuid) {
		const response = await requestService.get(`/route/${uuid}`)
		return response?.data
	},
	async getRoutes() {
		const response = await requestService.get(`/route`)
		return response?.data
	},
	async deleteRoute(uuid) {
		const response = await requestService.post(`/${uuid}`)
		return response?.data
	},
}