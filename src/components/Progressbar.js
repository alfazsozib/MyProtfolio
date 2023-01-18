import React from 'react'

const Progressbar = ({bgcolor,progress,height,lebelText}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 10,
		margin: 20
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderRadius:10,
		textAlign: 'right'
		
	}
	
	const progresstext = {
		padding: 10,
		color: 'white',
		fontWeight: 700
	}
		
	return (
	<div style={Parentdiv}>
		
	<div style={Childdiv}>
	<p className='text-left inline-block float-left font-Regular text-[15px] pl-2 text-white'>{lebelText}</p> 
		<span style={progresstext}>{`${progress}%`} </span>
	</div>
	</div>
	)
}

export default Progressbar;
