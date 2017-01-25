import { h } from 'preact';

/**
 * @param {number} width sinus width
 * @param {number} step steps in x
 * @param {number} start start sinus at
 * @param {function} onChange event callback
 * @return {object} presentation element
 */
const SinusControllerElement = ({onChange, width=5, step=1, start=0}) => (
	<div class="dimensionInputs">
		<input name="width" onInput={onChange} value={width} />
		<input name="step" onInput={onChange} value={step} />
		<input name="start" onInput={onChange} value={start} />
	</div>
);

export default SinusControllerElement;