import {h, render} from 'preact';
import getStore from './initRedux.js';
import {Provider} from 'preact-redux';

import AppComponent from './appComponent/appComponent.jsx';
import './index.less';

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-98265042-3', 'auto');
ga('send', 'pageview');

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
