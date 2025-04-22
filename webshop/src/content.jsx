import React, { useEffect, useState} from 'react';
import './App.css';

function SlideShow(images) {
    const [index, setIndex] = useState(0);
    const interval = 5000;

    let array = [];
    for (let key in images.image) {
        let obj = images.image[key];
        array.push(obj.image);
    }
    console.log("array längd: ", array);
    
    useEffect(() => {
        console.log("useeffect");

/*        console.log("array nextSlide: ", array);
        setIndex((prevIndex) => {
            if (index === array - 1) {
                prevIndex = 0;
            } else {
                prevIndex + 1;
            }
            }
        )*/
        
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
    }
    nextSlide(array);
    /*function calcSlide () {
        if (index === array.length - 1) {
            newIndex = 0;
            console.log("nollad")
        } else {
            newIndex = index + 1;
            console.log("plus 1")
            console.log("index är: ", newIndex);
        }
        setIndex(newIndex);
    }*/

    return (
        <div>
            <img src={array[index]}></img>
            {/* {array} */}
        </div>
    );
};

export default SlideShow;