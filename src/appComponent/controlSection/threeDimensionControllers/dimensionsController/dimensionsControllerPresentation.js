import { h } from 'preact';
import SinusController from './sinusController/sinusController.js'

/**
 * present all dimension controllers
 * @return {object} presentation element
 */
const DimensionControllerElement = ({onAddDimension, onChange, onRemove, list, label}) => (
	<div class="dimensionController">
		<b>{label.toUpperCase()} Dimension</b>
		<button onClick={ onAddDimension }>+</button>
		{list.length?(
		<div class="inputLabels">
			<small>start</small>
			<small>frequency</small>
			<small>width</small>
		</div>):''}
		<ul>
			{list.map((dimension ,index)=>
				<li key={index}>
					<SinusController
						{...dimension}
						onChange={({name,value}) => onChange({name,value,index})}
						onRemove={() => onRemove({index})}
					/>
				</li>
			)}
		</ul>
	</div>
);

export default DimensionControllerElement;
