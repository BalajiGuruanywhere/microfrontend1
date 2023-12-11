import React from 'react';
import ProductDetails from './ProductDetails';

function Product(props){
    return (
            <div>
            <ProductDetails name={props.name} description={props.description}/>
            <p><b>Price: ${props.price}</b></p>
            <button onClick={()=>props.incrementPrice()}>Increase Price</button>
            <button onClick={()=>props.decrementPrice()}>Decrease Price</button>
           
            </div>
    );
}

export default Product;