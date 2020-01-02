import React from 'react';
import ProductItem from './ProductItem';

const ProductList = (props) => {
    const { products } = props;

    return (
        <div className="col-12 col-md-9">
            <div className="row">
                { products
                    ? products.map((product) => {
                        return <ProductItem
                            {...product}
                            key={product.id}
                        />
                    })
                    : null
                }
            </div>
        </div>
    );
}

export default ProductList;