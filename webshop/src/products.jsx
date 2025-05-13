import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './products.css';

function Products() {
    const [data, setData] = useState([]);
    const [filteredCat, setFilteredCat] = useState([]);
    
    useEffect(() => {
        function fetching() {
            let data = [];
            let categorys = [];
            fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if (!response) {
                    throw new Error('HTTP response error: ', response.status);
                }
                return response;
            })
            .then(response => response.json())
            .then((response) => {

                for (let item of response) {
                    data.push(item);
                    if (!categorys.includes(item.category)) {
                        categorys.push(item.category);
                    }

                }
                setData(data);
                setFilteredCat(categorys);
            })
            .catch(error => console.log(error));
        }
        fetching();
    }, []);

    return (
        <>
        <div className="categorys">
            {
            filteredCat.map((name, i) => {
                return (
                    <button className="categoryName" key={i}>{name}</button>
                )
})
            }
        </div>
        <section className="products" id="products">
            <div className="productsContainer">
                {
                    data.map((item, i) => {
                        const urlParams =  {title: item.title, image: item.image, price: item.price, description: item.description}
                        return (
                            <div className="productsContainerItem" key={i}>
                                <Link to={`/product/${item.id}`} state={urlParams}>
                                <img className="productPic" src={item.image} alt={item.title} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>            
        </section>
        </>
    );
}

export default Products;