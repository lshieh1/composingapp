import React from 'react'

const Song = (props) => {
	return (
		<div className='song'>
			<h1>{props.title}</h1>
			<p>Created By: {props.created_by}</p>
		</div>
	)
}

export default Song