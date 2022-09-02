import requestService from "../requestService";

export default {
	async signUp(form) {
		const response = await requestService.post(`/`, form)
		return response?.data
	},
    async signIn(form) {
		const response = await requestService.post(`/`, form)
		return response?.data
	},
    async resetPassword(form) {
		const response = await requestService.post(`/`, form)
		return response?.data
	},
}