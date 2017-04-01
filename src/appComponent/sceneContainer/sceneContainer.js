/**
 * Created by mojtaba on 1/27/2017.
 */
import {h} from 'preact';

import Scene from './scene/scene.js';
import {setUrlByState} from '../../persistState.js';
/**
 * scene container
 * @return {object} presentation element
 */
const SceneContainer = () => (
	<div class="sceneContainer">
		<a onClick={ (e) => { setUrlByState() }} class="shareButton">Share Link</a>
		<Scene {...{zoom: 1, rotateX: 0, rotateY: 0}} />
	</div>
);

export default SceneContainer;
