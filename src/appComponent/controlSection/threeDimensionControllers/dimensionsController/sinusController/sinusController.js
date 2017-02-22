import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import SinusControllerElement from './sinusControllerElement.js';

/**
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 */
const mapStateToProps = (state, ownProps) => {
	return {...state.dimension};
};

/**
 * @param {object} dispatch to run a reducer
 * @param {object} ownProps associated property in parent component
 */
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onChange: (e) => {
			let {name,value}=e.target;
			ownProps.onChange({name,value});
		},
		onRemove: () => {
			ownProps.onRemove();
		},
		onSwitchPlay: () => {
			ownProps.onChange({name:'isPlaying',value:!ownProps.isPlaying});
			if(!ownProps.isPlaying){
				ownProps.start+=1;
				ownProps.onChange({name:"start",value:ownProps.start});
				if(this.playInterval)clearInterval(this.playInterval);
				this.playInterval=setInterval(function(){

				},10);
			}
			else{
				if(this.playInterval)clearInterval(this.playInterval);
			}
		}
	}
};

/**
 * connect SinusControllerElement to redux store with above methods
 * @type {object}
 */
const SinusController = connect(
	mapStateToProps,
	mapDispatchToProps
)(SinusControllerElement);


export default SinusController
