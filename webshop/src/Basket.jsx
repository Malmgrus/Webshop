import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import './basket.css';

function Basket() {

    function checkout() {
        alert("Thank you for your purchase!");
    }

    function clearBasket() {
        localStorage.clear();
    }

    const basket = Object.values(localStorage) || {};

    return (
        <>
            <Navigation />

            <div className="basketContainer">
                <h1>Basket</h1>
                <hr></hr>
                {Object.keys(basket).length == 0 ? (
                    <p>Your basket is empty.</p>
                ) : (
                    <ul>
                        {basket.map((index) => {
                            let parsedData = JSON.parse(index);
                            return (
                            <>
                            <li className="item" key={parsedData.id}>
                            <img className="basketImage" src={parsedData.image} alt={parsedData.title}/>
                            <div className="itemDetail">
                                <span ClassName="detail">{parsedData.title}</span>
                                <span className="detail">Amount: {parsedData.amount}</span>
                                <span className="detail">{parsedData.price} €</span>
                            </div>
                            </li>
                            <hr className="line"></hr>
                        </>)
                        })}
                    </ul>
                )}
                <form className="itemDetail">
                    <label>Namn</label>
                    <input placeholder="ex. Sven Svensson" className="userDetails"></input>
                    <label>Adress</label>
                    <input placeholder="ex. Holländargatan 38" className="userDetails"></input>
                    <label>Kortnummer</label>
                    <input placeholder="ex. 000000000" className="userDetails"></input>
                </form>
                <div className="totalPrice">
                    <span>Total price:</span>
                    <span>{basket.reduce((acc, item) => {
                        let parsedData = JSON.parse(item);
                        return acc + (parsedData.price * parsedData.amount);
                    }, 0)} €</span>
                </div>
                <div className="buttons">
                    <button className="btn" onClick={(() => checkout())}>Checkout</button>
                    <button className="btn" onClick={() => clearBasket()}>Clear basket</button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Basket;