import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import "./reset.css";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing} />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
