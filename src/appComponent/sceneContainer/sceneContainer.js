/**
 * Created by mojtaba on 1/27/2017.
 */
import { h } from 'preact';

import Scene from './scene/scene.js';

const SceneContainer = () => (
	/**
	 * scene container
	 * @return {object} presentation element
	 */
	<div>
		<Scene {...{zoom:1, rotateX:0, rotateY:0}} />
	</div>
);

export default SceneContainer;
