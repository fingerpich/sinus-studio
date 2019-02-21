import {loadState, saveState} from './persistState';
import {createStore} from 'redux';
import appReducers from './appReducers.js';

const initState = loadState();//get the state from local storage or url
const store = createStore(
	appReducers,
	initState
);

import {timer} from 'rxjs';
import {tap, delay, map} from 'rxjs/operators';

store.subscribe(() => {
	saveState(store.getState());//save changes to local storage
});

import {Go_NEXT_FRAME_DX} from './appComponent/controlSection/rotors2D/rotorsReducer.js';
import {Go_NEXT_FRAME} from './appComponent/controlSection/drawSettings/drawSetting-Reducer.js';

const timerSource = timer(1000, 33).pipe(tap(() => {
	store.dispatch({type: Go_NEXT_FRAME_DX});
	store.dispatch({type: Go_NEXT_FRAME);
}));

export const renderSubject = timerSource.pipe(delay(5)).pipe(map(() => store.getState()));

const getStore = () =>{
	return store;
};
export default getStore;
