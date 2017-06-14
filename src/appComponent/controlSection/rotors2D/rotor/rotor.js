import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import RotorElement from './rotorElement.js';

/**
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 */
const mapStateToProps = (state, ownProps) => {
	if (ownProps.isPlaying) {
		setTimeout(()=> {
			ownProps.onChange({name: "start", value: parseInt(ownProps.start, 10) + 1});
		}, 33);
	}
	return {...state.dimension};
};

/**
 * @param {object} dispatch to run a reducer
 * @param {object} ownProps associated property in parent component
 */
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onChange: (name, value) => {
			ownProps.onChange({name, value});
		},
		onRemove: () => {
			ownProps.onRemove();
		},
		onSwitchPlay: () => {
			ownProps.onChange({name: 'isPlaying', value: !ownProps.isPlaying});
		}
	};
};

/**
 * connect RotorElement to redux store with above methods
 * @type {object}
 */
const Rotor = connect(
	mapStateToProps,
	mapDispatchToProps
)(RotorElement);


export default Rotor;
