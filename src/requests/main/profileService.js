import requestService from "../requestService";
import store from "@/store";

export default {
    async getUserProfile() {
        const response = await requestService.get(`/profile`, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },
    async updateUserProfile(form) {
        const response = await requestService.post(`/profile`, form, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },
    async updateUserPassword(form) {
        const response = await requestService.post(`/profile/password`, form, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },
}