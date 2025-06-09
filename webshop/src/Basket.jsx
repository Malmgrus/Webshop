import React, { useContext} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import './basket.css';
import { StoreContext } from './App.jsx';

function Basket() {

    const { store, setStore } = useContext(StoreContext)

    function checkout() {
        alert("Thank you for your purchase!");
    }

    function clearBasket() {
        setStore({});
    }

    return (
        <>
            <Navigation />

            <div className="basketContainer">
                <h1>Basket</h1>
                <hr></hr>
                {Object.keys(store).length == 0 ? (
                    <p>Your basket is empty.</p>
                ) : (
                    <ul>
                        {Object.entries(store).map((index) => {
                            return (
                            <>
                            <li className="item" key={index.id}>
                            <img className="basketImage" src={index[1].image} alt={index[1].title}/>
                            <div className="itemDetail">
                                <span className="detail">{index[1].title}</span>
                                <span className="detail">Amount: {index[1].amount}</span>
                                <span className="detail">{index[1].price} €</span>
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
                    <span>{Object.entries(store).map((item) => { return (item[1].price * item[1].amount);
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