import React, { Component } from "react";
import ListItem from "./ListItem";
import ListHeader from "./ListHeader";
import EmptyList from "./EmptyList";

import { Card } from "semantic-ui-react";

class List extends Component {
  getTotalNumberOfListItems() {
    const { listItems } = this.props;

    return Object.values(listItems).reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  createListItemElements(listItems) {
    const { removeListItem, updateListItem } = this.props;

    return Object.values(listItems)
      .map(item => {
        return (
          <ListItem
            item={item}
            updateListItem={updateListItem}
            removeListItem={removeListItem}
            key={item.id}
          />
        );
      })
      .reverse();
  }

  render() {
    const { listItems, removeAllListItems } = this.props;
    const listItemElements = this.createListItemElements(listItems);

    return (
      <div>
        <h3 className="page-header">
          <ListHeader
            totalNumberOfListItems={this.getTotalNumberOfListItems(listItems)}
            removeAllListItems={removeAllListItems}
          />
        </h3>

        <Card.Group itemsPerRow={3}>
          {listItemElements.length > 0 ? listItemElements : <EmptyList />}
        </Card.Group>
      </div>
    );
  }
}

export default List;
