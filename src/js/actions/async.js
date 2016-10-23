import { AppOptions } from 'appSettings';

import * as loadingActions 			from '../actions/loading';
import * as errorActions 			from '../actions/error';
import * as currentLocationActions 	from '../actions/currentLocation';
import * as citiesActions			from '../actions/cities';

import { getFromLocalStorage }	from '../helpers/localStorage';

import * as api	from '../api/api'


export function catchError(err){

	return dispatch => {
		console.error(err);
		dispatch(errorActions.setError(err.message));

		setTimeout( ()=> {
			dispatch(errorActions.setError(''));
		}, 3000);	
	}
}

//cities

export function addCity(cityName) {

	return ( dispatch, getState ) => {

		const citiesList = getState().cities.list;

		if (citiesList.filter( city => city.labelCityName === cityName ).length > 0){
			return;
		}

		dispatch(loadingActions.loadingShow());	

		return api.getWeatherByCityName(cityName)
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
			dispatch(catchError(err));
		})
		.then( (position) => {	
			dispatch(loadingActions.loadingHide());
		})
		;
	}
}

export function getCitiesByIds(citiesIds){
	
	return dispatch => {
		dispatch(loadingActions.loadingShow());	


		return api.getWeatherByCityIds(citiesIds)
		.then( placeInfos => {
			console.log(placeInfos);
		})
		;
	}
}


export function getCurrentPosition() {
	return dispatch => {

		return api.getCurrentPosition()
		.then( (position) => {	
			return api.getWeatherByCoord(position.coords.latitude, position.coords.longitude);
		})
		.then( (placeInfo) => {
			console.log(placeInfo);
			
			const city = {
				...placeInfo,
				...{
					labelCityName: 'Your current location'
				}
			};
			dispatch(currentLocationActions.setPlaceInfo(city));	
		})
		;

	}
}

export function getSavedCities() {
	return (dispatch, getState) => {

		const savedCities = getState().cities;

		console.log(savedCities);
		
		if (!savedCities || !savedCities.list || savedCities.list.length === 0){				
			return Promise.resolve();
		}

		const citiesIds = savedCities.list.map( city => city.id );

		return api.getWeatherByCityIds(citiesIds)
		.then( (placeInfos) => {
			console.log(placeInfos.list);

			const cities = savedCities.list.map( city => {
				return {
					...city,
					...placeInfos.list.filter( item => item.id === city.id ),
				}
			});

			console.log(cities);

			dispatch(citiesActions.replaceCities(cities));	
		})
		;
	}
}

// inits

export function getInitialData() {

	return dispatch => {
		dispatch(loadingActions.loadingShow());	

		return Promise.all([
			dispatch(getCurrentPosition()),
			dispatch(getSavedCities()),
		])
		.catch( err => {
			dispatch(catchError(err));
		})
		.then( () => {	
			dispatch(loadingActions.loadingHide());
		})
		;
	}
}


export function init() {
	return dispatch => {
		return dispatch(getInitialData());	
	}
}

