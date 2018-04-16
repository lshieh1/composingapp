import React from 'react'


const Beat = (props) => {
	console.log(props)
	return (
		<div className='beat'>
			<form>
				<select value={props.instrument_id} disabled>
					{props.selectItems}
				</select>
				{parseInt(props.bits.charAt(0)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(1)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(2)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(3)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(4)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(5)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(6)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(7)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(8)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(9)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(10)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(11)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(12)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(13)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(14)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
				{parseInt(props.bits.charAt(15)) ? <input type='checkbox' checked disabled /> : <input type='checkbox' disabled />}
			</form>
		</div>
	)
}	

export default Beat