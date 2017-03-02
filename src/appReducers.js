import { combineReducers } from 'redux'
import dimensionsReducer from './appComponent/controlSection/threeDimensionControllers/dimensionsController/dimensionsReducer.js'
import optionsReducer from './appComponent/controlSection/optionReducer'

/**
 * combine all reducers so you can use them where ever we want
 */
const appReducers = combineReducers({
	dimensionsReducer,
	optionsReducer
});

export default appReducers
