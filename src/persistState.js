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
			const urlstring = decodeURIComponent(url.slice(6)).replace(/\;/g, ':');
			result = JSON.parse(urlstring);
		} catch (e) {
			//redirect to 404
		}
	}

	try {
		const serializedState = localStorage.getItem("state");
		if (serializedState === null) {
			result = undefined;
		}
		result = JSON.parse(serializedState);
	} catch (err) {
		result = undefined;
	}
	return checkState(result) ? result : undefined;
};
/**
 * change browser url to new state and reload it
 */
export const setUrlByState = () => {
	var state = window.getStoreState();
	window.location.search = "?data=" + encodeURIComponent(JSON.stringify(state));
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
