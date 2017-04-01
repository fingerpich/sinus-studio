import {h, render} from 'preact';
import getStore from './initRedux.js';
import {Provider} from 'preact-redux';

import AppComponent from './appComponent/appComponent.js';
import './index.less';

/**
 * render all thing into a body element
 */
render((
	<div class="outer">
		<Provider store={getStore()}>
			<AppComponent/>
		</Provider>
	</div>
), document.body);
