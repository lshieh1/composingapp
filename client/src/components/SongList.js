import React from 'react'
import apiServices from '../services/apiServices'

import Song from './Song'
import SongAddForm from './SongAddForm'

class SongList extends React.Component {
	constructor() {
		super()
		this.state = {
			apiDataLoaded: false,
			apiData: null
		}
	}

	componentDidMount() {
		apiServices.getAllSongs().then(songs => {
			console.log(songs)
			this.setState({
				apiDataLoaded: true,
				apiData: songs.data
			})
		}).catch(err => {
			console.log('err',err)
		})
	}

	renderSongs() {
		return this.state.apiData.songs.map(song => {
			return <Song {...song} key={song.id} />
		})
	}

	render() {
		return (
			<div className='song-list'>
				<h1>Song List</h1>
				{this.state.apiDataLoaded ? this.renderSongs() : <h1>Loading...</h1>}
				<SongAddForm />
			</div>
		)
	}
}

export default SongList