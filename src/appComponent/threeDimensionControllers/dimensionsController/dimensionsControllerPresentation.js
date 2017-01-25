import { h } from 'preact';
import SinusController from './sinusController/sinusController.js'
const DimensionControllerElement = ({onAddDimension, onChange, list, label}) => (
	/**
	 * present all dimension controllers
	 * @param {array} list dimensions list
	 * @param {function} onAddDimension on add new dimension
	 * @param {function} onChange event callback
	 * @return {object} presentation element
	 */
	<div>
		<b>{label} Dimension</b>
		<button onClick={ onAddDimension }>+</button>
		<ul>
			{list.map((dimension ,index)=>
				<li key={index}>
					<SinusController
						{...dimension}
						onChange={(name,value) => onChange(index,name,value)}/>
				</li>
			)}
		</ul>
	</div>
);

export default DimensionControllerElement;
