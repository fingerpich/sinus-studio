import { h, render } from 'preact';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'preact-redux';

import appReducers from './appReducers.js';


import ThreeDimensionController from './appComponent/threeDimensionControllers/threeDimensionController.js';
import './style';

let store = createStore(
	appReducers,
	{}
);

render((
	<div id="outer">
		<Provider store={store}>
			<ThreeDimensionController/>
		</Provider>
	</div>
), document.body);
