import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import apiServices from './services/apiServices'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			logInSuccess: false
		}
	}

	login() {
		let email = document.querySelector('#email').value
		let password = document.querySelector('#password').value
		let request = {auth: {email: email, password: password}}
		console.log(request)
		apiServices.userLogin(request).then(res => {
			console.log(res)
			localStorage.setItem('jwt',res.jwt)
			this.setState({
				logInSuccess: true
			})

		}).catch(err => {
			console.log('User does not exist!')
		}) 
	}

	render() {
		return (
			<div className="App">
				<h1 style={{marginTop: "20vh", marginBottom: "5vh"}}>
					Composing App
				</h1>
				<h2>Log In</h2>
				<form>
					<label htmlFor="email">Email: </label>
					<br />
					<input name="email" id="email" type="email" />
					<br /><br />
					<label htmlFor="password">Password:</label>
					<br />
					<input name="password" id="password" type="password" />
				</form>
				<br />
				<button onClick={this.login}>
					Login
				</button>
				<br />
				<a href='/signup'>Don't have an account? Signup here!</a>
				{this.state.logInSuccess ? <Redirect to='/songs' /> : ''}
			</div>
		)
	}
}

export default Login