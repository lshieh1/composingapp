import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import apiServices from './services/apiServices'

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			password_confirmation: '',
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
		apiServices.userSignup(this.state).then(user => {
			this.setState({
				fireRedirect: true
			})
		}).catch(err => {
			console.log('err',err)
		}) 
	}

	render() {
		return (
			<div className="App">
				<h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
					Composing App
				</h1>
				<h2>Create Account</h2>
				<form onSubmit={this.handleFormSubmit}>
					<label htmlFor="email">Email: </label>
					<br />
					<input onChange={this.handleInputChange} name="email" type="email" />
					<br /><br />
					<label htmlFor="password">Password:</label>
					<br />
					<input onChange={this.handleInputChange} name="password" type="password" />
					<br /><br />
					<label htmlFor="password_confirmation">Confirm Password: </label>
					<br />
					<input onChange={this.handleInputChange} name="password_confirmation" type="password" />
					<br />
					<input type='submit' value='Sign Up!' />
				</form>
				<br />
				<a href='/login'>Already have an account? Log In here!</a>
				{this.state.fireRedirect ? <Redirect to='/login' /> : ''}
			</div>
		)
	}
}

export default Signup