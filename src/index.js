import React from "react";
import ReactDOM from "react-dom";
// import registerServiceWorker from './registerServiceWorker';
import { unregister } from "./registerServiceWorker";

import { HashRouter } from "react-router-dom";
import Main from "./Views/Main";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
const rootElement = document.getElementById("root");

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    rootElement
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept("./Views/Main", () => {
    const NextApp = require("./Views/Main").default;
    renderApp(NextApp);
  });
}
unregister();

// registerServiceWorker();
