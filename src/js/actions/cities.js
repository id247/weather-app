export const CITIES_ADD_ITEMS = 'CITIES_ADD_ITEMS';

export function addCities(cityList) {
	return {
		type: CITIES_ADD_ITEMS,
		payload: cityList,
	}
}

export const CITIES_REPLACE_ITEMS = 'CITIES_REPLACE_ITEMS';

export function replaceCities(cityList) {
	return {
		type: CITIES_REPLACE_ITEMS,
		payload: cityList,
	}
}

export const CITIES_ADD_ITEM = 'CITIES_ADD_ITEM';

export function addCity(city) {
	return {
		type: CITIES_ADD_ITEM,
		payload: city,
	}
}

export const CITIES_DELETE_ITEM = 'CITIES_DELETE_ITEM';

export function deleteCity(cityId) {
	return {
		type: CITIES_DELETE_ITEM,
		payload: cityId,
	}
}
