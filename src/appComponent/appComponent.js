/**
 * Created by mojtaba on 1/27/2017.
 */
import { h } from 'preact';

import ThreeDimensionController from './threeDimensionControllers/threeDimensionController.js';
import SceneContainer from './sceneContainer/sceneContainer.js';
/**
 * show all element
 * @return {object} presentation element
 */
const AppComponent = () => (
	<div>
		<SceneContainer/>
		<ThreeDimensionController/>
	</div>
);

export default AppComponent;
