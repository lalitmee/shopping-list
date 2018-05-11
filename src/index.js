import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import throttle from "lodash/throttle";
import { loadState, saveState } from "./localStorage";
import "./index.css";
import listItems from "./reducers";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "semantic-ui-css/semantic.min.css";

const persistedState = loadState();

const store = createStore(
	listItems,
	persistedState,
	compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

store.subscribe(
	throttle(() => {
		saveState({ listItems: store.getState().listItems });
	}, 1000)
);

render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
