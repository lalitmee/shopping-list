import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, Button, Header, Modal } from "semantic-ui-react";
import UserAvatar from "react-user-avatar";
import EditItem from "./forms/EditItem";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    // this.modalState = this.modalState.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { item, removeListItem } = this.props;
    const listItemId = item.id;

    removeListItem(listItemId);
  }

  handleEdit(id) {
    this.setState({
      isEditing: true
    });
  }

  closeModal() {
    this.setState({
      isEditing: false
    });
  }

  render() {
    const { item, updateListItem } = this.props;

    return (
      <Card>
        <Card.Content>
          <div className="quantity">
            <Header as="h3">{item.quantity}</Header>
          </div>
          <Card.Header>{item.name}</Card.Header>

          <Card.Description>{item.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Modal
              style={{ marginTop: "0", margin: "0 auto" }}
              trigger={
                <Button
                  basic
                  color="green"
                  onClick={e => this.handleEdit(item.id)}
                >
                  Edit
                </Button>
              }
              open={this.state.isEditing}
              onClose={this.closeModal}
            >
              <Modal.Header>Editing Item</Modal.Header>
              <Modal.Content image>
                <EditItem
                  item={item}
                  modalState={this.modalState}
                  updateListItem={updateListItem}
                />
                <Button
                  type="submit"
                  inverted
                  color="green"
                  onClick={this.closeModal}
                  style={{
                    position: "absolute",
                    marginTop: "36.3%",
                    marginLeft: "10%"
                  }}
                >
                  Done
                </Button>
              </Modal.Content>
            </Modal>

            <Button basic color="red" onClick={this.handleSubmit}>
              Remove
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default withRouter(ListItem);
