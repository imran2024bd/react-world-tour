import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const[visitedCountries , setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
        // .then( data => console.log(data));
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        console.log(country);
    }

    return (
        <div >
            <h3>Countries : {countries.length} </h3>
            <div>
                <h5>Visited countries</h5>
                <ul>

                </ul>
            </div>
            <div className="country-container" >
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country} ></Country>)
                }
            </div>
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