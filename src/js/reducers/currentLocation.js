import * as actions from '../actions/currentLocation';

export function currentLocation(state = false, action) {
	switch (action.type) {
		case actions.CURRENT_LOCATION_SET_WEATHER:
			return action.payload;
		default:
			return state
	}
}


