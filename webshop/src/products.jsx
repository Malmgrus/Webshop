import React, {useEffect, useState} from "react";
import './products.css';


function Products() {
    const [data, setData] = useState([]);
    const [filteredCat, setFilteredCat] = useState([]);

    function filtering() {
        /*let values = [];
        let asd = data;
        console.log(asd);
        if (!data) {
            asd.foreach((index) => {
                values.push(index);
                /*index.key((key) => {
                    if (!key == values[index]) {
                        values.push(key);
                    }
                })
            })
        }
        console.log("values", values);*/
    }
    
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
                    <a className="categoryName" key={i}>{name}</a>
                )
})
            }
        </div>
        <section className="products">
            <div className="productsContainer">
                {
                    data.map((item, i) => {
                        return (
                            <div className="productsContainerItem" key={i}>
                                <img className="productPic" src={item.image} alt={item.title} />
                                
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