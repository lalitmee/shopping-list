import React from "react";
import { Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import ShoppingListContainer from "./components/ShoppingListContainer";

const App = () => (
	<div>
		<Route exact path="/" component={MainPage} />
		<Route exact path="/list" component={ShoppingListContainer} />
	</div>
);

export default App;

