import {h, render} from 'preact';
import getStore from './initRedux.js';
import {Provider} from 'preact-redux';

import AppComponent from './appComponent/appComponent.js';
import './index.less';
import ReactGA from 'react-ga'
import {getUrlByState} from 'persistState.js'

ReactGA.initialize('UA-000000-01', {
	debug: true,
	titleCase: false,
	gaOptions: {
		userId: 123
	}
});
setTimeout(()=>{
	ReactGA.pageview(getUrlByState());
},100);


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
