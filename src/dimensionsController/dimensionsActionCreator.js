/**
 * Created by ronash on 1/24/17.
 */

export const addDimension=()=>{
	return {type:'ADD_DIMENSION',action:{}}
};

export const changeProperty=(index,name,value)=>{
	return {type:'EDIT_DIMENSION',action:{index,name,value}}
};
