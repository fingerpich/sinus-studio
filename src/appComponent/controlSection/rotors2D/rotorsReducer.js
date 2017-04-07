/**
 * reducer changes store by action
 */
export default (rotorsState = {xy: [], yz: [], xz: []}, action) => {
	switch (action.type) {
		case 'ADD_DIMENSION':
			return addRotor(rotorsState, action);
		case 'REMOVE_DIMENSION':
			return removeRotor(rotorsState, action);
		case 'EDIT_DIMENSION':
			return editRotor(rotorsState, action);
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
