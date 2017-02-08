import { h } from 'preact';
import DimensionsController from './dimensionsController/dimensionsController.js'
import './controlsStyle.less';

const ThreeDimensionController = ({onAddDimension, onChange, list}) => (
	/**
	 * present all dimension controllers
	 * @param {array} list dimensions list
	 * @param {function} onAddDimension on add new dimension
	 * @param {function} onChange event callback
	 * @return {object} presentation element
	 */
	<div class="controlChanges">
		<DimensionsController label="x"/>
		<DimensionsController label="y"/>
		<DimensionsController label="z"/>
	</div>
);

export default ThreeDimensionController;
