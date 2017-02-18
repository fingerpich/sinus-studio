import { h } from 'preact';

/**
 * Sinus Controller Element
 * @return {object} presentation element
 */
const SinusControllerElement = ({onChange, onRemove, onSwitchPlay, width, step, start, isPlaying}) => (
	<div class="dimensionInputs">
		<button onClick={onRemove}>-</button>
		<input type="number" name="width" onInput={onChange} value={width} />
		<input type="number" name="step" onInput={onChange} value={step} />
		<input type="number" name="start" onInput={onChange} value={start} />
		<button onClick={onSwitchPlay}>
			{isPlaying?<b>||</b>:<b> ></b>}
        </button>
	</div>
);

export default SinusControllerElement;
