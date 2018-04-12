import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import App from './App'
import Login from './Login'
import Signup from './Signup'
import SongList from './components/SongList'
import SingleSong from './components/SingleSong'

export default (
	<Router>
		<Switch>
			<Route exact path='/' component={App} />
			<Route exact path='/songs' component={SongList} />
			<Route path='/songs/:id' component={SingleSong} />
			<Route path='/login' component={Login} />
			<Route path='/signup' component={Signup} />
		</Switch>
	</Router>
)