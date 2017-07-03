import getStore from './initRedux.js';

/**
 * load last State
 * @return {object} saved state
 */
const defaultState= {
	"rotorsData": {"xy": [], "yz": [], "xz": []},
	"options": {"showAxes": false, "hasHSL": false, "showMoreControl": false, "progressedSteps": 360, "steps": 360}
};
export const loadState = () => {
	const url = document.location.pathname;
	let result = 0;
	if (url.length > 10) {
		try {
			result = decodeURL(url);

		} catch (e) {
			//redirect to 404
		}
	}
	else {
		try {
			const serializedState = localStorage.getItem("state");
			if (serializedState === null) {
				result = undefined;
			}
			result = JSON.parse(serializedState);
		} catch (err) {
			result = undefined;
		}
	}
	return result? {...defaultState, ...result} : undefined;
};


/**
 * short name for some key in json
 */
const keyList = [
	{key : "width", zip : "W"},
	{key : "step", zip : "S"},
	{key : "start", zip : "C"},
	{key : "options", zip : "O"},
	{key : "steps", zip : "J"},
	{key : "xy", zip : "D1"},
	{key : "yz", zip : "D2"},
	{key : "xz", zip : "D3"},
	{key : "rotorsData", zip : "R"},
	{key : "showAxes", zip : "A"},
	{key : "hasHSL", zip : "H"},
	{key : "progressedSteps", zip : "I"},
	{key : "showMoreControl", zip : "G"},
	{key : "isPlaying", zip : "P"},
	{key : "isPlayDrawing", zip : "B"},
];
/**
 * some other character replacement which are not ok in url
 */
const replaceList=[
	{from : 'true', to : 'T'},
	{from : 'false', to : 'F'},
	{from : '{', to : 'Q'},
	{from : '}', to : 'X'},
	{from : '[', to : 'E'},
	{from : ']', to : 'Z'},
	{from : ',', to : 'V'}
];
/**
 * shortening url
 */
const encodeURL = (state) => {
	let enstate = sanitizeState(state);
	const result = [[],[]];
	for (let dimension in enstate.rotorsData) {
		result[0].push(enstate.rotorsData[dimension].map((roullette)=>{
			return [roullette.isPlaying ? 0 : roullette.start, roullette.step, roullette.width, (roullette.isPlaying ? 1 : 0)];
		}));
	}
	const options = enstate.options;
	result[1] = [options.showAxes?1:0, options.hasHSL?1:0, options.showMoreControl?1:0, options.progressedSteps, options.steps, options.isPlayDrawing?1:0]

	let str = JSON.stringify(result);
	for (let j=0; j<replaceList.length; j++) {
		const from = replaceList[j].from.length < 2 ? ("\\" + replaceList[j].from) : replaceList[j].from;
		str = str.replace(new RegExp(from,"g"),replaceList[j].to);
	}
	return str;
};
const isArray = (data) => {
	return (Object.prototype.toString.call(data) === "[object Array]");
};
const sanitizeState = (state) => {
	if (isArray(state)) {
		for (let sti of state) {
			sanitizeState(sti);
		}
	}
	else if (typeof(state) === 'object') {
		for (let [k, v] of Object.entries(state)) {
			if (keyList.filter(x => x.key === k).length < 1) {
				delete state[k];
			}
			sanitizeState(state[k]);
		}
	}
	return state;
};
/**
 * decode url
 */
const decodeURL = (url) => {
	url = decodeURIComponent(url.slice(1));
	for (let item of replaceList) {
		url = url.replace(new RegExp(item.to, "g"), item.from);
	}
	let stateObj = JSON.parse(url);
	const result = {};
	const arr = stateObj[0].map((dimension) => {
		return dimension.map((roullete) => {
			return {start:roullete[0], step:roullete[1], width:roullete[2], isPlaying:roullete[3]};
		});
	});
	result.rotorsData = {xy: arr[0], yz: arr[1], xz: arr[2]};

	result.options = {
		showAxes: stateObj[1][0],
		hasHSL: stateObj[1][1],
		showMoreControl: stateObj[1][2],
		progressedSteps: stateObj[1][3],
		steps: stateObj[1][4],
		isPlayDrawing: stateObj[1][5]
	};
	return result;
};

/**
 * change browser url to new state and reload it
 */
export const setUrlByState = () => {
	const state = getStore().getState();
	window.location.search = encodeURL(state);
};
export const getUrlByState = () => {
	const state = getStore()
		.getState();
	let output = window.location.href.split('?')[0];
	output += encodeURL(state);
	// return window.location.href.split('?')[0] + encodeURL(state);
	return output;
};

/**
 * save last State
 */
export const saveState = (state) => {
	try {
		localStorage.setItem("state", JSON.stringify(state));
	}
	catch (err) {
	}
};
