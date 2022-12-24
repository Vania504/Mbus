import requestService from "../requestService";
import store from "@/store";

export default {
	async signUp(form) {
		const response = await requestService.post(`/register`, form)
		return response?.data
	},
	async signIn(form) {
		const response = await requestService.post(`/login`, form)
		return response?.data
	},
	async refreshToken() {
		var form = new FormData();
		form.append("token", store.getters.loggedUser.token);
		let res = requestService.post(`/refresh`, form).then((response) => {
			let result = response?.data.authorisation;
			store.dispatch('updateInfoLogged', {
				token: result.token
			})
			return response
		})
		return res.data
	},
	async resetPassword(form) {
		const response = await requestService.post(`/resetRequest`, form)
		return response?.data
	},
	async getUsers() {
		const response = await requestService.get(`/users`, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async createUser(form) {
		const response = await requestService.post(`/user`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async updateUser(id, form) {
		const response = await requestService.post(`/user/${id}`, form, {
			headers: { Authorization: `Bearer ${store.getters.loggedUser.token}` }
		})
		return response?.data
	},
	async changePassword(form) {
		const response = await requestService.post(`/changePassword`, form)
		return response?.data
	}
}