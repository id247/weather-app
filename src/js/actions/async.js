import { AppOptions } from 'appSettings';

import * as loadingActions 			from '../actions/loading';
import * as errorActions 			from '../actions/error';
import * as currentLocationActions 	from '../actions/currentLocation';
import * as citiesActions			from '../actions/cities';

import { getCurrentPosition, getWeatherByCoord, getWeatherByCityName } 	from '../api/api'


//cities

export function addCity(cityName) {

	return ( dispatch, getState ) => {

		const citiesList = getState().cities.list;

		if (citiesList.filter( city => city.labelCityName === cityName ).length > 0){
			return;
		}

		dispatch(loadingActions.loadingShow());	

		return getWeatherByCityName(cityName)
		.then( (placeInfo) => {	

			if (!placeInfo.id){
				dispatch(errorActions.setError('Can not find the city'));
				return;
			}

			const city = {
				...placeInfo,
				...{
					labelCityName: cityName //adding user input name
				}
			};

			dispatch(citiesActions.addCity(city));

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

// inits

export function getInitialData() {

	return dispatch => {
		dispatch(loadingActions.loadingShow());	

		return getCurrentPosition()
		.then( (position) => {	
			return getWeatherByCoord(position.coords.latitude, position.coords.longitude);
		})
		.then( (placeInfo) => {
			console.log(placeInfo);

			dispatch(currentLocationActions.setPlaceInfo(placeInfo));
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

