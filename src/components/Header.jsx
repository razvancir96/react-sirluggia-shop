import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import './Header.css';

const Header = (props) => {
    // Headerul primeste acum informatii descpre user, functia de signOut de la Firebase si functia
    /// handleSignOut, care va modifica in App.js informatiile despre user. ATENTIE! Aceste prop-uri
    // au fost pasate din App in Home in Layout in Header, ceea ce e ORIBIL. Se numeste prop drilling
    // tehnica asta si nu ne dorim asa ceva. Cum vom scapa de ea? La cursul urmatopr, Redux ne salveaza!
    const {user, signOut, handleSignOut} = props;

    // La click-ul pe butonul de delogare din header se va executa aceasta functie
    function handleHeaderSignOut() {
        // Apelam functia signOut, venita de la firebase si pasata tocmai din App.js.
        const signOutResponse = signOut();
        // Functia va returna un Promise, in caz de succes.
        signOutResponse.then(() => {
            // handleSignOut este metoda pasata tocmai din App.js, deci va modifica datele userului in App.js.
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
                    {/* ATENTIE! Daca avem un user si acesta are un nume, atunci ii vom afisa un mesaj.
                    E necesar si sa verificam daca avem user, pentru ca daca user e undefined, vom primi eroarea
                    "cannot read propertu uid of undefined" */}
                    { user && user.uid
                        ? <p>Salut, {user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        {/* Daca avem user, afisam textul "delogare", altfel altfel afisam "logare" */}
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