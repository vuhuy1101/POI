import React, { PropTypes } from 'react'
import classes from '../styles/app.css'

const Table = ({num, length, onUpdateCurrentTableClicked}) => {
	const checkLength = length > 0
	const name = checkLength ? "tables in-use" : "tables available"
	
	return (
		<div className="tableList">
			<button 
				className={ name }
				onClick={ onUpdateCurrentTableClicked }
				
			>Table {num}</button>
		</div>
	)
}

export default Table