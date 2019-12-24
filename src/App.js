import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import Cart from './pages/Cart';
import './utils/utility-classes.css';
// ATENTIE! Am eliminat importurile si initializarea firebase si App.js! Tot ce avem nevoie se fla in folderul
// apis/firebase

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {

      }
    }
  }

  updateUserState(userInfo) {
    this.setState({user: userInfo});
  }

  handleSignOut() {
    this.setState({user: ''});
  }

  render() {
    return(
      <div className="app">
        <Switch>
          <Route
            path='/login'
            render={(props) => <Login
              {...props}
              // Metoda signInWithGoogle nu trebuie pasata ca prop.
              updateUserState={(userInfo) => this.updateUserState(userInfo)}
            />}
          />
          <Route
            exact path='/'
            render={(props) => <Home
              {...props}
              // Metoda signOut nu mai trebuie pasata ca prop.
              user={this.state.user}
              handleSignOut={() => this.handleSignOut()}
            />}
          />
          <Route path="/cart" component={Cart}/>
          <Route path='/about' component={About}/>
          <Route path='/category/:categoryName' component={Category}/>
          <Route path='*' component={Page404}/>
        </Switch>
      </div>
    )
  }
}

// App nu mai trebuie wrappuita de un HOC.
export default App;
