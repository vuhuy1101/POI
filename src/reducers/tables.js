import { 
	VIEW_CURRENT_TABLE 
} from '../constants/ActionTypes'

const tables = (state , action) => {
	switch(action.type){
		case VIEW_CURRENT_TABLE:
			const { currentTable } = action
			return {
				...state,
				[currentTable]: action.tableId
			}
		default:
			return state
	}
}

export const getTables = (state) => state.tables
export const getCurrentTable = (state) => state.currentTable

export default tables