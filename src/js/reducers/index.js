import { combineReducers } from 'redux';

import error  			from './error';
import loading  		from './loading';
import currentLocation 	from './currentLocation';
import cities 			from './cities';

const rootReducer = combineReducers({
	error,
	loading,
	currentLocation,
	cities,
});

export default rootReducer;
