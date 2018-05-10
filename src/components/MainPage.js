import React, { Component } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { GithubLoginButton } from "react-social-login-buttons";

export class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: ""
		};
		this.login = this.login.bind(this);
	}

	componentDidMount() {
		const oauthScript = document.createElement("script");
		oauthScript.src =
			"https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";

		document.body.appendChild(oauthScript);
	}

	login(e) {
		// Initializes OAuth.io with API key
		// Sign-up an account to get one
		window.OAuth.initialize("LP28rqLUk0g-q3B97FCnFRTPtyw");

		// Popup Github and ask for authorization
		window.OAuth.popup("github").then(provider => {
			// Prompts 'welcome' message with User's name on successful login
			// Check console logs for additional User info
			provider.me().then(data => {
				this.setState({
					user: data.name
				});
				this.props.history.push("/list", { username: data.name });
			});

			// // You can also call Github's API using .get()
			// provider.get("/user").then(data => {
			// 	console.log("self data:", data);
			// });
		});
	}

	render() {
		return (
			<Container style={{ textAlign: "center", padding: "15%" }}>
				<Segment raised color="orange" className="text-center">
					<Header as="h1">Welcome To Your Shopping List</Header>

					<GithubLoginButton
						style={{ width: "250px", margin: "0 auto" }}
						onClick={this.login}
						textAlign="center"
					/>
				</Segment>
			</Container>
		);
	}
}

export default withRouter(MainPage);
