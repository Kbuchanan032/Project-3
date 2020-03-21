import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Shelters from './pages/Shelters';
import * as SignUp from './pages/SignUp';
import * as SignIn from './pages/SignIn';
import UserProfile from './pages/UserProfile'
import { ProviderProfile } from './pages/ProviderProfile'
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import { Nav } from './components/Nav';


class App extends Component {
  state = {
    loggedIn: 'false',
    user: `${localStorage.getItem('user')}` , 
    type: ''
  }

  componentWillMount() {
    this.state.user !== 'null' ? this.setState({loggedIn: true, type: localStorage.getItem('type')}) : this.setState({loggedIn: false})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav type={this.state.type} user={this.state.user}/>
          
          <Switch>
            <Route exact path='/' component={Shelters} />
            <Route exact path='/signup' component={SignUp.SignUp} />
            <Route exact path='/users/signup' component={SignUp.UserSignUp} />
            <Route exact path='/providers/signup' component={SignUp.ProviderSignUp} />
            <Route exact path='/signin' component={SignIn.SignIn} />
            <Route exact path='/users/signin' component={SignIn.UserSignIn} />
            <Route exact path='/providers/signin' component={SignIn.ProviderSignIn} />
            <Route exact path='/users/:id' component={UserProfile} />
            <Route path='/providers/:id' component={ProviderProfile} />
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
