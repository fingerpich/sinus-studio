import {loadState, saveState} from './persistState';
import {createStore} from 'redux';
import appReducers from './appReducers.js';

const initState = loadState();//get the state from local storage or url
const store = createStore(
	appReducers,
	initState
);

import {timer, from, zip} from 'rxjs';
import {tap, delay, map, debounceTime} from 'rxjs/operators';

import {Go_NEXT_FRAME_DX} from './appComponent/controlSection/rotors2D/rotorsReducer.js';
import {Go_NEXT_FRAME} from './appComponent/controlSection/drawSettings/drawSetting-Reducer.js';

const timerSource = timer(500, 33).pipe(tap(() => {
	const state = store.getState();
	if (Object.values(state.rotorsData).find((dim) => dim.find((rotor) => rotor.isPlaying))) {
		store.dispatch({type: Go_NEXT_FRAME_DX});
	}
	if (state.options.isPlayDrawing) {
		store.dispatch({type: Go_NEXT_FRAME});
	}
}));

export const renderSubject = zip(timerSource.pipe(delay(5)), from(store).pipe(debounceTime(5)))
  .pipe(map(() => {
  	const state = store.getState();
	saveState(state);
	return state;
  }));

const getStore = () =>{
	return store;
};
export default getStore;
