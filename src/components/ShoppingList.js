import React, { Component } from "react";
import List from "./List";
import {
	Container,
	Header,
	Card,
	Button,
	Image,
	Modal,
	Grid,
	Divider
} from "semantic-ui-react";

import AddItem from "./forms/AddItem";
// import "../App.css";

const ShoppingList = ({
	listItems,
	addListItem,
	removeListItem,
	removeAllListItems
}) => (
	<Container className="App">
		<Header as="h1" textAlign="center">
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
						removeListItem={removeListItem}
						removeAllListItems={removeAllListItems}
					/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Container>
);

export default ShoppingList;
