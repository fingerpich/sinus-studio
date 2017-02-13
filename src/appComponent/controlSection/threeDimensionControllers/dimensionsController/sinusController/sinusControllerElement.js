import { h } from 'preact';

/**
 * Sinus Controller Element
 * @return {object} presentation element
 */
const SinusControllerElement = ({onChange, onRemove, width , step , start }) => (
	<div class="dimensionInputs">
		<input type="number" name="width" onInput={onChange} value={width} />
		<input type="number" name="step" onInput={onChange} value={step} />
		<input type="number" name="start" onInput={onChange} value={start} />
		<button onClick={onRemove}>-</button>
	</div>
);

export default SinusControllerElement;
