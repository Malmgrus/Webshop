import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './products.css';

function Products() {
    const [data, setData] = useState([]);
    const [category, setcategory] = useState([]);
    const [filteredCat, setFilteredCat] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    
    //Get data from API
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
                setcategory(categorys);
            })
            .catch(error => console.log(error));
        }
        fetching();
    }, []);

    function addCategory(cat) {
        if (!filteredCat.includes(cat)) {
            setFilteredCat([...filteredCat, cat]);
        }
    }

    function removeCategory(cat) {
        if (filteredCat.includes(cat)) {
            const newCat = filteredCat.filter(item => item !== cat);
            setFilteredCat(newCat);
        }
    }

    function clearCategory() {
        setFilteredCat([]);
    }

    useEffect(() => {
        if (filteredCat.length === 0) {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter(item => filteredCat.includes(item.category)));
        }
    }, [filteredCat, data]);

    return (
        <>
        <div className="categorys">
            {category.map((item, key) => {
                return (
                    <button className="categoryName" key={key} onClick={() => {
                        if (filteredCat.includes(item)) {
                            removeCategory(item);
                        } else {
                            addCategory(item);
                        }
                    }}>
                    {item.split("-").join(" ")}
                    </button>
                )
            })}
            <button className="categoryName" onClick={() => clearCategory()}>Clear</button>
        </div>
        <section className="products" id="products">
            <div className="productsContainer">
                {filteredData.map((product, key) => {
                    const urlParams =  {title: product.title, image: product.image, price: product.price, description: product.description}
                    return (
                        <div key={key} className="productsContainerItem">
                            <Link to={`/product/${product.id}`} state={urlParams}>
                            <img className="productPic" src={product.image} alt={product.title} />
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