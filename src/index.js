import {h, render} from 'preact';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'preact-redux';

import appReducers from './appReducers.js';


import AppComponent from './appComponent/appComponent.js';
import './style';

import {loadState, saveState} from './persistState';
const initState = loadState();//get the state from local storage or url
let store = createStore(
	appReducers,
	initState
);
store.subscribe(function () {
	saveState(store.getState());//save changes to local storage
});

/**
 * get state
 */
window.getStoreState = () => {
	return store.getState();
};

/**
 * render all thing into a body element
 */
render((
	<div class="outer">
		<Provider store={store}>
			<AppComponent/>
		</Provider>
	</div>
), document.body);
