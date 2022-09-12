import requestService from "../requestService";
import store from '@/store';

export default {
    async createContent(form) {
        const response = await requestService.post(`/content`, form, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },
    async updateContent(id, form) {
        const response = await requestService.post(`/content/${id}`, form, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },
    async getContents() {
        const response = await requestService.get(`/contents`)
        return response?.data
    },
    async getContentForAdmin() {
        const response = await requestService.get(`/content`, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },
    async getContent(id) {
        const response = await requestService.get(`/content/${id}`, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },
}