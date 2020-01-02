import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cartReducer } from './reducers/cart';
import { userReducer } from './reducers/user';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
});

const middlewares = [thunk];
// process.env.NODE_ENV este o variabila de mediu(anvironment variable), setata automat de create-react-app.
// Cat timp aplicatia nu este deploiata, valoarea ei este 'development'. Cand deploiem aplicatia, este automat setata
// pe 'production'. Asadar, noi vrem sa avem logger-ul DOAR in faza de development, utilizatorul nu ar trebui sa vada
// ce actiuni lansam noi.
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;