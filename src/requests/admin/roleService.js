import requestService from "../requestService";
import store from '@/store';

export default {
    async getRoles() {
        const response = await requestService.get(`/roles`, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },
    async updateRole(id, form) {
        const response = await requestService.post(`/role/${id}`, form, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },
}