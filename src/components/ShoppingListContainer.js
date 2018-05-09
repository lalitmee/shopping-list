import { connect } from "react-redux";

import {
  addListItem,
  updateListItem,
  removeListItem,
  removeAllListItems
} from "../actions";

import ShoppingList from "./ShoppingList";

const mapStateToProps = ({ listItems }) => ({
  listItems
});

const mapDispatchToProps = dispatch => ({
  addListItem: listItem => dispatch(addListItem(listItem)),
  updateListItem: listItemId => dispatch(updateListItem(listItemId)),
  removeListItem: listItemId => dispatch(removeListItem(listItemId)),
  removeAllListItems: () => dispatch(removeAllListItems())
});

const ShoppingListContainer = connect(mapStateToProps, mapDispatchToProps)(
  ShoppingList
);

export default ShoppingListContainer;
