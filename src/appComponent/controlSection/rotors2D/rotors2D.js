import {h, Component} from 'preact';
import {connect} from 'preact-redux';

import {removeDimension, changeProperty, addDimension} from './rotor2D_AC.js';
import Rotor2dControllerElement from './rotors2DElement.js';

/**
 * present list of products
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 */
const mapStateToProps = (state, ownProps) => {
	return {
		rotor2DData: state.rotorsData[ownProps.label],
		rotorLabel: ownProps.label.toUpperCase()
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
			dispatch(removeDimension({index, label: ownProps.label}));
		},
		onChange: ({name, value, index}) => {
			dispatch(changeProperty({index, name, value, label: ownProps.label}));
		},
		onAddDimension: () => {
			dispatch(addDimension(ownProps.label));
		}
	};
};

/**
 * connect DimensionControllerElement to redux store with above methods
 * @type {object}
 */
const Rotor2D = connect(
	mapStateToProps,
	mapDispatchToProps
)(Rotor2dControllerElement);


export default Rotor2D
