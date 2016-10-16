export const CITIES_ADD_ITEM = 'CITIES_ADD_ITEM';

export function addCity(city) {
	return {
		type: CITIES_ADD_ITEM,
		payload: city,
	}
}
export const CITIES_DELETE_ITEM = 'CITIES_DELETE_ITEM';

export function deleteCity(index) {
	return {
		type: CITIES_DELETE_ITEM,
		payload: index,
	}
}
