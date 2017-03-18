import {combineReducers} from 'redux'
import rotorsReducer from './appComponent/controlSection/rotorsContainer/rotors2D/rotorsReducer.js'
import optionsReducer from './appComponent/controlSection/optionReducer'

/**
 * combine all reducers so you can use them where ever we want
 */
const appReducers = combineReducers({
	rotorsData: rotorsReducer,
	options: optionsReducer
});

export default appReducers
