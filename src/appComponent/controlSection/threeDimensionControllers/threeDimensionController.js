import { h } from 'preact';
import DimensionsController from './dimensionsController/dimensionsController.js'
import './controlsStyle.less';

/**
 * present all dimension controllers
 * @return {object} presentation element
 */
const ThreeDimensionController = ({}) => (
	<div class="controlChanges">
		<DimensionsController label="x"/>
		<DimensionsController label="y"/>
		<DimensionsController label="z"/>
	</div>
);

export default ThreeDimensionController;
