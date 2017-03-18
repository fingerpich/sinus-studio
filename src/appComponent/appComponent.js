/**
 * Created by mojtaba on 1/27/2017.
 */
import {h} from 'preact';

import ControlsSectionContainer from './controlSection/controlSection.js';
import SceneContainer from './sceneContainer/sceneContainer.js';
/**
 * show all element
 * @return {object} presentation element
 */
const AppComponent = () => (
	<div class="appComponent">
		<SceneContainer/>
		<ControlsSectionContainer/>
	</div>
);

export default AppComponent;
