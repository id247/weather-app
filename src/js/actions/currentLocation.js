export const CURRENT_LOCATION_SET_PLACE_INFO = 'CURRENT_LOCATION_SET_PLACE_INFO';

export function setPlaceInfo(palceInfo) {
	return {
		type: CURRENT_LOCATION_SET_PLACE_INFO,
		payload: palceInfo,
	}
}

