import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';
// Importam si pagina de categorie.
import Category from './pages/Category';
// Vom folosi utility-classes in intreaga aplicatie, deci importam
// fisierul in App, pentru a avea vizibilitate globala.
import './utils/utility-classes.css';

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
          {/* ATENTIE! Avem 6 categorii, pentru care vom afisa pagina Category, cu diverse props-uri.
          NU vom face 6 rute duferite, ci vom transmite numele rutei, ca parametru dinamic.
          Punand caracterul ":", categoryName devine un parametru ce va fi inlocuit cu valoare pusa in ruta.
          Unde vom putea folosi acest parametru? In pagina Category! */}
          <Route path='/category/:categoryName' component={Category}/>
          <Route path='*' component={Page404}/>
        </Switch>
      </div>
    )
  }
}

export default App;
