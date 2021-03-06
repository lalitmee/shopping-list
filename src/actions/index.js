export const ADD_USER = "ADD_USER";
export const ADD_LIST_ITEM = "ADD_LIST_ITEM";
export const UPDATE_LIST_ITEM = "UPDATE_LIST_ITEM";
export const REMOVE_LIST_ITEM = "REMOVE_LIST_ITEM";
export const REMOVE_ALL_LIST_ITEMS = "REMOVE_ALL_LIST_ITEMS";

export const addUser = (user, userId) => ({
	type: ADD_USER,
	user: user,
	userId: userId
});

export const addListItem = item => ({
	type: ADD_LIST_ITEM,
	item
});

export const updateListItem = (item, id) => ({
	type: UPDATE_LIST_ITEM,
	item: item,
	id: id
});

export const removeListItem = itemId => ({
	type: REMOVE_LIST_ITEM,
	itemId
});

export const removeAllListItems = () => ({
	type: REMOVE_ALL_LIST_ITEMS
});
