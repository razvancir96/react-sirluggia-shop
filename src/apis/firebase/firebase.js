// Importam ce aveam inainte in App.js, fara withFirebaseAuth.
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../configs/firebase';

// Initializam aplicatia firebase, porning de la fisierul de configurare.
// ATENTIE! Aceasta initializare se face doar o data in aplicatie!
firebase.initializeApp(firebaseConfig);
// De asemenea, avem nevoie de providerul Google, de aceasta data ca obiect,
// nu ca array.
const googleProvider = new firebase.auth.GoogleAuthProvider()

// exportam metodele pe care dorim sa le folosim in alte componente
export const signOut = function() {
    // firebase.auth() este biblioteca din firebase care ne pune la dispozitie
    // metodele pentru autentificare. Avem nevoie de signOut.
    return firebase.auth().signOut();
}

export const signInWithGoogle = function() {
    // De asemenea, avem nevoie de signInWithPopup, caruia ii pasam providerul dorit.
    // signInWithPopup nu e singura varianta, va sfatuiesc sa va uitati putin prin
    // documentatia firebase auth pentru web(link pe platforma).
    return firebase.auth().signInWithPopup(googleProvider);
}