import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Category from './pages/Category';
import './utils/utility-classes.css';
// Dupa ce am instalat pachetul react-with-firebase-auth, trebuie sa importam urmatoarele pachete:
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
// ATENTIE! Nu luati path-uri cu copy-paste fara sa va ganditi unde aveti fisierele echivalente in proiect!
import firebaseConfig from './configs/firebase';

// Pornind de la obiectul de configurare, trebuie sa initializam aplicatia de firebase,
// folosind metoda initializaApp, pe care firebase ne-o pune la dispozitie.
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Dupa ce initializam aplicatia de firebase, putem sa ne folosim de metodele de autentificare, pe care aceasta
// ne-o pune la dispozitie.
const firebaseAppAuth = firebaseApp.auth();
// In cazul in care folosim provideri externi pentru autentificare, trebuie sa cream un nou obiect corespunzator.
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

  // Functia updateUserState va fi pasata catre componenta de Login, iar dupa logare, cand vor fi disponibile]
  // datele userului, state-ul aplicatiei va fi actualizat cu datele userului.
  updateUserState(userInfo) {
    this.setState({user: userInfo});
  }

  // Functia handleSignOut va fi pasata catre componenta Header, iar la click pe "Delogare", se va actualiza state-ul
  // aplicatiei, stergand datele userului.
  // ATENTIE! Header-ul se afla in multiple pagini, deci la ce stim acum, functia asta ar trebui trimisa catre fiecare
  // pagina care are Header :). De data viitoare vom fixa aceasta problema.
  handleSignOut() {
    this.setState({user: ''});
  }

  render() {
    // La console.log-ul props-urilor ne apar cateva noi, dintre care de interes sunt:
    // user, signInWithGoogle, signOut. Ele au venit prin HOC-ul withFirebaseAuth(vezi teorie).
    // Props-ul signInWithGoogle trebuie pasat catre componenta Login, iar signOut catre
    // componenta Header, aflata in majoritatea paginilor.
    console.log('App.js props: ', this.props);

    return(
      <div className="app">
        <Switch>
          <Route
            path='/login'
            // Pentru a pasa props-uri catre componenta din Route, trebuie sa folosim render(vezi teorie)
            render={(props) => <Login
              // props-urile de aici sunt props-urile referitoare la router(match, history...)
              {...props}
              // Trebuie sa trimitem mai departe metoda signInWithGoogle, furnizata de firebase, pentru
              // a fi apelata din pagina de login.
              signInWithGoogle={this.props.signInWithGoogle}
              // Dupa ce logarea se va executa cu succes, va returna niste informatii trebuie fie aduse in App.
              // => ARROW FUNCTION!
              updateUserState={(userInfo) => this.updateUserState(userInfo)}
            />}
          />
          <Route
            exact path='/'
            // trebuie sa trimitem props-uri => render
            render={(props) => <Home
              {...props}
              // trimitem informatiile despre user, dar metoda prin care se poate deloga, catre home
              user={this.state.user}
              // metoda signOut, venita de la firebase, cand e apelata delogheaza userul curent
              signOut={this.props.signOut}
              // ATENTIE! Cand se va apela metoda Sign out, trebuie modificate informatiile despre user din App!
              // => arrow function
              handleSignOut={() => this.handleSignOut()}
            />}
          />
          <Route path='/about' component={About}/>
          {/* ATENTIE! In pagina de categorie nu se va reflecta faptul ca ne-am logat, deoarece catre headerul ei
          nu am pasat informatiile userului sau cele doua functii necesare delogarii. Vom rezolva asta data viitoare */}
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
