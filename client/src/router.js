import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import App from './App'
import SongList from './components/SongList'
import SongEditForm from './components/SongEditForm'

export default (
	<Router>
		<Switch>
			<Route exact path='/' component={App} />
			<Route exact path='/songs' component={SongList} />
			<Route path='/songs/:id/edit' component={SongEditForm} />
		</Switch>
	</Router>
)