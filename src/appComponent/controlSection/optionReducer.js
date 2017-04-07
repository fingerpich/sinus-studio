/**
 * Created by mojtaba on 3/2/2017.
 */
/**
 * reducer changes store by action
 */
export default (optionState = {showAxes: false, hasHSL: false,showMoreControl:false,precent:100,steps:360}, action) => {
	switch (action.type) {
		case 'CHANGE_OPTIONS':
			return changeOption(optionState, action);
		default:
			return optionState;
	}
}
/**
 * @param {object} optionState current state
 * @param {object} action contain type and data
 * @return {object} new state for options
 */
function changeOption(optionState, action) {
	const newOptionState = {...optionState};
	newOptionState[action.data.name] = action.data.value;
	return newOptionState;
}
