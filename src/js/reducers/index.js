import { combineReducers } from 'redux';

import { error } from './error';
import { loading } from './loading';
import { currentLocation } from './currentLocation';

const rootReducer = combineReducers({
	error,
	loading,
	currentLocation,
});

export default rootReducer;
