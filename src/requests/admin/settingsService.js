import requestService from "../requestService";
import store from '@/store';

export default {
	async createSetting(form) {
		const response = await requestService.post(`/settings`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
    async updateSetting(id,form) {
		const response = await requestService.post(`/settings/${id}`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
    async getSettingList(type) {
		const response = await requestService.get(`/settings/${type}`)
		return response?.data
	},
    async getSettingListForAdmin(type) {
		const response = await requestService.get(`/settings/${type}`, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
    async getSetting(id) {
		const response = await requestService.post(`/setting/${id}`, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
}