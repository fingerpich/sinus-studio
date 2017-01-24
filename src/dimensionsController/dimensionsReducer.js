
export default (dimensionsState = [], action) => {
	switch (action.type) {
		case 'ADD_DIMENSION':return addDimension(dimensionsState,action);
		case 'REMOVE_DIMENSION':return removeDimension(dimensionsState,action);
		case 'EDIT_DIMENSION':return editDimension(dimensionsState,action);
		case 'FETCH_DIMENSIONS':return fetchDimension(dimensionsState,action);
		default: return dimensionsState;
	}
}


/**
 * @param {object} dimensionsState current state
 * @param {object} action contain type and data
 * @return {object} new state for products
 */
function fetchDimension(dimensionsState, action){
	return [...action.dimensions];
}


/**
 * @param {object} dimensionsState current state
 * @param {object} action contain type and data
 * @return {object} new state for products
 */
function addDimension(dimensionsState, action){
	const newDimensionsState = dimensionsState.concat({
		width: 5,
		step: 1,
		start: 0,
		dimension: 'x'
	});

	return newDimensionsState;
}


/**
 * @param {object} dimensionsState current state
 * @param {object} action contain type and data
 * @return {object} new state for products
 */
function editDimension(dimensionsState, action){
	const newDimensionsState=[...dimensionsState];//clone products
	newDimensionsState[action.index][action.name]=action.value;
	return newDimensionsState;
}


/**
 * @param {object} dimensionsState current state
 * @param {object} action contain type and data
 * @return {object} new state for products
 */
function removeDimension(dimensionsState, action){
	const newDimensionsState=dimensionsState.slice();//clone products
	newDimensionsState.splice(dimensionsState.findIndex(p => p.id==action.id), 1);//remove matched product

	return newDimensionsState;
}


/**
 * @param {object} dimensionsState current state
 * @param {object} action contain type and data
 * @return {object} new state for products
 */
function clickProduct(dimensionsState, action){
	alert(action.product.id);
	return dimensionsState;
}
