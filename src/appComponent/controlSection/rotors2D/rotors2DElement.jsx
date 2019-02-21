import {h} from 'preact';
import Rotor from './rotor/rotor.jsx';

/**
 * present all dimension controllers
 * @return {object} presentation element
 */
const Rotor2dControllerElement = ({onAddDimension, onChange, onRemove, rotor2DData, rotorLabel}) => (
	<div class="dimensionController">
		<b>{rotorLabel} Rotor</b>
		<button onClick={ onAddDimension }>+</button>
		{rotor2DData.length ? (
			<div class="inputLabels">
				<small>start</small>
				<small>frequency</small>
				<small>width</small>
			</div>) : ''}
		<ul>
			{rotor2DData.map((dimension, index) =>
				<li key={index}>
					<Rotor
						{...dimension}
						onChange={({name, value}) => onChange({name, value, index})}
						onRemove={() => onRemove({index})}
					/>
				</li>
			)}
		</ul>
	</div>
);

export default Rotor2dControllerElement;
