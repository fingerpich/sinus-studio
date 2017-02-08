import { h, render } from 'preact';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'preact-redux';

import appReducers from './appReducers.js';


import AppComponent from './appComponent/appComponent.js';
import './style';

import {loadState, saveState} from './persistState';
const initState=loadState();
let store = createStore(
	appReducers,
	initState
);
store.subscribe(function(){
	saveState(store.getState());
});


render((
	<div id="outer">
		<Provider store={store}>
			<AppComponent/>
		</Provider>
	</div>
), document.body);
