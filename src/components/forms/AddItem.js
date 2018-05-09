import React from "react";
import uuid from "uuid";
import { Form, Label, Checkbox, TextArea, Button } from "semantic-ui-react";
import SweetAlert from "sweetalert2-react";

class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			itemName: "",
			itemDescription: "",
			itemQuantity: 0,
			quantityLess: false
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmitEvent = this.handleSubmitEvent.bind(this);
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

		const { addListItem } = this.props;
		const { itemName, itemDescription, itemQuantity } = this.state;

		const listItem = {
			id: uuid.v4(),
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
			addListItem(listItem);
			this.setState({
				itemName: "",
				itemDescription: "",
				itemQuantity: 0
			});
		}
	}

	render() {
		const {
			itemName,
			itemDescription,
			itemQuantity,
			quantityLess
		} = this.state;
		return (
			<Form onSubmit={this.handleSubmitEvent}>
				{quantityLess && (
					<SweetAlert
						show={quantityLess}
						title="How Much?"
						text="Please Fill Quantity"
						onConfirm={() => this.setState({ quantityLess: false })}
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
				<Button type="submit" basic color="green">
					Add New
				</Button>
			</Form>
		);
	}
}

export default AddItem;
