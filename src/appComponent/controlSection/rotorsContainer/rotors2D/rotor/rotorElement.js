import {h} from 'preact';
import "./rotor.less";
import Stepper from './stepper/stepper.js';

/**
 * Rotor Element
 * @return {object} presentation element
 */
const RotorElement = ({onChange, onRemove, onSwitchPlay, width, step, start, isPlaying}) => (
	<div class="dimensionInputs">
		<button class="removeBtn" onClick={onRemove}>&times;</button>
		<Stepper name="width" value={width} onChange={onChange}/>
		<Stepper name="step" value={step} onChange={onChange}/>
		<Stepper name="start" value={start} onChange={onChange}/>
		<button className={'playBtn ' + (isPlaying ? 'pause' : 'play')} onClick={onSwitchPlay}>
			<span class="left"></span><span class="right"></span>
		</button>
	</div>
);

export default RotorElement;
