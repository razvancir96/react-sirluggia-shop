import React from 'react';
import ProductItem from './ProductItem';

const ProductList = (props) => {
    // Extragem vectorul de produse primit din Category
    const { products } = props;

    return (
        <div className="col-9">
            {/* ATENTIE! Prima oara cand este randata componenta, produsele inca nu au venit!
            Deci pentru a evita erori, trebuie sa verificam daca avem produse! */}
            <div className="row">
                { products
                    ? products.map((product) => {
                        return <ProductItem
                            // Pentru a pasa toate proprietatile obiectului product mai departe
                            // ca props, putem folosi urmatoarea sintaxa:
                            {...product}
                            // Nu uitam sa pasam cheia!
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