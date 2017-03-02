/**
 * load last State
 * @return {object} saved state
 */
export const loadState = () => {
	const url = window.location.search;
	if(url.length>10) {
		try {
			const url = window.location.search;
			const urlstring = decodeURIComponent(url.slice(6)).replace(/\;/g,':');
			return JSON.parse(urlstring);
		} catch (e) {
			//redirect to 404
		}
	}

	try{
		const serializedState=localStorage.getItem("state");
		if(serializedState === null){
			return undefined;
		}
		return JSON.parse(serializedState);
	}catch(err){
		return undefined;
	}
};
/**
 * change browser url to new state and reload it
 */
export const setUrlByState = () => {
	var state=window.getStoreState();
	window.location.search="?data="+encodeURIComponent(JSON.stringify(state));
};

/**
 * save last State
 */
export const saveState = (state) => {
	try{
		localStorage.setItem("state",JSON.stringify(state));
	}
	catch(err){}
};
