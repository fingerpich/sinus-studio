import {h} from 'preact';
import Stepper from '../rotors2D/rotor/stepper/stepper.jsx';
import './drawSetting.less';

/**
 * present control section
 */
const DrawSettingElement = ({options, onOptionChange, shareButtonClicked, onSwitchPlayDrawing, onResetDrawing, onProgressedStepsChange}) => (
	<div class="drawSetting">
		<div className={'drawingControl '+(options.showMoreControl?'':'hide')}>
			<div>
				<div>steps</div>
				<Stepper name="steps" value={options.steps} onChange={(value) => onOptionChange('steps', value)}/>
			</div>
			<div class="lengthSetter">
				<div>length</div>
				<Stepper name="progressedSteps" value={options.progressedSteps} onChange={(value) => onProgressedStepsChange(value, options.steps)}/>
			</div>
			<div class="controlLength">
				<button class="resetBtn" onClick={() => onResetDrawing(options.steps)}>
					#
				</button>
				<button class="playBtn" onClick={() => onSwitchPlayDrawing(options.isPlayDrawing)}>
					<div className={'playpause ' + (options.isPlayDrawing ? 'pause' : 'play')}>
						<span class="left"></span><span class="right"></span>
					</div>
				</button>
			</div>
		</div>
		<input checked={options.showAxes} type="checkbox" onChange={(e) => {
			onOptionChange("showAxes", e.target.checked);
		}
		}/>
		<input checked={options.hasHSL} type="checkbox" onChange={(e) => {
			onOptionChange("hasHSL", e.target.checked);
		}}/>
		<input checked={options.showMoreControl} type="checkbox" onChange={(e) => {
			onOptionChange("showMoreControl", e.target.checked);
		}}/>
	</div>
);

export default DrawSettingElement;
