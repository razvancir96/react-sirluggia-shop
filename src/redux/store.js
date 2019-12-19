// De aceasta data vom avea implicati mai multi reduceri! Deci va trebui sa ii combinam,
// deci importam functia combineReducers.
import { createStore, combineReducers } from 'redux';
import { cartReducer } from './reducers/cart';
// Importam si noul reducer.
import { userReducer } from './reducers/user';

// Combinam reducerii! Trimitem ca parametru un obiect, ale carui chei vor fi esentiale pentru
// state-ul store-ului. Practic, daca inainte pentru a lua din cart produsele, in mapStateToProps
// aveam state.products.length, acum vom avea state.cart.products.length !
// Valorile pentru chei trebuie sa fie reducerii corespunzatori, importati.
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

// Pasam rootReducerul rezultat din combinarea reducerilor catre createStore.
const store = createStore(rootReducer);

export default store;