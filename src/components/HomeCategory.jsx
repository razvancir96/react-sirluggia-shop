import React from 'react';
import {Link} from 'react-router-dom';

const HomeCategory = (props) => {
    const {route, name, description, image} = props;

    return(
        // ATENTIE la col si col-md! col-... se aplica pentru toate dimensiunile,
        // iar col-md-... se aplica pentru dimensiuni MAI MARI de 768px!
        <div className="col-12 col-md-6 my-3">
            <Link to={`/category/${route}`} className="text-dark">
                <div className="w-100">
                    <img src={image} alt={name} className="w-100"/>
                </div>
                <h2 className="h4 my-1"><strong>{name}:</strong></h2>
                <p className="m-0">{description}</p>
            </Link>
        </div>
    );
}

export default HomeCategory;