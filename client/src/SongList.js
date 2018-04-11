import React, {Component} from 'react'
import apiServices from './services/apiServices'

import Song from './Song'

class SongList extends Component {
	constructor() {
		super()
		this.setState({
			apiDataLoaded: false,
			apiData: null
		})
	}

	componentDidMount() {
		apiServices.getAllSongs().then(songs => {
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
				{this.state.apiDataLoaded ? this.renderSongs() : <h1>Loading...</h1>}
			</div>
		)
	}
}

export default SongList