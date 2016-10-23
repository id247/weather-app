import { AppOptions } from 'appSettings';

export function getCurrentPosition(){

	return new Promise( (resolve, reject) => {
	
		var options = {
			enableHighAccuracy: true,
			timeout: 10000,
			maximumAge: 0
		};

		function success(position){
			resolve(position);
		}

		function error(err) {
			reject(err);
		}

		navigator.geolocation.getCurrentPosition(success, error, options);
	
	});

}

function checkIfError(json){

	if (json.cod && json.cod !== 200){
		const message = json.message 
			? json.cod + ' ' + json.message 
			: json.cod + ' Unknown error';
		throw new Error(message);
	}
	return json;
}

const apiUrl = 'http://api.openweathermap.org/data/2.5/';

export function getWeatherByCoord(lat, lon){

	const url = apiUrl + 'weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=' + AppOptions.owmKey  ;
	
	return fetch(url, {
	})
	.then( (response) => response.json() )
	.then( checkIfError )
	;
}


export function getWeatherByCityName(cityName){

	const url = apiUrl + 'weather?q=' + cityName + '&units=metric&appid=' + AppOptions.owmKey  ;
	
	return fetch(url, {
	})
	.then( (response) => response.json() )
	.then( checkIfError )
	;
}

export function getWeatherByCityIds(cityIds){

	if (cityIds.length === 0){
		throw new Error('ids array id empty');
	}

	const url = apiUrl + 'group?id=' + cityIds.join(',') + '&units=metric&appid=' + AppOptions.owmKey  ;
	
	return fetch(url, {
	})
	.then( (response) => response.json() )
	.then( checkIfError )
	;
}