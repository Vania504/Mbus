import requestService from "../requestService";

export default {
	async sendOrder(form) {
		const response = await requestService.post(`/requestOrder`, form)
		return response?.data
	},
    async updateOrder(id,form) {
		const response = await requestService.post(`/requestOrder/${id}`, form)
		return response?.data
	},
    async getOrders() {
		const response = await requestService.get(`/requestOrder`)
		return response?.data
	},
    async getOrder(id) {
		const response = await requestService.get(`/requestOrder/${id}`)
		return response?.data
	},
}