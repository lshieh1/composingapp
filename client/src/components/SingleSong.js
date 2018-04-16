import React from 'react'
import {Redirect} from 'react-router-dom'
import services from '../services/apiServices'

class SingleSong extends React.Component {
	constructor() {
		super()
		this.state = {
			apiDataLoaded: false,
			apiData: null
		}
	}

	componentDidMount() {
		services.getOneSong(this.props.match.params.id).then(song => {
			this.setState({
				apiDataLoaded: true,
				apiData: song.data
			})
		}).catch(err => {
			console.log('err',err)
		})
	}

	renderSong() {
		return (
			<div className='single-song'>
				<h1>{this.state.apiData.song.title}</h1>
				<a href={`/songs/${this.state.apiData.song.id}/edit`}>Add to Song!</a>
			</div>
		)
	}

	render() {
		return (
			<div className='song-single'>
				{this.state.apiDataLoaded ? this.renderSong() : ''}
			</div>
		)
	}
}

export default SingleSong