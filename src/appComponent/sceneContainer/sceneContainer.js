/**
 * Created by mojtaba on 1/27/2017.
 */
import {h} from 'preact';

import Scene from './scene/scene.js';
import ShareLink from './shareLink/shareLink.js';
import './sceneContainer.less';
import {getUrlByState, setUrlByState} from '../../persistState.js';
/**
 * scene container
 * @return {object} presentation element
 */
const SceneContainer = () => (
	<div class="sceneContainer">
		<ShareLink class="share" getLink={getUrlByState} goClick={setUrlByState}/>
		<Scene/>
	</div>
);

export default SceneContainer;
