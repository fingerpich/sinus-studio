/**
 * Created by mojtaba on 1/27/2017.
 */
import {h} from 'preact';

import Scene from './scene/scene.js';

/**
 * scene container
 * @return {object} presentation element
 */
const SceneContainer = () => (
	<div class="sceneContainer">
		<Scene {...{zoom: 1, rotateX: 0, rotateY: 0}} />
	</div>
);

export default SceneContainer;
