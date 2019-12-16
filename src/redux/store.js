// Avem nevoie de functia createStore din Redux pentru a crea un STORE
import { createStore } from 'redux';
// Crearea store-ului se face pornind de la reduceri, deci trebuie sa ii importam
import { cartReducer } from './reducers/cart';

// Functia createStore primeste ca parametru reducerii si creaza store-ul.
const store = createStore(cartReducer);
// Store-ul are niste metode predefinite, dar pentru React vom folosi niste functii
// ajutatoare pentru a ne conecta cu store-ul.
console.log(store);

// exportam store-ul, pentru a putea fi utilizat in index.js
export default store;