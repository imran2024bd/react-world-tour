import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
        // .then( data => console.log(data));
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        // console.log(country);
        // visitedCountries.push(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        // console.log(' Flag Adding');
        // console.log(country);
        const newVisitedFlags =[...visitedFlags , flag];
        setVisitedFlags(newVisitedFlags);
    }
    
    // Remove item from an array in a state
    // use filter to select all the elements except the one you want to remove

    return (
        <div >
            <h3>Countries : {countries.length} </h3>
            {/* visited country */}
            <div>
                <h5>Visited countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li
                            key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* Display Flags */}
            <div className="flag-container">
                    {
                        visitedFlags.map((flag, idx) => <img key={idx} src= {flag}></img>)
                    }
            </div>
            {/* Display countries */}
            <div className="country-container" >
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags = {handleVisitedFlags}
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
 * Updating Arrays in State
 * https://react.dev/learn/updating-arrays-in-state
 * Updating Objects in State
 * https://react.dev/learn/updating-objects-in-state
 * Deploying a Static Site
 * https://vitejs.dev/guide/static-deploy.html
 * Command Line Interface
 * https://vitejs.dev/guide/cli.html
 * 
 */