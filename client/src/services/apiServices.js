import axios from 'axios'

class apiServices {

	getAllSongs() {
		return axios.get('/api/songs')
	}

	getOneSong(id) {
		return axios.get(`/api/songs/${id}`)
	}

	createSong(song) {
		return axios({
			method: 'POST',
			url: '/api/songs',
			data: {
				title: song.title,
				created_by: song.created_by
			}
		})
	}

	updateSong(song,id) {
		return axios({
			method: 'PUT',
			url: `/api/songs/${id}`,
			data: {
				notes: song.notes,
				pattern: song.pattern,
				recently_edited_by: song.recently_edited_by
			}
		})
	}
}

export default new apiServices()