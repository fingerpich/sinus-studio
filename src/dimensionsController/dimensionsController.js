import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import { changeProperty, addDimension} from './dimensionsActionCreator.js';
import DimensionsControllerElement from './dimensionsControllerPresentation.js';

/**
 * present list of products
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 */
const mapStateToProps = (state, ownProps) => {
	return {
		list: state.dimensionsReducer
	}
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
			dispatch(changeProperty(index,name,value));
		},
		onAddDimension: () => {
			dispatch(addDimension());
		}
	}
};

const DimensionsController = connect(
	mapStateToProps,
	mapDispatchToProps
)(DimensionsControllerElement);


export default DimensionsController
