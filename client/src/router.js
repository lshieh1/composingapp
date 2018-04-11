import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import App from './App'
import Login from './Login'
import Signup from './Signup'
import SongList from './SongList'

export default (
	<Router>
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={Signup} />
			<Route exact path='/songs' component={SongList} />
		</Switch>
	</Router>
)