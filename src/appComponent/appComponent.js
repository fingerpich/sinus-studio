/**
 * Created by mojtaba on 1/27/2017.
 */
import { h } from 'preact';

import ControlsSection from './controlSection/controlSection.js';
import SceneContainer from './sceneContainer/sceneContainer.js';
/**
 * show all element
 * @return {object} presentation element
 */
const AppComponent = () => (
	<div>
		<SceneContainer/>
		<ControlsSection/>
	</div>
);

export default AppComponent;
