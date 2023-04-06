import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt=''/>
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>price= ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} star</p>
            </div>
            <btn className='btn-cart'>Add to Cart</btn>
        </div>
    );
};

export default Product;