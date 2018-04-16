import React from 'react'

const Song = (props) => {
	return (
		<div className='song'>
			<h2>{props.title}</h2>
			<p>Created By: {props.created_by}</p>
			<a href={`/songs/${props.id}/edit`}>More</a>
		</div>
	)
}

export default Song