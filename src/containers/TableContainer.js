import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateCurrentTable } from '../actions'
import { getTables, getCurrentTable } from '../reducers'
import Table from '../components/Table'

const TableContainer = ({ tables, currentTable, updateCurrentTable }) => (
	<div className="tableContainer">
		{
			tables.map(table => (
				<Table 
						key={table.id} 
						num={table.id} 
						length={table.addedIds.length}
						onUpdateCurrentTableClicked={() => updateCurrentTable(table.id)}
				/>
			))
		}
	</div>
)

const mapStateToProps = (state) => ({
	tables: getTables(state),
	currentTable: getCurrentTable(state)
})

export default connect(
	mapStateToProps,
	{ updateCurrentTable }
)(TableContainer)