import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Shelters from './pages/Shelters';
import * as SignUp from './pages/SignUp';
import * as SignIn from './pages/SignIn';
import UserProfile from './pages/UserProfile'
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';



class App extends Component {
  state = {
    loggedIn: false
  }
  
  
  render() {
    return (
      <Router>
        <div>
          <Nav />
          
          <Switch>
            <Route exact path='/' component={Shelters} />
            <Route exact path='/signup' component={SignUp.SignUp} />
            <Route exact path='/users/signup' component={SignUp.UserSignUp} />
            <Route exact path='/providers/signup' component={SignUp.ProviderSignUp} />
            <Route exact path='/signin' component={SignIn.SignIn} />
            <Route exact path='/users/signin' component={SignIn.UserSignIn} />
            <Route exact path='/providers/signin' component={SignIn.ProviderSignIn} />
            <Route exact path='/users' component={UserProfile} />
            <Route exact path='/shelters/:id' component={Detail} />
            <Route component={NoMatch} />
            <Redirect to ='/' />
          </Switch>,
            
          
        </div>
      </Router>
    );
  }
}

export default App;
