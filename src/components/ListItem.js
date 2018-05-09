import React, { Component } from "react";
import { Card, Button, Header } from "semantic-ui-react";
import UserAvatar from "react-user-avatar";

class ListItem extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { item, removeListItem } = this.props;
    const listItemId = item.id;

    removeListItem(listItemId);
  }

  render() {
    const { item } = this.props;

    return (
      <Card>
        <Card.Content>
          <div className="quantity">
            <Header as="h3">{item.quantity}</Header>
          </div>
          <Card.Header>{item.name}</Card.Header>
          {item.description.length > 0 ? (
            <Card.Description>{item.description}</Card.Description>
          ) : (
            ""
          )}
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Edit
            </Button>
            <Button basic color="red" onClick={this.handleSubmit}>
              Remove
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default ListItem;
