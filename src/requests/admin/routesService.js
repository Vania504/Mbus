import requestService from "../requestService";
import store from '@/store';

export default {
	async createRoute(form) {
		const response = await requestService.post(`/route`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async updateRoute(id, form) {
		const response = await requestService.post(`/route/${id}`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async getRoute(id) {
		const response = await requestService.get(`/route/${id}`)
		return response?.data
	},
	async getRouteForAdmin() {
		const response = await requestService.get(`/route`, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async getRoutes() {
		const response = await requestService.get(`/routes`)
		return response?.data
	},
}