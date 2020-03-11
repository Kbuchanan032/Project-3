import React, {useState, useCallback} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Shelters from "./pages/Shelters";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {AuthContext} from './components/Context/auth-context';

import Auth from './pages/Auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  })
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  })

  let routes;

  if (isLoggedIn) {
    routes = (
      <switch>
        <Route exact path="/" component={Shelters} />
        <Route exact path="/shelters" component={Shelters} />
        <Route exact path="/shelters/:id" component={Detail} />
        <Route component={NoMatch} />
        <Redirect to ="/" />
      </switch>
    );
  }else {
    routes = (
      <switch>
        <Route exact path="/" component={Shelters} />
        <Route exact path="/auth"><Auth/></Route>
        <Redirect to="/" />
      </switch>
      

    );
  }

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout:logout}}>
    <Router>
      <div>
        <Nav />
        
         {routes}
          
        
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
