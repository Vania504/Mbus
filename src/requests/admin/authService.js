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
		form.append("email", store.getters.loggedUser.email);
		form.append("password", store.getters.loggedUser.password);
		let res = requestService.post(`/refresh`, form).then((response) => {
			let result = response?.data.result;
			store.dispatch('updateInfoLogged', {
				accessToken: result.access_token,
				token: result.token
			})
			return response
		})
		return res
	},
	async resetPassword(form){
		const response = await requestService.post(`/`, form)
		return response?.data
	}
	async changePassword(form){
		const response = await requestService.post(`/`, form)
		return response?.data
	}
}