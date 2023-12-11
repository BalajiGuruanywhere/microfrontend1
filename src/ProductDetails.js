import React from 'react';

function ProductDetails({name,description}){
    return (
            <div>
                <h2>{name}</h2>
                <b>Description: </b><i>{description}</i>
            </div>
    );
}

export default ProductDetails;