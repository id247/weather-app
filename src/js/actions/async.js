import { AppOptions } from 'appSettings';

import * as loadingActions 		from '../actions/loading';
import * as errorActions 		from '../actions/error';


//init

export function getInitialData() {

	return dispatch => {
		dispatch(loadingActions.loadingShow());	

		return init()
		.then( (res) => {	

			console.log(res);

			dispatch(loadingActions.loadingHide());

		})
		.catch( err => {			
			dispatch(loadingActions.loadingHide());
			dispatch(errorActions.setError(err));
		})
		;
	}
}


export function init() {
	return dispatch => {
		return dispatch(getInitialData());	
	}
}

