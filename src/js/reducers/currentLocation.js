import * as actions from '../actions/currentLocation';

export default function currentLocation(state = {}, action) {
	switch (action.type) {
		case actions.CURRENT_LOCATION_SET_PLACE_INFO:
			return action.payload;
		
		default:
			return state;
	}
}


