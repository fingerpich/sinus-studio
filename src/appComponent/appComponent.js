/**
 * Created by mojtaba on 1/27/2017.
 */
import { h } from 'preact';
import ThreeDimensionController from './threeDimensionControllers/threeDimensionController.js';

const AppComponent = ({onAddDimension, onChange, list}) => (
	/**
	 * show all element
	 * @return {object} presentation element
	 */
	<div>
		<ThreeDimensionController/>
	</div>
);

export default AppComponent;
