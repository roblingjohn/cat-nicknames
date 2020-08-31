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
          <Route exact path="./">
            <Choose />
          </Route>
          <Route exact path="./display" render={(props) => <Display {...props}/>}>
            {/* <Display /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
