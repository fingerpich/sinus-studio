/**
 * Created by mojtaba on 1/27/2017.
 */
import {h, render, Component} from 'preact';
import Scene from './scene/scene.jsx';
import ShareLink from './shareLink/shareLink.jsx';
import './sceneContainer.less';
import {getUrlByState, setUrlByState} from '../../persistState.js';

/**
 * scene container
 * @return {object} presentation element
 */
class SceneContainer extends Component {
	render() {
		return (
			<div class="sceneContainer">
				<ShareLink class="share" getLink={getUrlByState} goClick={setUrlByState} getImageData={() => {
					return this.scene.captureImage();
				}}/>
				<Scene ref={instance => { this.scene = instance; }}/>
			</div>
		);
	}
}

export default SceneContainer;
