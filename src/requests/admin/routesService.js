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
	async getRoutes(page) {
		const response = await requestService.get(`/routes?page=${page}`)
		return response?.data
	},
	async getRoutesForMain(){
		const response = await requestService.get(`/carousel/6`)
		return response?.data
	}
}