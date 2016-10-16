import { AppOptions } from 'appSettings';

import * as loadingActions 			from '../actions/loading';
import * as errorActions 			from '../actions/error';
import * as currentLocationActions 	from '../actions/currentLocation';

import { getCurrentPosition, getWeatherByCoord, getWeatherByCityName } 	from '../api/api'


//init

export function getInitialData() {

	return dispatch => {
		dispatch(loadingActions.loadingShow());	

		return getCurrentPosition()
		.then( (position) => {	

			console.log(position);

			return getWeatherByCoord(position.coords.latitude, position.coords.longitude);
		})
		.then( (weather) => {
			console.log(weather);

			dispatch(currentLocationActions.setWeather(weather));
			dispatch(loadingActions.loadingHide());

		})
		.catch( err => {			
			dispatch(loadingActions.loadingHide());
			console.error(err);
			dispatch(errorActions.setError(err.message));
		})
		;
	}
}


export function init() {
	return dispatch => {
		return dispatch(getInitialData());	
	}
}

