import getStore from './initRedux.js';

const checkState = (state) => {
	return (state && state.rotorsData && state.rotorsData.xy);
};
/**
 * load last State
 * @return {object} saved state
 */
export const loadState = () => {
	const url = window.location.search;
	let result = 0;
	if (url.length > 10) {
		try {
			const url = window.location.search;
			const urlstring = decodeURL(url);
			result = JSON.parse(urlstring);
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
	return checkState(result) ? result : undefined;
};


/**
 * short name for some key in json
 */
const keyList=[
	{key:"rotorsData",zip:"R"},
	{key:"width",zip:"W"},
	{key:"step",zip:"S"},
	{key:"start",zip:"C"},
	{key:"isPlaying",zip:"P"},
	{key:"options",zip:"O"},
	{key:"hasHSL",zip:"H"},
	{key:"showAxes",zip:"A"},
	{key:"xy",zip:"D1"},
	{key:"yz",zip:"D2"},
	{key:"xz",zip:"D3"},
];
/**
 * some other character replacement which are not ok in url
 */
const replaceList=[
	{from:'true',to:'T'},
	{from:'false',to:'F'},
	{from:'{',to:'Q'},
	{from:'}',to:'X'},
	{from:'[',to:'E'},
	{from:']',to:'Z'},
	{from:',',to:'V'},
];
/**
 * shortening url
 */
const encodeURL = (state) => {
	let zipUrl=JSON.stringify(state);
	for(var i=0;i<keyList.length;i++) {
		zipUrl=zipUrl.replace(new RegExp('"'+keyList[i].key+'":',"g"),keyList[i].zip);
	}
	for(var j=0; j<replaceList.length; j++) {
		var from=replaceList[j].from;
		if(from.length<2)from="\\"+from;
		zipUrl=zipUrl.replace(new RegExp(from,"g"),replaceList[j].to);
	}
	zipUrl="?" + encodeURIComponent(zipUrl);
	return zipUrl;
};

/**
 * decode url
 */
const decodeURL = (url) => {
	let decodeUrl=decodeURIComponent(url.slice(1));
	for(var j=0; j<replaceList.length; j++) {
		decodeUrl=decodeUrl.replace(new RegExp(replaceList[j].to,"g"),replaceList[j].from);
	}
	for(var i=0;i<keyList.length;i++) {
		decodeUrl=decodeUrl.replace(new RegExp(keyList[i].zip,"g"),'"'+keyList[i].key+'":');
	}
	return decodeUrl;
};

/**
 * change browser url to new state and reload it
 */
export const setUrlByState = () => {
	const state = getStore().getState();
	window.location.search = encodeURL(state);
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
