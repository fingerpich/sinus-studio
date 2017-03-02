import { combineReducers } from 'redux'
import dimensionsReducer from './appComponent/controlSection/threeDimensionControllers/dimensionsController/dimensionsReducer.js'
import optionsReducer from './appComponent/controlSection/optionReducer'

const appReducers = combineReducers({
	dimensionsReducer,
	optionsReducer
});

export default appReducers
