import { h } from 'preact';

/**
 * present list of products
 * @param {number} width sinus width
 * @param {number} step steps in x
 * @param {number} start start sinus at
 * @param {string} dimension use this sinus as which dimension
 * @param {function} onChange event callback
 * @return {object} presentation element
 */
const DimensionControllerElement = ({onChange, width=5, step=1, start=0, dimension='x'}) => (
	<div class="dimensionInputs">
		<input name="width" onInput={onChange} value={width} />
		<input name="step" onInput={onChange} value={step} />
		<input name="start" onInput={onChange} value={start} />
		<input name="dimension" onInput={onChange} value={dimension} />
	</div>
);

export default DimensionControllerElement;
