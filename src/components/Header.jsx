import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import './Header.css';

const Header = (props) => {
    const {user, signOut, handleSignOut} = props;

    function handleHeaderSignOut() {
        const signOutResponse = signOut();
        signOutResponse.then(() => {
            handleSignOut();
        });
    }

    return(
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                <div>
                    { user && user.uid
                        ? <p>Salut, {user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        { user && user.uid
                            ? <p className="logout h5" onClick={() => handleHeaderSignOut()}>Delogare</p>
                            : <Link to="/login" className="text-dark h5">Logare</Link>
                        }
                        <ShoppingCart className="ml-2"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;