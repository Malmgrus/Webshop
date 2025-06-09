import React, { useContext } from 'react';
import { StoreContext } from './App.jsx';
import Navigation from './Navigation';
import Footer from './Footer';
import { useParams, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import './viewProduct.css';

function ViewProduct() {
    // Get parameters from products.jsx
    const {store, setStore } = useContext(StoreContext);
    const {id, title, image, price, description} = useParams();
    const location = useLocation();
    const productDetails = location.state;

    function storeData() {
        const productData = {
            id: parseInt(id),
            title: productDetails.title,
            image: productDetails.image,
            price: productDetails.price,
            description: productDetails.description,
        };
    
        // Check localStorage and add product
        if (store[id]?.amount != undefined) {
            productData.amount = store[id].amount + 1;
        } else {
            productData.amount = 1;
        }
        setStore(prev => {
            return {...prev, [id]: productData};
        })
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