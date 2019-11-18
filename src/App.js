import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
// NU UITATI sa importati paginile
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div className="app">
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='*' component={Page404}/>
        </Switch>
      </div>
    )
  }
}

export default App;
