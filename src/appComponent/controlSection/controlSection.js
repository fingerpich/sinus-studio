import { h } from 'preact';
import ThreeDimensionController from './threeDimensionControllers/threeDimensionController.js';
import {setUrlByState} from '../../persistState.js';
import './controlSection.less';

const ControlsSection = () => (
	/**
	 * present control section
	 */
	<div class="controlSection">
		<ThreeDimensionController/>

		<button style="" onClick={ (e) => {
			setUrlByState();
		}} class="shareButton">Update link to share</button>
	</div>
);

export default ControlsSection;
