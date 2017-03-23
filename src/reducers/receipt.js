import {
	ADD_TO_RECEIPT,
	CHECKOUT_REQUEST
} from '../constants/ActionTypes'

const initialState = {
	addedIds: [],
	quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
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

const quantityById = (state = initialState.quantityById, action) => {
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
	state.quantityById[itemId] || 0

export const getAddedIds = state => state.addedIds

const receipt = (state = initialState, action) => {
	switch(action.type){
		case CHECKOUT_REQUEST:
			return initialState
		default:
			return {
				addedIds: addedIds(state.addedIds, action),
				quantityById: quantityById(state.quantityById, action)
			}
	}
}

export default receipt