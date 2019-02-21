/**
 * Created by mojtaba on 3/2/2017.
 */
/**
 * reducer changes store by action
 */
import {CHANGE_OPTIONS} from './drawSettings.js';
export const Go_NEXT_FRAME = 'Go_NEXT_FRAME';
export default (optionState = {showAxes: false, hasHSL: false, showMoreControl: false, progressedSteps: 360, steps: 360, isPlayDrawing:false}, action) => {
	switch (action.type) {
		case CHANGE_OPTIONS:
			return changeOption(optionState, action);
		case Go_NEXT_FRAME:
			return goNextFrame(optionState, action);
		default:
			return optionState;
	}
};
/**
 * @param {object} optionState current state
 * @param {object} action contain type and data
 * @return {object} new state for options
 */
function changeOption(optionState, action) {
	const newOptionState = {...optionState};
	newOptionState[action.data.name] = action.data.value;
	if (action.data.name === 'progressedSteps') {
		keepInRange(newOptionState);
	}
	return newOptionState;
}

function keepInRange(options) {
	let value = options.progressedSteps;
	if (value > options.steps) {
		options.progressedSteps = 0
	} else if (value < 0) {
		options.progressedSteps = options.steps;
	}
}

function goNextFrame(optionState, action) {
	if (optionState.isPlayDrawing) {
		const newOptionState = {...optionState};
		newOptionState.progressedSteps = newOptionState.progressedSteps + 1;
		keepInRange(newOptionState);
		return newOptionState;
	} else {
		return optionState;
	}
}
