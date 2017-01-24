import { combineReducers } from 'redux'
import dimensionsReducer from './dimensionsController/dimensionsReducer.js'

const appReducers = combineReducers({
	dimensionsReducer
});

export default appReducers
