import { combineReducers } from 'redux';

import { error } from './error';
import { loading } from './loading';

const rootReducer = combineReducers({
	error,
	loading,
});

export default rootReducer;
