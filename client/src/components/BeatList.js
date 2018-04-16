import React from 'react'
import MIDISounds from 'midi-sounds-react'
import {Redirect} from 'react-router-dom'
import services from '../services/apiServices'

import Beat from './Beat'
import BeatAddForm from './BeatAddForm'

class BeatList extends React.Component {
	constructor() {
		super()
		this.state = {
			apiDataLoaded: false,
			apiData: null,
			instrument: '',
			instrument_id: 0,
			bits: '',
			song_id: -1,
			fireRedirect: false 
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.tracks = []
		this.drums = []
		this.beats = []
		this.track = '0000000000000000'
	}

	componentDidMount() {
		services.getBeats(this.props.song_id).then(beats => {
			console.log(beats)
			this.setState({
				apiDataLoaded: true,
				apiData: beats.data,
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
		this.tracks
	}

	handleFormSubmit(e) {
		e.preventDefault()
		this.track = '0000000000000000'
		services.createBeat(this.props.song_id,this.state).then(beat => {
			this.setState({
				fireRedirect: true
			})
		}).catch(err => {
			console.log('err',err)
		})
	}

	renderBeats() {
		return this.state.apiData.beats.map(beat => {
			this.tracks.push(beat.bits)
			this.drums.push(beat.instrument_id)
			console.log(this.drums)
			console.log(beat)
			return <Beat {...beat} key={beat.id} selectItems={this.createSelectItems()}/>
		})
	}

	changeNumIndex(string,index) {
		if(parseInt(string.charAt(index)))
			return string.substring(0,index) + '0' + string.substring(index+1)
		else {
			return string.substring(0,index) + '1' + string.substring(index+1)
		}
	}

	getDrums(newDrum) {
		let array = []
		for(let o of this.state.apiData.beats) {
			array.push(o.instrument_id)
		}
		array.push(newDrum)
		return array
	}

	onSelectDrum(e) {
		let list = e.target
		let n = list.options[list.selectedIndex].getAttribute('value')
		let name = list.options[list.selectedIndex].getAttribute('')
		this.midiSounds.cacheDrum(n)
		this.drums.push(parseInt(n))
		console.log(this.drums)
		this.midiSounds.player.loader.waitLoad(() => {
			this.setState({
				instrument: this.midiSounds.player.loader.drumInfo(n).title,
				instrument_id: n
			})
		})
	}

	createSelectItems() {
		if(this.midiSounds) {
			if(!(this.items)) {
				this.items = []
				for(let i=0;i<this.midiSounds.player.loader.drumKeys().length;i++) {
					this.items.push(<option key={i} value={i}>{i.toString() + ' ' + this.midiSounds.player.loader.drumInfo(i).title}</option>)
				}
			}
			return this.items
		}
	}

	fillBeat() {
		for(let i=0;i<16;i++) {
			let drums=[]
			for(let j=0;j<this.tracks.length;j++) {
				if(parseInt(this.tracks[j].charAt(i))) {drums.push(this.drums[j])}
			}
			let beat = [drums,[]]
			this.beats[i]=beat
		}
	}

	toggleDrum(i) {
		this.track = this.changeNumIndex(this.track,i)
		console.log(this.track)
		this.setState({bits: this.track})
		this.tracks.push(this.track)
		console.log(this.tracks)
		this.fillBeat()
	}

	playLoop() {
		this.fillBeat()
		this.midiSounds.startPlayLoop(this.beats, 120, 1/16)
	}

	stopLoop() {
		this.midiSounds.stopPlayLoop()
	}

	render() {
		console.log(this.props)
		return (
			<div className='beat-list'>
				<h1></h1>
				{this.state.apiDataLoaded ? this.renderBeats() : <h2>Loading...</h2>}
				<div>
					<form onSubmit={this.handleFormSubmit}>
						<select value={this.state.instrument_id} onChange={this.onSelectDrum.bind(this)}>{this.createSelectItems()}</select>
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(0)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(1)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(2)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(3)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(4)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(5)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(6)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(7)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(8)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(9)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(10)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(11)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(12)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(13)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(14)} />
						<input type="checkbox" defaultChecked={0} onChange={(e)=>this.toggleDrum(15)} />
						<div>
							<input type='submit' value='Add New Beats!' />
						</div>
					</form>
				</div>
				{this.state.fireRedirect ? <Redirect exact to={`/songs/${this.props.song_id}/edit`} /> : ''}
				<div>
				<button onClick={this.playLoop.bind(this)}>Play Track</button>
				<button onClick={this.stopLoop.bind(this)}>Stop Track</button>
				</div>
				<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName='root' drums={this.state.apiDataLoaded ? this.getDrums() : <h2>Loading...</h2>}/>
			</div>
		)
	}
}

export default BeatList