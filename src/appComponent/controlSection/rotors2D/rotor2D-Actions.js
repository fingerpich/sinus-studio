/**
 * @return an action to add new contoller
 * @param {string} label indicate add to which table
 */
export const ADD_DIMENSION = 'ADD_DIMENSION';
export const addDimension = (label)=> {
	return {type: ADD_DIMENSION, data: {dimension: label}};
};

/**
 * @return {object} change property action
 * @param {number} index
 */
export const EDIT_DIMENSION = 'EDIT_DIMENSION';
export const changeProperty = ({index, name, value, label})=> {
	return {type: EDIT_DIMENSION, data: {index, name, value, dimension: label}};
};

/**
 * remove a dimension
 * @return {object} remove dimension action
 * @param {number} index
 */
export const REMOVE_DIMENSION = 'REMOVE_DIMENSION';
export const removeDimension = ({index, label})=> {
	return {type: REMOVE_DIMENSION, data: {index, dimension: label}};
};
