import {loadState, saveState} from './persistState';
import {createStore} from 'redux'
import appReducers from './appReducers.js';

const initState = loadState();//get the state from local storage or url
const store = createStore(
	appReducers,
	initState
);
store.subscribe(function () {
	saveState(store.getState());//save changes to local storage
});

const getStore = () =>{
	return store;
};
export default getStore;
