import { GET_STORE_DATA } from '../types/types';

const initialState = {
	storeData: []
}

export default (state = initialState, action) => {
	switch(action.type){
		case GET_STORE_DATA: 
			return {
				...state,
				storeData: action.storeData
			}
		default:
			return state
	}
}
