import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import './Header.css';
// In header dorim sa afisam numarul de produse din cart. Asadar, trebuie sa ne conectam
// la store-ul global pentru a-l extrage
import { connect } from 'react-redux';

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
                            : <Link to="/login" className="text-dark h5 mb-0">Logare</Link>
                        }
                        <div className="d-flex align-items-center">
                            {/* Adaugam link catre pagina cart-ului */}
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="ml-2"/>
                                {/* numberOfProducts e venit din store si salvat in props prin functia mapStateToProps!! */}
                                <p className="ml-1 mb-0 text-dark">{ props.numberOfProducts }</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

// Functia mapStateToProps ia parti din state-ul store-ului si le aduce ca PROPS-uri in componenta curenta.
// Cand este apelata de connect functia primeste automat state-ul store-ului. Pentru a primi in props campuri din
// state, functia trebuie sa returneze un obiect, ale carui chei vor reprezenta NUMELE noilolor props-uri ce vor fi
// injectate in componenta curenta(Header), care vor avea ca valori diverse campuri din state-ul din store.
function mapStateToProps(state) {
    return {
        numberOfProducts: state.products.length
    }
}

// Cart-ul trebuie sa fie conectat la store, deci vom folosi HOC-ul connect, care primeste automat
// ca parametri mapStateToProps si mapDispatchToProps, pe care NOI trebuie sa le implementam.
// In cazul de fata, nu avem nevoie sa trimitem actiuni catre store, deci nu avem nevoie de metoda mapDispatchToProps,
// asadar putem sa pasam null in loc de vreo implementare.
// ATENTIE! Trebuie ca cele doua metode sa fie pasate lui connect IN ORDINEA CORESPUNZATOARE(1. state; 2. dispatch),
// dar pot fi denumire diferit, cu conditia ca si numele metodei de mai sus(cand ii e scrisa implementarea) sa fie acelasi.
export default connect(mapStateToProps, null)(Header);