import { h, render } from 'preact';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'preact-redux';

import appReducers from './appReducers.js';


import AppComponent from './appComponent/appComponent.js';
import './style';

let store = createStore(
	appReducers,
	{}
);

render((
	<div id="outer">
		<Provider store={store}>
			<AppComponent/>
		</Provider>
	</div>
), document.body);
