import { createStore } from 'redux';
import { cartReducer } from './reducers/cart';

const store = createStore(cartReducer);

export default store;