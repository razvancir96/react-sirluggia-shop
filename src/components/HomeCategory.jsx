import React from 'react';

const HomeCategory = (props) => {
    const {name, description, image} = props;

    return(
        <div className="col-6 mb-3">
            <div className="w-100">
                <img src={image} alt={name} className="w-100"/>
            </div>
            <h2 className="h4 my-1"><strong>{name}:</strong></h2>
            <p className="m-0">{description}</p>
        </div>
    );
}

export default HomeCategory;