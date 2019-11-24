import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';
// SVG-urile se importa diferit de imagini! (Google: how to import SVG in React)
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import './Header.css';

const Header = () => {
    return(
        // container-fluid si container-min-max-width sunt folosite pentru layout.
        <header className="border-bottom mb-3">
            {/* Clasele puse pe header sunt clase Bootstrap echivalente pentru proprietati de flex. */}
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/">
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                <div>
                    <Link to="/login" className="text-dark">Login</Link>
                    {/* ShoppingCart este un SVG! */}
                    <ShoppingCart className="ml-2"/>
                </div>
            </div>
        </header>
    );
}

export default Header;