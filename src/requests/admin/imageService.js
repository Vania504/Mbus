import requestService from "../requestService";
import store from '@/store';

export default {
    async getImages(type, page) {
        const response = await requestService.get(`/image/${type}?page=${page}`, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },
    async uploadImage(form) {
        const response = await requestService.post(`/image`, form, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },

}