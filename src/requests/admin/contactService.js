import requestService from "../requestService";

export default {
	async sendMessage(form) {
		const response = await requestService.post(`/message`, form)
		return response?.data
	},
    async updateMessage(id,form) {
		const response = await requestService.post(`/message/${id}`, form)
		return response?.data
	},
    async getMessages() {
		const response = await requestService.get(`/message`)
		return response?.data
	},
    async getMessage(id) {
		const response = await requestService.get(`/message/${id}`)
		return response?.data
	},
}