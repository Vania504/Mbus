import requestService from "../requestService";

export default {
	async createBus(form) {
		const response = await requestService.post(`/`, form)
		return response?.data
	},
    async updateBus(form) {
		const response = await requestService.post(`/`, form)
		return response?.data
	},
    async getBuses() {
		const response = await requestService.get(`/`)
		return response?.data
	},
    async getBus(uuid) {
		const response = await requestService.get(`/${uuid}`,)
		return response?.data
	},
    async deleteRoute(uuid) {
		const response = await requestService.post(`/${uuid}`)
		return response?.data
	},
}