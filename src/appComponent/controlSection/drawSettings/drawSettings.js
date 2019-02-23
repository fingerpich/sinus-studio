import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import drawSettingElement from './drawSettingElement.jsx';

/**
 * get options from global state
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 */
const mapStateToProps = (state, ownProps) => {
	return {
		options: state.options
	};
};

/**
 * set callbacks to element
 * @param {object} dispatch to run a reducer
 * @param {object} ownProps associated property in parent component
 */
export const CHANGE_OPTIONS = 'CHANGE_OPTIONS';
const mapDispatchToProps = (dispatch, ownProps ) => {
	return {
		onOptionChange: (name, value) => {
			dispatch({type: CHANGE_OPTIONS, data: {name, value}});
		},
		onProgressedStepsChange: (value, steps) => {
			if (value > steps) { value = 0;}
			else if (value < 0) { value = steps; }
			dispatch({type: CHANGE_OPTIONS, data: {name: 'progressedSteps', value}});
		},
		onSwitchPlayDrawing: (isPlaying) => {
			dispatch({type: CHANGE_OPTIONS, data: {name: 'isPlayDrawing', value: isPlaying}});
		},
		onResetDrawing: (steps) => {
			dispatch({type: CHANGE_OPTIONS, data: {name: 'progressedSteps', value: steps}});
		}
	};
};

/**
 * connect DimensionControllerElement to redux store with above methods
 * @type {object}
 */
const DrawSettings = connect(
	mapStateToProps,
	mapDispatchToProps
)(drawSettingElement);


export default DrawSettings;

