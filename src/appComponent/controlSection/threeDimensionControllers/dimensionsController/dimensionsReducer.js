/**
 * reducer changes store by action
 */
export default (dimensionState = {x:[], y:[], z:[]}, action) => {
	switch (action.type) {
		case 'ADD_DIMENSION':return addDimension(dimensionState,action);
		case 'REMOVE_DIMENSION':return removeDimension(dimensionState,action);
		case 'EDIT_DIMENSION':return editDimension(dimensionState,action);
		case 'FETCH_DIMENSIONS':return fetchDimension(dimensionState,action);
		default: return dimensionState;
	}
}


/**
 * @param {object} dimensionState current state
 * @param {object} action contain type and data
 * @return {object} new state for dimension
 */
function fetchDimension(dimensionState, action){
	return {...action.dimensions};
}


/**
 * @param {object} dimensionState current state
 * @param {object} action contain type and data
 * @return {object} new state for dimension
 */
function addDimension(dimensionState, action){
	const newdimensionState = {...dimensionState};
	newdimensionState[action.data.dimension].push({
		width: 1,
		step: 1,
		start: 90,
		isPLaying: false,
	});

	return newdimensionState;
}


/**
 * @param {object} dimensionState current state
 * @param {object} action contain type and data
 * @return {object} new state for dimension
 */
function editDimension(dimensionState, action){
	const newdimensionState={...dimensionState};//clone dimension
	newdimensionState[action.data.dimension][action.data.index][action.data.name]=action.data.value;
	return newdimensionState;
}


/**
 * @param {object} dimensionState current state
 * @param {object} action contain type and data
 * @return {object} new state for dimension
 */
function removeDimension(dimensionState, action){
	const newdimensionState={...dimensionState};//clone dimension
	newdimensionState[action.data.dimension].splice(action.data.index, 1);//remove matched product

	return newdimensionState;
}
