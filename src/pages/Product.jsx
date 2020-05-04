import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import './Product.css';
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
        const { match } = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);
        const productItems = categoryValues.reduce((acc, category) => {
            return [
                ...acc,
                ...category.items
            ]
        }, []);
        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        this.setState({product: currentProduct});
    }

    render() {
        const { product} = this.state;

        return (
            <Layout>
                <div className="product-page container-fluid container-min-max-width">
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button
                                className="btn btn-dark mb-4 font-weight-bold"
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

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload))
    }
}

export default connect(null, mapDispatchToProps)(Product);