import {h} from 'preact';
import Rotor2D from './rotors2D/rotors2D.js';
import Stepper from './rotors2D/rotor/stepper/stepper.js';
import './controlSection.less';

/**
 * present control section
 */
const ControlsSectionElement = ({options, onOptionChange, shareButtonClicked, onSwitchPlayDrawing, onResetDrawing, onProgressedStepsChange}) => (
	<div class="controlSection">
		<div class="controlChanges">
			<Rotor2D label="xy"/>
			<Rotor2D label="yz"/>
			<Rotor2D label="xz"/>
		</div>
		<div>
			<div className={'drawingControl '+(options.showMoreControl?'':'hide')}>
				<div>
					<div>steps</div>
					<Stepper name="steps" value={options.steps} onChange={onOptionChange}/>
				</div>
				<div class="lengthSetter">
					<div>length</div>
					<Stepper name="progressedSteps" value={options.progressedSteps} onChange={(name,value)=>onProgressedStepsChange(name,value,options.steps)}/>
				</div>
				<div class="controlLength">
					<button class="resetBtn" onClick={()=>onResetDrawing(options.steps)}>
						#
					</button>
					<button class="playBtn" onClick={()=>onSwitchPlayDrawing(options.isPlayDrawing)}>
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
	</div>
);

export default ControlsSectionElement;
