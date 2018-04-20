import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import './App.css';

import SongList from './components/SongList'
import apiServices from './services/apiServices'

class App extends Component {

	render() {
		return (
			  <div className="App">
			    <SongList />
			  </div>
			)
		}
	}

export default App
