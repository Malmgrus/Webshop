import React from 'react';
import Navigation from './header';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import './viewProduct.css';

function ViewProduct() {
    const {id, title, image, price, description} = useParams();
    const location = useLocation();
    const productDetails = location.state;

    function storeData() {
        const productData = {
            id: id,
            title: title,
            image: image,
            price: price,
            description: description
        };

        let basket = {};

    if (!sessionStorage.hasOwnProperty(product)) {
        basket[product] = 1;
        sessionStorage.setItem(product, basket[product]);
    } else {
        let productAmount = sessionStorage.getItem(product);
        productAmount++;
        sessionStorage.setItem(product, productAmount);
    }
    
        sessionStorage.setItem('productData', JSON.stringify(productData));
    }

    return (
    <>
        <Navigation />
        
        {productDetails ? (
            <div className="product">
                <img className="productImage" src={productDetails.image} alt={productDetails.title}></img>
                <section className="details">
                    <h2>{productDetails.title}</h2>
                    <Button onClick={() => storeData()} variant="contained">Buy now: {productDetails.price} €</Button>
                    <p>{productDetails.description}</p>
                </section>
            </div>
        ) : (
            <div className="error">Product not found</div>
        )}
    </>
    );
};

export default ViewProduct;