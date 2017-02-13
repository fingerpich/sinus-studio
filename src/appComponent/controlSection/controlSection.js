import { h } from 'preact';
import ThreeDimensionController from './threeDimensionControllers/threeDimensionController.js';
import {setUrlByState} from '../../persistState.js';
import './controlSection.less';

/**
 * present control section
 */
const ControlsSection = () => (
	<div class="controlSection">
		<ThreeDimensionController/>

		<button style="" onClick={ (e) => {
			setUrlByState();
		}} class="shareButton">Update link to share</button>
	</div>
);

export default ControlsSection;
