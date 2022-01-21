import axios from 'axios';
import { GET_STORE_DATA } from '../types/types';

export const GetStoreData = () => {
	return dispatch => {
		axios.get(`https://fakestoreapi.com/products`)
			.then(res => 
				dispatch({
					type: GET_STORE_DATA,
					storeData: res.data
				})
			)
	}
}
