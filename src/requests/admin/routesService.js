import requestService from "../requestService";

export default {
	async createRoute(form) {
		const response = await requestService.post(`/`, form)
		return response?.data
	},
    async updateRoute(form) {
		const response = await requestService.post(`/`, form)
		return response?.data
	},
    async getRoute(uuid) {
		const response = await requestService.get(`/${uuid}`)
		return response?.data
	},
    async getRoutes() {
		const response = await requestService.get(`/`)
		return response?.data
	},
    async deleteRoute(uuid) {
		const response = await requestService.post(`/${uuid}`)
		return response?.data
	},
}