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
// Importam si pagina de checkout.
import Checkout from './pages/Checkout';

// WOW! App a devenit o functie! Cum? Am mutat toata informatia legata de user in store!
function App() {
  return(
    <div className="app">
      <Switch>
        <Route path='/login' component={Login}/>
        {/* De asemenea, rutelor nu mai strebuie sa le fie pasate parametri, deoarece componentele/paginile care
        vor sa interactioneze cu informatia legata de user trebuie doar sa se conecteze la store! Verificati
        componenta Header si pagina Login!*/}
        <Route exact path='/' component={Home}/>
        <Route path="/cart" component={Cart}/>
        {/* Adaugam ruta de checkout. */}
        <Route path="/checkout" component={Checkout}/>
        <Route path='/about' component={About}/>
        <Route path='/category/:categoryName' component={Category}/>
        <Route path='*' component={Page404}/>
      </Switch>
    </div>
  );
}

// App nu mai trebuie wrappuita de un HOC.
export default App;
