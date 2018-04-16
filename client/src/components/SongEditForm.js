import React from 'react'
import {Redirect} from 'react-router-dom'
import services from '../services/apiServices'
import instruments from '../services/instruments'

import BeatList from './BeatList'

class SongEditForm extends React.Component {
	constructor() {
		super()
		this.state = {
			apiDataLoaded: false,
			apiData: null,
			title: '',
			created_by: '',
			notes: '',
			pattern: '',
			instrument: '',
			recently_edited_by: '',
			fireRedirect: false
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	componentDidMount() {
		console.log(this.props)
		services.getOneSong(this.props.match.params.id).then(song => {
			this.setState({
				apiDataLoaded: true,
				apiData: song.data,
				title: song.data.song.title,
				created_by: song.data.song.created_by,
				recently_edited_by: song.data.recently_added_by
			})
		}).catch(err => {
			console.log('err',err)
		})
	}

	handleInputChange(e) {
		let name = e.target.name
		let value = e.target.value
		this.setState({
			[name]: value
		})
	}

	handleFormSubmit(e) {
		e.preventDefault()
		services.updateSong(this.state,this.props.match.params.id).then(song => {
			this.setState({
				fireRedirect: true
			})
		}).catch(err => {
			console.log('err',err)
		}) 
	}

	cleanInstrumentString(str) {
		let array = str.split('_')
		let result = ''
		array.forEach(a => {
			let hold = a.charAt(0).toUpperCase()+a.slice(1)
			result+=hold+' '
		})
		return result
	}

	renderEditForm() {
		return (
			<form className='edit-form' onSubmit={this.handleFormSubmit}>
			</form>
		)
	}

	render() {
		return (
			<div className='song-edit-form'>
				<h1>Add Your Own Beat!</h1>
				<BeatList song_id={this.props.match.params.id}/>
			</div>
		)
	}
}

export default SongEditForm