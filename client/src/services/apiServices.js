import axios from 'axios'

class apiServices {

	userLogin(request) {
		return axios({
			method: 'POST',
			url: "http://localhost:3000/api/user_token",
			data: request
		})
	}

	userSignup(userInfo) {
		return axios({
			method: 'POST',
			url: "/api/users",
			data: {
				email: userInfo.email,
				password: userInfo.password,
				password_confirmation: userInfo.password_confirmation
			}

		})
	}

	getAllSongs() {
		return axios.get('/api/songs')
	}

}

export default new apiServices()