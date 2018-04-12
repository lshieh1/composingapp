import React from 'react'
import {Redirect} from 'react-router-dom'
import services from '../services/apiServices'

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
			recently_edited_by: '',
			fireRedirect: false
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	componentDidMount() {
		services.getOneSong(this.props.match.params.id).then(song => {
			this.setState({
				apiDataLoaded: true,
				apiData: song.data,
				title: song.data.song.title,
				created_by: song.data.song.created_by,
				notes: song.data.song.notes,
				pattern: song.data.pattern,
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

	renderEditForm() {
		return (
			<form className='edit-form' onSubmit={this.handleFormSubmit}>
				
			</form>
		)
	}
}

export default SongEditForm