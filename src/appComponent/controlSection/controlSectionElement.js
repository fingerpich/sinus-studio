import {h} from 'preact';
import RotorsContainer from './rotorsContainer/rotorsContainer.js';
import './controlSection.less';

/**
 * present control section
 */
const ControlsSectionElement = ({options, onOptionChange, shareButtonClicked}) => (
	<div class="controlSection">
		<RotorsContainer/>
		<div>
			<input checked={options.showAxes} type="checkbox" onChange={(e)=> {
				onOptionChange("showAxes", e.target.checked)
			}
			}/>
			<input checked={options.hasHSL} type="checkbox" onChange={(e)=> {
				onOptionChange("hasHSL", e.target.checked)
			}}/>
		</div>
	</div>
);

export default ControlsSectionElement;
