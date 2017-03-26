import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveItems = items => ({
	type: types.RECEIVE_ITEMS,
	items: items
})

export const getAllItems = () => dispatch => {
	shop.getItems(items => {
		dispatch(receiveItems(items))
	})
}

const viewCurrentTable = tableId => ({
	type: types.VIEW_CURRENT_TABLE,
	tableId
})

const addToReceiptUnsafe = itemId => ({
	type: types.ADD_TO_RECEIPT,
	itemId
})

export const updateCurrentTable = tableId => (dispatch, getState) => {
	dispatch(viewCurrentTable(tableId))
}

export const addToReceipt = itemId => (dispatch, getState) => {
	dispatch(addToReceiptUnsafe(itemId))
}

export const checkout = items => (dispatch, getState) => {
	const { receipt } = getState()

	dispatch({
		type: types.CHECKOUT_REQUEST
	})
	shop.buyItems(items, () => {
		dispatch({
			types: types.CHECKOUT_SUCCESS,
			receipt
		})
	})
}