import React from 'react';
// Atentie! avem si un fisier css
import './ProductItem.css';

const ProductItem = (props) => {
    // extragem props-urile de interes
    const {name, price, currency, image} = props;

    return(
        // Momentan, preview-ul produsului contine imagine, nume si pret
        <div className="product-item col-4 d-flex flex-column align-items-center">
            <img src={image} alt="productPhoto"/>
            <p className="mb-1 text-center">{ name }</p>
            <p className="text-center">{ price + currency }</p>
        </div>
    );
}

export default ProductItem;