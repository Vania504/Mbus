import requestService from "../requestService";
import store from '@/store';

export default {
	async sendMessage(form) {
		const response = await requestService.post(`/message`, form)
		return response?.data
	},
	async updateMessage(id, form) {
		const response = await requestService.post(`/message/${id}`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async getMessages(status_id) {
		const response = await requestService.get(`/messages/${status_id}`, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async getMessage(id) {
		const response = await requestService.get(`/message/${id}`, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async deleteMessage(id){
		const response = await requestService.delete(`/message/${id}`, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	}
}