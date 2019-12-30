import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';
// Importam Link-ul din router.
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    const {name, price, currency, image, id} = props;

    return(
        <div className="product-item col-4 mb-3 d-flex flex-column align-items-center">
            {/* Adaugam un link catre pagina de produs, precum si stilizare. */}
            <Link to={`/product/${id}`} className="text-dark d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <button
                className="btn btn-outline-dark"
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă în coș
            </button>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product))
    };
}

export default connect(null, mapDispatchToProps)(ProductItem);