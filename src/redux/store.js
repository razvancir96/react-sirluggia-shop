// De aceasta data vom avea implicati mai multi reduceri! Deci va trebui sa ii combinam,
// deci importam functia combineReducers. De asemenea, pentru a folosi redux-thunk, avem nevoie
// de functia applyMiddleware.
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cartReducer } from './reducers/cart';
// Importam si noul reducer.
import { userReducer } from './reducers/user';
// Importam redux-thunk.
import thunk from 'redux-thunk';
// Importam redux logger-ul.
import logger from 'redux-logger';

// Combinam reducerii! Trimitem ca parametru un obiect, ale carui chei vor fi esentiale pentru
// state-ul store-ului. Practic, daca inainte pentru a lua din cart produsele, in mapStateToProps
// aveam state.products.length, acum vom avea state.cart.products.length !
// Valorile pentru chei trebuie sa fie reducerii corespunzatori, importati.
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

// Toate middleware-urile utilizate de redux pot fi puse intr-un vector.
const middlewares = [thunk, logger];
// Pasam rootReducerul rezultat din combinarea reducerilor catre createStore. De asemenea, pasam
// rezultatul apelarii lui applyMiddleware, cu CONTINUTUL vectorului de middleware-uri primit ca parametru.
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;