import { combineReducers } from 'redux';
import * as immutations from '../helpers/immutations';

import * as actions from '../actions/cities';

export function list(state = [], action) {
	switch (action.type) {
		case actions.CITIES_REPLACE_ITEMS:
			return action.payload;
		
		case actions.CITIES_ADD_ITEMS:
			return immutations.addArrayToArray(state, action.payload);
		
		case actions.CITIES_ADD_ITEM:
			return immutations.addToArray(state, action.payload);
		
		case actions.CITIES_DELETE_ITEM:
			const index = state.findIndex( elem => elem.id === action.payload );

			if (index === -1){
				return state;
			}

			return [
				...state.slice(0, index),
				...state.slice(index + 1)
			];
		
		default:
			return state;
	}
}

const cities = combineReducers({
	list,
});

export default cities;
