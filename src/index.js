import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Putem da aliasuri cand importam.
import { BrowserRouter as Router} from "react-router-dom";
// Pentru a putea utiliza bootstrap.
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
// Pentru a avea acces la Router in intreaga aplicatie, App devine copilul lui Router.
<Router>
    <App />
</Router>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
