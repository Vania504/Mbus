import axios from 'axios'

export default {
	async getCoordinates(cityname) {
		const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityname}&key=AIzaSyDjv7izdGTG6V_5XF7VwqJOzbjEYYiJjKc`)
		return response?.data
	},
}