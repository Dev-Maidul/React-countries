import React, { useState } from 'react';
import './contry.css';
const Country = ({country,handleVisitedCountries}) => {
    // console.log(country)
    // console.log(handleVisitedCountries)
    const [visited,setVisited]=useState(false);
    const handleVisit=()=>{
        setVisited(!visited);
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && 'visited-country'}`}>
            <h1>Name: {country.name.common}</h1>
            <img src={country.flags.png} alt="" />
            <h3>Independent: {country.independent? "Yes":"Not"}</h3>
            <p>Population: {country.population}</p>
            <strong>Capital: {country.capital}</strong>
            <br />
            <button onClick={handleVisit}>{visited ? "Visited":"Not visited"}</button>
            
            
        </div>
    );
};

export default Country;