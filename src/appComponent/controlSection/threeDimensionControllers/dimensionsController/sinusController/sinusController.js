import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import SinusControllerElement from './sinusControllerElement.js';

/**
 * @param {object} state global state which contains all state we created
 * @param {object} ownProps associated property in parent component
 */
const mapStateToProps = (state, ownProps) => {
	if(ownProps.isPlaying){
		setTimeout(()=>{
			ownProps.onChange({name:"start",value:parseInt(ownProps.start)+1});
		},10);
	}
	return {...state.dimension};
};

/**
 * @param {object} dispatch to run a reducer
 * @param {object} ownProps associated property in parent component
 */
// const thisComponent={};
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
			// if(!ownProps.isPlaying){
			// 	ownProps.onChange({name:"start",value:parseInt(ownProps.start)+1});
			// 	if(thisComponent.playingInterval)clearInterval(thisComponent.playingInterval);
            //
			// 	thisComponent.playingInterval=setInterval(function(){
			// 		ownProps.onChange({name:"start",value:parseInt(ownProps.start)+1});
			// 	},10);
			// }
			// else{
			// 	if(thisComponent.playingInterval)clearInterval(thisComponent.playingInterval);
			// }
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
