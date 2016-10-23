import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

import { getFromLocalStorage }	from '../helpers/localStorage';

import rootReducer from '../reducers/index';

const persistedState = {
	cities: getFromLocalStorage('cities')
}

console.log(persistedState);

const configureStore = () => {

	const store = createStore(	rootReducer, 
								persistedState,
								applyMiddleware(
									thunkMiddleware,
									loggerMiddleware({collapsed: true}),
								),

							);
	return store;
}

export default configureStore;
