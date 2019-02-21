import {h} from 'preact';

import ControlsSectionContainer from './controlSection/controlSection.js';
import SceneContainer from './sceneContainer/sceneContainer.jsx';
/**
 * show all element
 * @return {object} presentation element
 */
const AppComponent = () => (
	<div class="appComponent">
		<div class="header">
			<a class="github-link" href="https://github.com/fingerpich/spiro3d">
				<img
					style="position: absolute; top: 0; left: 0; border: 0;"
					src="https://camo.githubusercontent.com/c6286ade715e9bea433b4705870de482a654f78a/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f77686974655f6666666666662e706e67"
					alt="Fork me on GitHub"
					data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_white_ffffff.png"/>
			</a>
		</div>
		<div class="main">
			<SceneContainer/>
			<ControlsSectionContainer/>
		</div>
	</div>
);

export default AppComponent;
