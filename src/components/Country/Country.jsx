import { useState } from 'react';
import './country.css';

const Country = ({ country , handleVisitedCountry }) => {
    // console.log(country);
    const { name, flags, population, area, capital, languages, cca3
    } = country;
    const [visited , setVisited] = useState(false);
    const handleVisited = () =>{
        // setVisited(true);
        setVisited(!visited);
    } 
        
    // console.log(handleVisitedCountry);

    // const passWithParams = () =>{
    //     handleVisitedCountry(country);
    // }

// const passWithParams = () =>handleVisitedCountry(country);
    


    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            {/* <div className={`country ${visited && 'visited'}`}></div> */}
            <h3 style={{color: visited ? 'blue' : 'black'}}>Name : {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population : {population} </p>
            <p>Area : {area} </p>
            <p> capital : {capital}</p>
            <p>language : {languages?.eng}</p>
            <p> <small> Countries Code: {cca3
            }</small></p>
            <button onClick={() =>handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            { visited ? 'I have visited this country.' : 'I want to visit.'}
            {/* { visited && 'I have visited this country.'} */}

            {/* <img src={flags.svg} alt="" /> */}
        </div>
    );
};

export default Country;

/**
 * 40-2 Display Countries In A Simple Way, Folder Structure
 * 40-4 Toggle State Based On Click And Conditional Rending
 * 40-5 Conditional CSS And Conditional Style
 */