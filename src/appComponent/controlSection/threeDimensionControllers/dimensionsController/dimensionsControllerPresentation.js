import { h } from 'preact';
import SinusController from './sinusController/sinusController.js'

/**
 * present all dimension controllers
 * @return {object} presentation element
 */
const DimensionControllerElement = ({onAddDimension, onChange, onRemove, list, label}) => (
	<div>
		<b>{label} Dimension</b>
		<button onClick={ onAddDimension }>+</button>
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
