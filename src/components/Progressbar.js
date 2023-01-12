import React from 'react'

const Progressbar = ({bgcolor,progress,height,lebelText}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		margin: 20
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderRadius:40,
		textAlign: 'right'
		
	}
	
	const progresstext = {
		padding: 10,
		color: 'white',
		fontWeight: 700
	}

	const labelText = {

	}
		
	return (
	<div style={Parentdiv}>
		
	<div style={Childdiv}>
	<p className='text-left inline-block float-left font-Regular text-[15px] pl-2 text-white'>{""}</p> 
		<span style={progresstext}>{`${progress}%`} </span>
	</div>
	</div>
	)
}

export default Progressbar;
