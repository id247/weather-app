import { combineReducers } from 'redux';
import * as immutations from '../helpers/immutations';

import * as actions from '../actions/cities';

export function list(state = [], action) {
	switch (action.type) {
		case actions.CITIES_ADD_ITEM:
			return immutations.addToArray(state, action.payload);
		case actions.CITIES_DELETE_ITEM:
			return immutations.deletFromArray(state, action.payload);
		default:
			return state;
	}
}

const cities = combineReducers({
	list,
});

export default cities;
