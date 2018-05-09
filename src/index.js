import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

import "./index.css";
import listItems from "./reducers";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "semantic-ui-css/semantic.min.css";

const store = createStore(
	listItems,
	compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
