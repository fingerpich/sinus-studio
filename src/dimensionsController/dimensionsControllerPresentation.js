import { h } from 'preact';
import DimensionController from './dimensionController/dimensionController.js'
const DimensionsControllerElement = ({onAddDimension, onChange, list}) => (
	/**
	 * present all dimension controllers
	 * @param {array} list dimensions list
	 * @param {function} onAddDimension on add new dimension
	 * @param {function} onChange event callback
	 * @return {object} presentation element
	 */
	<div>
		<button onClick={ onAddDimension }>Add New Dimension</button>
		<ul>
			{list.map((dimension ,index)=>
				<li key={index}>
					<DimensionController
						{...dimension}
						onChange={(name,value) => onChange(index,name,value)}/>
				</li>
			)}
		</ul>
	</div>
);

export default DimensionsControllerElement;
