import React from 'react';
import Layout from '../components/Layout';
// importam HOC-ul connect
import { connect } from 'react-redux';
// importam actiunea de stergere din cart
import { removeFromCart } from '../redux/actions/cart';
// importam Link-ul din router
import { Link } from 'react-router-dom';
// importam fisierul css corespunzator
import './Cart.css';
// importam iconita de stergere a produsului
import { ReactComponent as Close} from '../assets/icons/close.svg';

// De ce Cart nu este o clasa? State-ul este tinut in store-ul global, deci nu va mai avea state! =>
// poate fi o functional component.
const Cart = (props) => {
    return(
        // Nu uitam de Layout, pentru a avea Header si Footer
        <Layout>
            <div className="cart-page content-min-height container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                    // Daca avem produse in cart, le afisam.
                    // PRODUSELE sunt venite din store si salvate in props prin functia mapStateToProps!!
                    props.products.length
                    ? <div className="w-100">
                        {/* Numele coloanelor ce vor fi afisate. */}
                        <div className="d-flex justify-content-between text-center h4 text-bold">
                            <p className="w-25">Produs</p>
                            <p className="w-25">Pret</p>
                            <p className="w-25">Cantitate</p>
                            <p className="w-25">Total</p>
                        </div>
                        {
                            // Afisam produsele din cart.
                            props.products.map(product => {
                                return <div className="d-flex justify-content-between align-items-center text-center" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={product.image} alt="Produs"/>
                                        <p>{ product.name }</p>
                                    </div>
                                    <p className="w-25">{ product.price } { product.currency }</p>
                                    <p className="w-25">{ product.quantity }</p>
                                    <div className="w-25 d-flex justify-content-center">
                                        <p className="mr-2">{ product.price * product.quantity } { product.currency }</p>
                                        {/* ATENTIE! Nu uitati ca in metoda mapDispatchToProps definiti actiuni ce sunt
                                        salvate in props-uri! Deci cand le apelati efectiv, trebuie sa folositi props.<numeActiune> */}
                                        {/* De asemenea, AVETI GRIJA la payload-ul pe care il pasati actiunii!!
                                        El trebuie sa coresponda ca strictura cu payload-ul folosit in actiuni si reduceri. */}
                                        <div onClick={() => props.removeFromCart({id: product.id})}>
                                            <Close />
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    // Daca nu avem produse in cart afisam un mesaj si un buton care duce la Home.
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse in cart!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

// Functia mapStateToProps ia parti din state-ul store-ului si le aduce ca PROPS-uri in componenta curenta.
// Cand este apelata de connect functia primeste automat state-ul store-ului. Pentru a primi in props campuri din
// state, functia trebuie sa returneze un obiect, ale carui chei vor reprezenta NUMELE noilolor props-uri ce vor fi
// injectate in componenta curenta(Cart), care vor avea ca valori diverse campuri din state-ul din store.
function mapStateToProps(state) {
    return {
        products: state.products
    };
}

// Functia mapDispatchToProps trimite actiuni catre store. Cum? Cand este apelata de connect, primeste automat
// functia dispatch. Cand dispatch este APELATA primeste ca parametru un apel de actiune(din folderul actions,
// creat de noi). Practic, in acest mod, rezultatul executiei actiunii va fi pasat catre store, iar store-ul
// va stii astfel sa APELEZE reduce-erul corespunzator.
// TOTUSI, noi trebuie actiunii sa ii pasam un payload, iar acesta se va pasa din interiorul componentei(fie
// el un id sau un produs intreg). Astfel trebuie sa ne definim o metoda, care va fi disponibila IN PROPS-urile
// componentei (mapDispatchToProps va returna un obiect, ale caror chei vor fi props-uri noi pentru componenta
// (Cart)). DECI ne definim o metoda numita removeFromCart, care va primi un payload si va APELA metoda dispatch,
// careia ii trimitem ca parametru actiunea IMPORTATA din folderul actions, care la randul ei trebuie sa primeasca
// mai departe payload-ul.
function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (payload) => dispatch(removeFromCart(payload))
    };
}

// Cart-ul trebuie sa fie conectat la store, deci vom folosi HOC-ul connect, care primeste automat
// ca parametri mapStateToProps si mapDispatchToProps, pe care NOI trebuie sa le implementam.
// ATENTIE! Trebuie ca cele doua metode sa fie pasate lui connect IN ORDINEA DE MAI SUS, dar pot fi denumire
// diferit, cu conditia ca si numele metodei de mai sus(cand ii e scrisa implementarea) sa fie acelasi.
export default connect(mapStateToProps, mapDispatchToProps)(Cart);