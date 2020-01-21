import React, { useState } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

function PropertyDetails() {
    let {id} = useParams();
    let [result, setResult] = useState([]);

    axios.get('http://134.209.138.34/item/' + id)
        .then(responce => { 
            console.log(responce);
            console.log(responce.data);
            console.log(responce.data[0]);
            setResult(responce.data[0]);
        })
        .catch((error => {
            alert('Error' + error);
        }
        ))
    
    let imgs = result.images;
    let imgList = [];
    
    if (imgs) {
        imgList =  imgs.map((elem, i) => {
            return <li className="detail__img-item" key={i}>
                    <img className="detail__img" src={elem} alt={result.title}></img>
                </li>
        })
    }

    return (<section className="detail">
            <div className="detail__left-side">
                <h1 className="detail__title">{result.title}</h1>
                 <ul className="detail__img-wrap">
                    {imgList}
                </ul>
                <p className="detail__price">{result.price}</p>
            </div>
            <div className="detail__right-side">
                <p className="detail__desc">{result.description}</p>
                <p className="detail__address">{result.address}</p>
                    <p className="detail__seller">{result.sellerName}</p>
            </div> 
        </section>
    );
}

export default PropertyDetails;