'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import Root from './components/Root';

import { saveToLocalStorage }	from './helpers/localStorage';

const store = configureStore();

let currentValue;
store.subscribe(() => { //subscribe to save data to localstorage on update
	
	let previousValue = currentValue;
  	currentValue = store.getState();

  	if (previousValue && previousValue.cities !== currentValue.cities) {
		console.log('save');
		saveToLocalStorage('cities', store.getState().cities);
	}

});

const app = document.getElementById('app');

if (app){

	ReactDOM.render(
		<Root store={store} />,
		app
	);

}


