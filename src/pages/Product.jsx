import React from 'react';
import Layout from '../components/Layout';
// Avem nevoie de vectorul de produse.
import products from '../utils/products.json';
import './Products.css';
// Trebuie sa ne conectam la store, pentru a dispatch-ui actiunea de addToCart.
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        // Id-ul produsului este luat din ruta.
        const { match } = this.props;
        const productId = match.params.productId;
        // In JSON-ul products avem un obiecte care are drept chei categoriile. Vrem sa preluam informatiile
        // despre categorii si sa le punem intr-un array.
        const categoryValues = Object.values(products);
        console.log(categoryValues);
        // Fiecare categorie are "items", care reprezinta un vector de obiecte, cu informatii referitoare la produse.
        // Noi vrem sa unim toate produse din campul "items" al fiecarei categorii, rezultand intr-un final un vector
        // cu toate produsele. De ce? Pentru ca vom face un find pe intrg vectorul si vom gasi produsul cu id-ul dorit.
        // ATENTIE! Nu este singura metoda! Daca vreti sa faceti alcumva, e perfect ok.
        // Asadar: avem un vector de obiecte, iar fiecare obiect contine la randul lui un vector de obiecte. Dupa
        // ce parcurgem aceasta structura, trebuie sa ne rezulte un singur vector de obiecte, deci practic REDUCEM
        // structura. V-ati prins?
        const productItems = categoryValues.reduce((acc, category) => {
            // Pentru fiecare categorie, luam continutul cheii "items" si il adaugam la vectorul rezultat(acumulatorul).
            return [
                ...acc,
                ...category.items
            ]
        // FOARTE IMPORTANT! Acumulatorul este initial un array gol!
        }, [])
        console.log(productItems);
        // Acum ca avem toate produsele intr-un array, tot ce mai avem de facut e un find. DAR ATENTIE!
        const currentProduct = productItems.find(product => {
            // Cu typeof puteti verifica tipul si SURPRIZA: unul e string, altul e number... => CONVERTIM
            // NU PUNETI ==, CONVERTITI!!!
            console.log(typeof productId, typeof product.id);
            return Number(productId) === product.id;
        });
        console.log(currentProduct);
        // Punem datele produsului curent in state.
        this.setState({product: currentProduct});
    }

    render() {
        const { product} = this.state;

        return (
            <Layout>
                <div className="product-page content-min-height container-fluid container-min-max-width">
                    {/* Adaugam markup-ul pentru pagina de produs */}
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="d-flex">
                        <div className="image-wrapper d-flex justify-content-center mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div>
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button
                                className="btn btn-dark mb-4 font-weight-bold"
                                // La click pe buton, adaugam in cart-ul din store.
                                onClick={() => {
                                    this.props.addToCart({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    })
                                }}
                            >
                                Adaugă în coș
                            </button>
                            <p><span className="font-weight-bold">Mărime</span>: {product.size}</p>
                            <p><span className="font-weight-bold">Culoare</span>: {product.colour}</p>
                            <p><span className="font-weight-bold">Material</span>: {product.material}</p>
                            <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

// Avem nevoie sa ne conectam la store si sa aducem in props dispatch-ul metodei addToCart.
function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload))
    }
}

export default connect(null, mapDispatchToProps)(Product);