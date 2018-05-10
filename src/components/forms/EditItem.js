import React from "react";
import { withRouter } from "react-router-dom";
import uuid from "uuid";
import {
	Header,
	Container,
	Form,
	Label,
	Checkbox,
	TextArea,
	Button
} from "semantic-ui-react";
import SweetAlert from "sweetalert2-react";

class EditItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			itemName: this.props.item.name,
			itemDescription: this.props.item.description,
			itemQuantity: this.props.item.quantity,
			quantityLess: false,
			isEditing: false
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
		// this.closeModal = this.closeModal.bind(this);
	}

	handleInputChange(event) {
		const inputName = event.target.name;
		const inputValue = event.target.value;

		this.setState(currentState => {
			return {
				...currentState,
				[inputName]: inputValue
			};
		});
	}

	handleSubmitEvent(event) {
		event.preventDefault();

		const { updateListItem } = this.props;
		const { itemName, itemDescription, itemQuantity } = this.state;
		const itemId = this.props.item.id;

		const listItem = {
			id: this.props.item.id,
			date: new Date(),
			name: itemName.trim(),
			description: itemDescription.trim(),
			quantity: parseInt(itemQuantity, 10)
		};

		if (itemQuantity < 1) {
			this.setState({
				quantityLess: true
			});
		} else {
			updateListItem(listItem, itemId);
			this.setState({
				isEditing: false
			});
		}
	}

	// componentDidUpdate() {
	// 	this.props.modalState(this.state.isEditing);
	// }

	render() {
		const {
			itemName,
			itemDescription,
			itemQuantity,
			quantityLess
		} = this.state;
		return (
			<Container>
				<Header as="h1" textAlign="center" style={{ marginTop: "2%" }}>
					Editing Shopping List Item
				</Header>
				<Form onSubmit={this.handleSubmitEvent}>
					{quantityLess && (
						<SweetAlert
							show={quantityLess}
							title="How Much?"
							text="Please Fill Quantity"
							onConfirm={() =>
								this.setState({ quantityLess: false })
							}
						/>
					)}
					<Form.Field>
						<label>Item Name</label>
						<input
							id="itemName"
							name="itemName"
							placeholder="First Name"
							onChange={this.handleInputChange}
							value={itemName}
							required
						/>
					</Form.Field>
					<Form.Field>
						<label>Description</label>
						<TextArea
							id="itemDescription"
							name="itemDescription"
							autoHeight
							placeholder="Enter Description"
							onChange={this.handleInputChange}
							value={itemDescription}
							required
						/>
					</Form.Field>
					<Form.Field>
						<label>Quantity</label>
						{itemQuantity >= 0 ? (
							<input
								id="itemQuantity"
								name="itemQuantity"
								type="number"
								onChange={this.handleInputChange}
								value={itemQuantity}
								required
							/>
						) : (
							<input
								id="itemQuantity"
								name="itemQuantity"
								type="number"
								onChange={this.handleInputChange}
								value="0"
								required
							/>
						)}
					</Form.Field>
					<Button
						type="submit"
						inverted
						color="orange"
						onClick={this.closeModal}
					>
						Apply
					</Button>
				</Form>
			</Container>
		);
	}
}

export default withRouter(EditItem);
