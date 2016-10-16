export const CURRENT_LOCATION_SET_WEATHER = 'CURRENT_LOCATION_SET_WEATHER';

export function setWeather(weather) {
	return {
		type: CURRENT_LOCATION_SET_WEATHER,
		payload: weather,
	}
}

