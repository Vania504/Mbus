import requestService from "../requestService";

export default {
    async getStartCities() {
        const response = await requestService.get(`/start_city`)
        return response?.data
    },
    async getNextCities(start_city) {
        const response = await requestService.get(`/next_city/${start_city}`)
        return response?.data
    },
    async searchRoute(start_city, end_city){
        const response = await requestService.get(`/search/${start_city}/${end_city}`)
        return response?.data
    }
}