/**
 * Created by ronash on 1/24/17.
 */

export const addDimension=(label)=>{
	return {type:'ADD_DIMENSION',data:{dimension:label}}
};

export const changeProperty=({index,name,value,label})=>{
	return {type:'EDIT_DIMENSION',data:{index,name,value,dimension:label}}
};

export const removeDimension=({index,label})=>{
	return {type:'REMOVE_DIMENSION',data:{index,dimension:label}}
};
