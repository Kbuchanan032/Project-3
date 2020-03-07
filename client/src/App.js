import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shelters from "./pages/Shelters";
import Nav from "./components/Nav";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Shelters} />
          <Route exact path="/books" component={Shelters} />
          <Route exact path="/shelters/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;