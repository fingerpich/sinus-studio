import { h } from 'preact';
import "./rotor.less";
/**
 * Rotor Element
 * @return {object} presentation element
 */
const RotorElement = ({onChange, onRemove, onSwitchPlay, width, step, start, isPlaying}) => (
	<div class="dimensionInputs">
		<button class="removeBtn" onClick={onRemove}>&times;</button>
		<input type="number" name="width" onInput={onChange} value={width} />
		<input type="number" name="step" onInput={onChange} value={step} />
		<input type="number" name="start" onInput={onChange} value={start} />
		<button className={'playBtn '+(isPlaying?'pause':'play')} onClick={onSwitchPlay}>
			<span class="left"></span><span class="right"></span>
        </button>
	</div>
);

export default RotorElement;
