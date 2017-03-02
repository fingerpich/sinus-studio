import { h } from 'preact';
import ThreeDimensionController from './threeDimensionControllers/threeDimensionController.js';
import {setUrlByState} from '../../persistState.js';
import './controlSection.less';

/**
 * present control section
 */
const ControlsSectionElement = ({options,onOptionChange}) => (
	<div class="controlSection">
		<div>
			<input checked={options.showAxes} type="checkbox" onChange={(e)=>{
				onOptionChange("showAxes", e.target.checked)}
			}/>
			<input checked={options.hasHSL} type="checkbox" onChange={(e)=>{
				onOptionChange("hasHSL", e.target.checked)}}/>
		</div>

		<ThreeDimensionController/>

		<button style="" onClick={ (e) => {
			setUrlByState();
		}} class="shareButton">Update link to share</button>
	</div>
);

export default ControlsSectionElement;
