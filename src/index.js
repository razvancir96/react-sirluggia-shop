import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// importam store-ul creat din reduceri
import store from './redux/store';
// importam si componenta Provider, oferita de react-redux
import { Provider } from 'react-redux';

ReactDOM.render(
// ATENTIE! Trebuie ia includem toata aplicatia noastra in componenta Provider,
// careia ii pasam pa props store-ul creat. De ce? Vrem ca toate paginile/componentele
// create sa aiba acces la store.
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
