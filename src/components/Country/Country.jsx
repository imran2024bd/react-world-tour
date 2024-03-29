import { useState } from 'react';
import './country.css';
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ country , handleVisitedCountry , handleVisitedFlags }) => {
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
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag countries</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            { visited ? 'I have visited this country.' : 'I want to visit.'}
            {/* { visited && 'I have visited this country.'} */}

            {/* <img src={flags.svg} alt="" /> */}
            <hr />
            
            <CountryDetail
            country = {country}
            handleVisitedCountry = {handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;

/**
 * 40-2 Display Countries In A Simple Way, Folder Structure
 * 40-4 Toggle State Based On Click And Conditional Rending
 * 40-5 Conditional CSS And Conditional Style
 * 
 * 40-7 (Recap) Lift Up The State Recap For Visited Flags
 * 40-8 (Optional) Prop Drilling, Pass Props In Multi Level
 * 40-9 Deploy Rest Countries To Surge Or Netlify
 * link : https://vitejs.dev/guide/static-deploy.html
 * 
 */