import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import ControlsSectionElement from './controlSectionElement'

/**
 * get options from global state
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 */
const mapStateToProps = (state, ownProps) => {
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

