import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import './Header.css';
import { connect } from 'react-redux';
// Importam metoda signOut din folderul apis/firebase.
import { logoutUser } from '../redux/actions/user';

const Header = (props) => {
    // Am eliminat din Header props-urile ce veneau din Layout!
    // De asemenea, am eliminat si metoda handleHeaderSignOut, care se ocupa de mecanismul de sign out.
    // acum signout-ul afecteaza doar store-ul, iar componentele conectate la el pot vedea modificarile
    // corespunzatoare.
    return(
        <header className="border-bottom mb-3">
            <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    <img src={Logo} alt="Sirluggia Shop" className="logo"/>
                </Link>
                <div>
                    {/* Atentie! Userul este preluat din store, deci il vom referi ca props.user. */}
                    { props.user && props.user.uid
                        ? <p>Salut, {props.user.displayName}!</p>
                        : null
                    }
                    <div className="d-flex justify-content-end">
                        { props.user && props.user.uid
                            // La click pe "Delogare", se apeleaza metoda signOut, venita prin mapDispatcToProps,
                            // trebuie apelata cu props.signOut.
                            ? <p className="logout h5" onClick={() => props.signOut()}>Delogare</p>
                            : <Link to="/login" className="text-dark h5 mb-0">Logare</Link>
                        }
                        <div className="d-flex align-items-center">
                            <Link to="/cart" className="d-flex">
                                <ShoppingCart className="ml-2"/>
                                <p className="ml-1 mb-0 text-dark">{ props.numberOfProducts }</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

// Am adaugat la mapStateToProps un nou camp: user. Aici se gasesc datele necesare despre user.
function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length,
        user: state.user.data.user
    }
}
// Avem nevoie de actiunea logoutUser, importata din redux/actions, care va face logarea efectiva a userului.
function mapDispatchToProps(dispatch) {
    return {
        signOut: () => dispatch(logoutUser())
    }
}

// Am adaugat functia mapDispatchToProps.
export default connect(mapStateToProps, mapDispatchToProps)(Header);