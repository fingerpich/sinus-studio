import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { removeDimension, changeProperty, addDimension} from './dimensionsActionCreator.js';
import DimensionControllerElement from './dimensionsControllerPresentation.js';

/**
 * present list of products
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 */
const mapStateToProps = (state, ownProps) => {
	return {
		list: state.dimensionsReducer[ownProps.label],
		label:ownProps.label
	}
};

/**
 * present list of products
 * @param {object} dispatch to run a reducer
 * @param {object} ownProps associated property in parent component
 */
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onRemove: ({index}) => {
			dispatch(removeDimension({index,label:ownProps.label}));
		},
		onChange: ({name,value,index}) => {
			dispatch(changeProperty({index,name,value,label:ownProps.label}));
		},
		onAddDimension: () => {
			dispatch(addDimension(ownProps.label));
		}
	}
};

/**
 * connect DimensionControllerElement to redux store with above methods
 * @type {object}
 */
const DimensionController = connect(
	mapStateToProps,
	mapDispatchToProps
)(DimensionControllerElement);


export default DimensionController
