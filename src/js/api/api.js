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

export function getWeatherByCoord(lat, lon){

	const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=' + AppOptions.owmKey  ;
	
	return fetch(url)
	.then( (response) => response.json() );
}


export function getWeatherByCityName(cityName){

	const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + AppOptions.owmKey  ;
	
	return fetch(url)
	.then( (response) => response.json() );
}