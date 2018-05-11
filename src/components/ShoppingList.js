import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import List from "./List";
import {
	Container,
	Header,
	Card,
	Button,
	Image,
	Modal,
	Grid,
	Divider,
	Segment
} from "semantic-ui-react";

import AddItem from "./forms/AddItem";
// import "../App.css";

const ShoppingList = ({
	listItems,
	addListItem,
	updateListItem,
	removeListItem,
	removeAllListItems
}) => (
	<Container className="App">
		<Header as="h1" textAlign="center" style={{ marginTop: "2%" }}>
			Shopping List
		</Header>
		<Divider />
		<Grid>
			<Grid.Row>
				<Grid.Column width={4}>
					<AddItem addListItem={addListItem} />
				</Grid.Column>
				<Grid.Column width={12}>
					<List
						listItems={listItems}
						updateListItem={updateListItem}
						removeListItem={removeListItem}
						removeAllListItems={removeAllListItems}
					/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container>
);

function mapStateToProps(state) {
	return state;
}

export default withRouter(connect(mapStateToProps)(ShoppingList));
