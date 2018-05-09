import React, { Component } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { GithubLoginButton } from "react-social-login-buttons";

export class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.login = this.login.bind(this);
	}

	componentDidMount() {
		const oauthScript = document.createElement("script");
		oauthScript.src =
			"https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";

		document.body.appendChild(oauthScript);
	}

	login(e) {
		// Prevents page reload
		e.preventDefault();

		// Initializes OAuth.io with API key
		// Sign-up an account to get one
		window.OAuth.initialize("HlyhAkZq67D9cU6dnAkHnNwW1Ho");

		// Popup Github and ask for authorization
		window.OAuth.popup("github").then(provider => {
			// Prompts 'welcome' message with User's name on successful login
			// Check console logs for additional User info
			provider.me().then(data => {
				console.log("data: ", data);
				alert("Welcome " + data.name + "!");
			});

			// You can also call Github's API using .get()
			provider.get("/user").then(data => {
				console.log("self data:", data);
			});
		});
	}

	render() {
		return (
			<Container style={{ textAlign: "center" }}>
				<Segment raised color="orange" className="text-center">
					<Header as="h1">Welcome To Your Shopping List</Header>

					<GithubLoginButton
						onClick={this.login}
						textAlign="center"
					/>
					<Link to="/list">Your List</Link>
				</Segment>
			</Container>
		);
	}
}

export default MainPage;
