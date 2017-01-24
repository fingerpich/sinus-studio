import { h, render } from 'preact';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'preact-redux';

import appReducers from './appReducers';


import DimensionsController from './dimensionsController/dimensionsController.js';
import './style';

let store = createStore(
	appReducers,
	{}
);

render((
	<div id="outer">
		<Provider store={store}>
			<DimensionsController/>
		</Provider>
	</div>
), document.body);
