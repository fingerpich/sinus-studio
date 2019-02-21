/**
 * reducer changes store by action
 */
import {ADD_DIMENSION, REMOVE_DIMENSION, EDIT_DIMENSION} from './rotor2D-Actions.js';
export const Go_NEXT_FRAME_DX = 'Go_NEXT_FRAME_DX';

export default (rotorsState = {xy: [], yz: [], xz: []}, action) => {
	switch (action.type) {
		case ADD_DIMENSION:
			return addRotor(rotorsState, action);
		case REMOVE_DIMENSION:
			return removeRotor(rotorsState, action);
		case EDIT_DIMENSION:
			return editRotor(rotorsState, action);
		case Go_NEXT_FRAME_DX:
			return goNextFrameDimensions(rotorsState, action);
		default:
			return rotorsState;
	}
}


/**
 * @param {object} rotorsState current state
 * @param {object} action contain type and data
 * @return {object} new state for dimension
 */
function addRotor(rotorsState, action) {
	const newRotorsState = {...rotorsState};
	newRotorsState[action.data.dimension].push({
		width: 10,
		step: 1,
		start: 90,
		isPlaying: false,
	});

	return newRotorsState;
}


/**
 * @param {object} rotorsState current state
 * @param {object} action contain type and data
 * @return {object} new state for dimension
 */
function editRotor(rotorsState, action) {
	const newRotorsState = {...rotorsState};//clone dimension
	newRotorsState[action.data.dimension][action.data.index][action.data.name] = action.data.value;
	return newRotorsState;
}


/**
 * @param {object} rotorsState current state
 * @param {object} action contain type and data
 * @return {object} new state for dimension
 */
function removeRotor(rotorsState, action) {
	const newRotorsState = {...rotorsState};//clone dimension
	newRotorsState[action.data.dimension].splice(action.data.index, 1);//remove matched product

	return newRotorsState;
}


function goNextFrameDimensions(rotorsState, action) {
	const players = [];
	for (let dimension in rotorsState){
		if (rotorsState.hasOwnProperty(dimension)){
			const playingList = rotorsState[dimension].map((dim, i) => dim.isPlaying ? i : -1).filter(i => i > -1);
			if (playingList.length) {
				players.push({dimension, playingList});
			}
		}
	}
	if (players.length) {
		const newRotorsState = {...rotorsState};
		players.forEach(({dimension, playingList}) => {
			playingList.forEach((rotorIndex) => {
				newRotorsState[dimension][rotorIndex].start++;
			});
		});
		return newRotorsState;
	} else {
		return rotorsState;
	}
}
