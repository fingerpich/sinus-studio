import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import getStore from '../../initRedux.js';
import ControlsSectionElement from './controlSectionElement'

/**
 * get options from global state
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 */
let timeoutVar;
const store = getStore();
const mapStateToProps = (state, ownProps) => {
	if (state.options.isPlayDrawing && !timeoutVar) {
		timeoutVar=setTimeout(()=> {
			timeoutVar=0;
			let state = store.getState();
			let value=parseInt(state.options.progressedSteps || 0);
			value=value>state.options.steps?0:value+1;
			store.dispatch({type: 'CHANGE_OPTIONS', data: {name:'progressedSteps', value}});
		}, 10);
	}
	return {
		options: state.options,
	}
};

/**
 * set callbacks to element
 * @param {object} dispatch to run a reducer
 * @param {object} ownProps associated property in parent component
 */
const mapDispatchToProps = (dispatch, ownProps ) => {
	return {
		onOptionChange: (name, value) => {
			dispatch({type: 'CHANGE_OPTIONS', data: {name, value}});
		},
		onProgressedStepsChange: (name,value,steps) => {
			if(value>steps)value=0;
			if(value<0)value=steps;
			dispatch({type: 'CHANGE_OPTIONS', data: {name, value}});
		},
		onSwitchPlayDrawing: (isPlaying) => {
			dispatch({type: 'CHANGE_OPTIONS', data: {name:'isPlayDrawing', value:!isPlaying}});
		},
		onResetDrawing: (steps) => {
			dispatch({type: 'CHANGE_OPTIONS', data: {name:'progressedSteps', value:steps}});
		}
	}
};

/**
 * connect DimensionControllerElement to redux store with above methods
 * @type {object}
 */
const ControlsSectionContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlsSectionElement);


export default ControlsSectionContainer

