import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Category from './pages/Category';
// Importam cart-ul.
import Cart from './pages/Cart';
import './utils/utility-classes.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './configs/firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

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
              signInWithGoogle={this.props.signInWithGoogle}
              updateUserState={(userInfo) => this.updateUserState(userInfo)}
            />}
          />
          <Route
            exact path='/'
            render={(props) => <Home
              {...props}
              user={this.state.user}
              signOut={this.props.signOut}
              handleSignOut={() => this.handleSignOut()}
            />}
          />
          {/* Adaugam ruta pentru cart */}
          <Route path="/cart" component={Cart}/>
          <Route path='/about' component={About}/>
          <Route path='/category/:categoryName' component={Category}/>
          <Route path='*' component={Page404}/>
        </Switch>
      </div>
    )
  }
}

// ATENTIE! withFirebaseAuth este o HOC(vezi teorie). Practic, nu mai exportam direct App-ul,
// ci inainte ii extindem functionalitatea, pasandu-i informatii suplimetare, despre firebase.
// Folosind acest HOC, in App vom primi noi props-uri, de la firebase!
export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
