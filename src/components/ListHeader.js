import React, { Component } from "react";
import { Form, Button, Header } from "semantic-ui-react";

class ListHeader extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { removeAllListItems } = this.props;

    removeAllListItems();
  }

  render() {
    const { totalNumberOfListItems } = this.props;

    if (totalNumberOfListItems > 0) {
      return (
        <Form onSubmit={this.handleSubmit} className="form-inline">
          {this.props.totalNumberOfListItems}{" "}
          {totalNumberOfListItems === 1 ? "item" : "items"}{" "}
          <Button className="btn btn-xs btn-default" type="submit">
            Remove all
          </Button>
        </Form>
      );
    }

    return <Header textAlign="center">Items List</Header>;
  }
}

export default ListHeader;
