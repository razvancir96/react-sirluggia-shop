// Importam cele doua metode din firebase.
import { signInWithGoogle, signOut } from '../../apis/firebase/firebase';

// ATENTIE! Aceste 3 actiuni normale sunt dispatch-uite(trimise) catre store din interiorul actiunilor
// de mai jos: loginUser si logoutUser, care desfasoara requesturi asincrone.
const startLoading = () => {
    return {
        type: 'START_LOADING'
    }
}
const updateUserData = (payload) => {
    return {
        type: 'UPDATE_USER_DATA',
        data: payload
    }
}
const updateUserError = (payload) => {
    return {
        type: 'UPDATE_USER_ERROR',
        error: payload
    }
}

// ATENTIE! Aici isi exercita puterea Redux Thunk! Actiunile de login si logout sunt apelate(dispatch-uite)
// din componente/pagini, iar diferenta fata de o actiune obisnuita e ca returneaza O FUNCTIE care primeste
// ca parametru metoda dispatch, in loc de un obiect. Functia va apela metoda dispatch, care primeste ca parametru
// apelul ALTELOR actiuni normale(care returneaza un obiect). In acest mod, reducerii vor stii ca o actiune
// a fost dispatch-uita, iar store-ul trebuie actualizat.
export function loginUser() {
    return (dispatch) => {
        // Actiunea loginUser va fi actiunea dispatch-uita din pagina de login. Ea are de facut request-uri asincrone,
        // asadar va trebui sa dispatch-uiasca la randul ei 3 actiuni catre store. Prima este startLoading,
        // care va face reducerul sa seteze cheia loading a starii pe true.
        dispatch(startLoading());

        // Functia signInWithGoogle intoarce un Promise in caz de succes, asadar abia in .then vom stii ca datele au
        // venit cu succes. Odata ce avem datele despre user, facem dispatch la actiunea updateUserData.
        signInWithGoogle().then(user => {
            dispatch(updateUserData(user));
        // In cazul in care apare o eroare, trebuie sa salvam mesajul de eroare corespunzator, asadar vom face
        // dispatch la o noua actiune: updateUserError.
        }).catch(error => {
            dispatch(updateUserError(error));
        });
    }
}

// Functia logoutUser este similara ca structura cu loginUser, doar ca atunci cand actualizeaza datele userului,
// in loc sa adauge date noi despre el, va goli datele precedente(updateUserData primeste un obiect gol).
export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData({}));
        }).catch((error) => {
            dispatch(updateUserError(error));
        });
    }
}