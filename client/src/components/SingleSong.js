import React from 'react'
import {Redirect} from 'react-router-dom'
import services from '../services/apiServices'

class SingleSong extends React.Component {
	constructor() {
		super()
		this.state = {
			apiDataLoaded: false,
			apiData: null,
			fireRedirect: false
		}
	}

	componentDidMount() {
		services.getOneSong(this.props.match.params.id).then(song => {
			apiDataLoaded: true,
			apiData: song.data
		}).catch(err => {
			console.log('err',err)
		})
	}

	renderSong() {
		return (
			<div className='single-song'>
				<h1>{this.state.apiData.song.title}</h1>
			</div>
		)
	}
}

export default SingleSong