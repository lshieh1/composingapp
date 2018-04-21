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

	getBeats(song_id) {
		return axios.get(`/api/songs/${song_id}/beats`)
	}

	createBeat(song_id,beat) {
		return axios({
			method: 'POST',
			url: `/api/songs/${song_id}/beats`,
			data: {
				instrument: beat.instrument,
				instrument_id: beat.instrument_id,
				bits: beat.bits,
				song_id: song_id
			}
		})
	}
}

export default new apiServices()