import {
  ADD_USER,
  ADD_LIST_ITEM,
  UPDATE_LIST_ITEM,
  REMOVE_LIST_ITEM,
  REMOVE_ALL_LIST_ITEMS
} from "../actions";

const initialState = {
  listItems: {},
  users: []
};

const addUser = (listItems, user, userId) => {};

const removeItemFromList = (listItems, itemId) => {
  const listItemsCopy = { ...listItems };

  delete listItemsCopy[itemId];

  return listItemsCopy;
};

const updateListItem = (listItems, listItem, id) => {
  const listItemsCopy = { ...listItems };

  // console.log(listItem);
  // console.log(id);

  listItemsCopy[id] = listItem;
  // console.log(listItemsCopy);
  return listItemsCopy;
};

const listItems = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return {
        listItems: {
          ...state.listItems,
          [action.item.id]: action.item
        }
      };

    // case ADD_USER:
    //   return {
    //     user: addUser(state.listItems, action.user, action.userId)
    //   };

    case REMOVE_LIST_ITEM:
      return {
        listItems: removeItemFromList(state.listItems, action.itemId)
      };

    case UPDATE_LIST_ITEM:
      return {
        listItems: updateListItem(state.listItems, action.item, action.id)
      };

    case REMOVE_ALL_LIST_ITEMS:
      return {
        listItems: {}
      };

    default:
      return state;
  }
};

export default listItems;
