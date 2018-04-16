import React from 'react'
import services from '../services/apiServices'

class BeatAddForm extends React.Component {
	constructor() {
		super()
		this.state = {
			instrument: '',
			instrument_id: -1,
			bits: '',
			song_id: -1,
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
		services.createBeat(this.props.song_id,this.state).then(beat => {
			this.setState({
				fireRedirect: true
			})
		}).catch(err => {
			console.log('err',err)
		})
	}

	render() {
		return (
			<div className='beat-add-form'>

			</div>
		)
	}
}

export default BeatAddForm