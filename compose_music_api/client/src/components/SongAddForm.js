import React from 'react'
import {Redirect} from 'react-router-dom'
import services from '../services/apiServices'

class SongAddForm extends React.Component {
	constructor() {
		super()
		this.state = {
			title: '',
			created_by: '',
			fireRedirect: false
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
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
		services.createSong(this.state).then(song => {
			this.setState({
				fireRedirect: true
			})
		}).catch(err => {
			console.log('err',err)
		})
	}

	render() {
		return (
			<div className='create-form'>
				<form onSubmit={this.handleFormSubmit}>
					<input type='text' name='title' placeholder='Song Title' onChange={this.handleInputChange} />
					<input type='text' name='created_by' placeholder='Your name/sn' onChange={this.handleInputChange} />
					<input type='submit' value='Create Song'/>
				</form>
				{this.state.fireRedirect ? <Redirect to='/songs' /> : ''}
			</div>
		)
	}
}

export default SongAddForm