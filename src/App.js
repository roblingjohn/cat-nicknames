import React from "react";
import Display from "./components/Display";
import Choose from "./components/Choose";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="./cat-nicknames/">
            <Choose />
          </Route>
          <Route
            path="./cat-nicknames/nickname"
            render={(props) => <Display {...props} />}
          />
          <Route path="./cat-nicknames/*">
            <Choose />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
