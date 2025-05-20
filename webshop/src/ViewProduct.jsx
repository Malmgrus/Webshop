import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useParams, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import './viewProduct.css';

function ViewProduct() {
    // Get parameters from products.jsx
    const {id, title, image, price, description} = useParams();
    const location = useLocation();
    const productDetails = location.state;

    function storeData() {
        const productData = {
            id: productDetails.id,
            title: productDetails.title,
            image: productDetails.image,
            price: productDetails.price,
            description: productDetails.description,
        };
    
        // Check localStorage and add product
        let basket = JSON.parse(localStorage.getItem(id)) || {};

        if (Object.hasOwn(basket, "amount")) {
            productData.amount = basket.amount + 1;
        } else {
            productData.amount = 1;
        }

        localStorage.setItem(id, JSON.stringify(productData));
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
        <Footer />
    </>
    );
};

export default ViewProduct;