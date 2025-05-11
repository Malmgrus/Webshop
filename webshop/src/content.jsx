import React, { useEffect, useState} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './App.css';

function SlideShow() {
    const [index, setIndex] = useState(0);
    const [data, setData] = useState([]);
    const interval = 5000;
    

    function fetchData() {
        let tempData = [];
        fetch('https://fakestoreapi.com/products')
                .then((response) => {
                    if (!response) {
                        throw new Error('HTTP response error: ', response.status)
                    }
                    return response;
                })
                .then(response => response.json())
                .then((response) => {
                    response.forEach(image => {
                      tempData.push(image.image);
                    });
                    setData(tempData);
                    //nextSlide(data);
                }
        )
        return tempData;
      }

    function nextSlide(data) {
/*        setIndex((prevIndex) => {if (index === data.length - 1) {
                prevIndex = 0;
            } else {
                prevIndex + 1;
            }
            }
        )*/
/*        let prevIndex = 0;
        if (index === data.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);

        }*/


        const autoPlay = setInterval(() => {
            if (index === data.length - 1) {
                setIndex(0);
            } else {
                setIndex(index + 1);
    
            }
        }, interval);
       return (() => {clearInterval(autoPlay)})
    }

    useEffect((() => {
        fetchData();
        /*console.log("data i useeffect ", data);
        let count = 0;
        for (let element of data) {
            count = count + 1;
        }
            console.log("count: ", count);*/

    }), interval);

    

/*    let array = [];
    for (let key in images.image) {
        let obj = images.image[key];
        array.push(obj.image);
    }
    console.log("array längd: ", array);
    console.log("images: ", images);
    
    useEffect(() => {
        console.log("useeffect");

        console.log("array nextSlide: ", array);
        setIndex((prevIndex) => {
            if (index === array - 1) {
                prevIndex = 0;
            } else {
                prevIndex + 1;
            }
            }
        )
        
        const autoPlay = setInterval(nextSlide(array), interval);
    }, [interval])
    

    const nextSlide = (array) => {
        console.log("index ", index);
        setIndex((prevIndex) => {
            if (index === array - 1) {
                prevIndex = 0;
            } else {
                prevIndex + 1;
            }
            }
        )
    }*/
        
    return (
        <div className="aboutBuisness">

            <span className="aboutText smallText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
            {/*<span className="aboutText largeText">
                Lorem ipsum dolor, sit amet.
            </span>*/}
        </div>
    );
};

export default SlideShow;