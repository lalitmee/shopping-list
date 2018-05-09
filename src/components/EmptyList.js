import React from "react";
import { Container, Header } from "semantic-ui-react";

const EmptyList = () => (
	<Container>
		<Header as="h5" textAlign="center">
			There are no items in your list.
		</Header>
	</Container>
);

export default EmptyList;
