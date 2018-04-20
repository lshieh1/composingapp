import React from 'react'

const Song = (props) => {
	return (
		<div className='song'>
			<hr />
			<h2>{props.title}</h2>
			<p>Created By: {props.created_by}</p>
			<a href={`/songs/${props.id}/edit`}>More</a>
			<hr />
		</div>
	)
}

export default Song