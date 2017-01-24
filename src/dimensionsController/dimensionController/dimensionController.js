import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import DimensionControllerElement from './dimensionControllerElement.js';

/**
 * present list of products
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 * e.g:ownProps could be used for edit
 */
const mapStateToProps = (state, ownProps) => {
	return {...state.dimension};
};

/**
 * present list of products
 * @param {object} dispatch to run a reducer
 * @param {object} ownProps associated property in parent component
 */
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onChange: (e) => {
			let {name,value}=e.target;
			dispatch(changeProperty(name,value));
		}
	}
};

const DimensionController = connect(
	mapStateToProps,
	mapDispatchToProps
)(DimensionControllerElement);


export default DimensionController
