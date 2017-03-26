import {
	ADD_TO_RECEIPT,
	CHECKOUT_REQUEST,
	VIEW_CURRENT_TABLE
} from '../constants/ActionTypes'

const RECEIPT_TEMPLATE = {id:0, addedIds:[], quantityById:{}}

const initialState = {
	tables: [
		{id:1, addedIds:[], quantityById:{}},
		{id:2, addedIds:[], quantityById:{}},
		{id:3, addedIds:[], quantityById:{}},
		{id:4, addedIds:[], quantityById:{}},
		{id:5, addedIds:[], quantityById:{}}
	],
	currentTable: {id: 1, addedIds:[], quantityById:{}}
}

const addedIds = (state = initialState.currentTable.addedIds, action) => {
	switch(action.type){
		case ADD_TO_RECEIPT:
			if(state.indexOf(action.itemId) !== -1){
				return state
			}
			return [...state, action.itemId]
		default:
			return state
	}
}

const quantityById = (state = initialState.currentTable.quantityById, action) => {
	switch(action.type){
		case ADD_TO_RECEIPT:
			const { itemId } = action
			return { ...state,
				[itemId] : (state[itemId] || 0) + 1
			}
		default:
			return state
	}
}

export const getQuantity = (state, itemId) => 
	state.currentTable.quantityById[itemId] || 0

export const getAddedIds = state => state.currentTable.addedIds

export const getTables = (state) => state.tables
export const getCurrentTable = (state) => state.currentTable

const receipt = (state = initialState, action) => {
	switch(action.type){
		case CHECKOUT_REQUEST:
			var currentId = state.currentTable.id
			var tmp = Object.assign({}, RECEIPT_TEMPLATE, {id: currentId})
			if(currentId == 1){
				var updatedTable = [tmp].concat(state.tables.slice(currentId))
			} else {
				var updatedTable = state.tables.slice(0,currentId-1).concat(tmp).concat(state.tables.slice(currentId))
			}
			return {
				tables: updatedTable,
				currentTable: tmp
			}
		case VIEW_CURRENT_TABLE:
			var tmp = state.tables[action.tableId-1]
			var nextState = Object.assign({}, RECEIPT_TEMPLATE, tmp)
			return {
				tables: state.tables,
				currentTable: nextState
			}
		default:
			var ids = addedIds(state.currentTable.addedIds, action)
			var quantity = quantityById(state.currentTable.quantityById, action)
			var currentId = state.currentTable.id
			var current = Object.assign({}, state.currentTable, 
					{id:state.currentTable.id}, 
					{addedIds: ids},
					{quantityById: quantity}
				)
			var updatedTable = state.tables.slice(0,currentId-1).concat(current).concat(state.tables.slice(currentId))
			return {
				currentTable: current,
				tables: updatedTable
			}
	}
}

export default receipt