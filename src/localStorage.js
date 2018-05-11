export const loadState = () => {
	try {
		const serializedState = localStorage.getItem("state");
		const state = JSON.parse(serializedState);
		if (!state.listItems) {
			return { listItems: {} };
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return { listItems: {} };
	}
};

export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("state", serializedState);
	} catch (err) {
		// ignore the errors for now
	}
};
