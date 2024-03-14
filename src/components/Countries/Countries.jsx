import { useEffect } from "react";
import { useState } from "react";

const Countries = () => {
    const [countries , setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then( res => res.json())
        .then( data => console.log(data));
    },[])
    return (
        <div>
            <h3>Countries : </h3>
        </div>
    );
};

export default Countries;



/**
 * 40-1 Module Introduction, Load Countries Using UseEffect
 * Resource _______
 * https://restcountries.com/
 * API link_  https://restcountries.com/v3.1/all
 */