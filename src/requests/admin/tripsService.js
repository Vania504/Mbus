import requestService from "../requestService";
import store from '@/store';

export default {
    async getTrips() {
        const response = await requestService.get(`/trips`)
        return response?.data
    },
    async getDeletedTrips() {
        const response = await requestService.get(`/trips/deleted`)
        return response?.data
    },
    async getTripsByStatus(status) {
        const response = await requestService.get(`/trips/${status}`)
        return response?.data
    },
    async getTripById(id) {
        const response = await requestService.get(`/trips/${id}`)
        return response?.data
    },
    async createTrip(form) {
        const response = await requestService.post(`/trip`, form, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },
    async updateTrip(id, form) {
        const response = await requestService.post(`/trip/${id}`, form, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },
    async restoreTrip(id, form) {
        const response = await requestService.post(`/trip/restore/${id}`, form, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    },
    async deleteTrip(id) {
        const response = await requestService.delete(`/trip/${id}`, {
            headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
        })
        return response?.data
    }
}