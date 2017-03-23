import { combineReducers } from 'redux'
import receipt, * as fromReceipt from './receipt'
import items, * as fromItems from './items'

export default combineReducers({
	receipt,
	items
})

const getAddedIds = state => fromReceipt.getAddedIds(state.receipt)
const getQuantity = (state, id) => fromReceipt.getQuantity(state.receipt, id)
const getItem = (state, id) => fromItems.getItem(state.items, id)

export const getTotal = state =>
	getAddedIds(state) 
		.reduce((total, id) =>
			total + getItem(state, id).price * getQuantity(state, id),
			0
		)
		.toFixed(2)

export const getReceiptItems = state =>
	getAddedIds(state).map(id => ({
		...getItem(state, id),
		quantity: getQuantity(state, id)
	}))