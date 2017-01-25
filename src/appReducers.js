import { combineReducers } from 'redux'
import dimensionsReducer from './appComponent/threeDimensionControllers/dimensionsController/dimensionsReducer.js'

const appReducers = combineReducers({
	dimensionsReducer
});

export default appReducers
