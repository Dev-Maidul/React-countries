import React, { useState } from "react";
import { use } from "react";
import Country from "../Country";
import './gridlayout.css';
const Countries = ({ fetchCountries }) => {
  const [visitedCountry,setVisitedCountry]=useState([]);

  const handleVisitedCountries=(country)=>{
    console.log("clicked",country);
    const newVisitedCountries=[...visitedCountry,country];
    setVisitedCountry(newVisitedCountries);
  }

  const countries = use(fetchCountries);
  return (
    <div>
      <h1>Number of country: {countries.length}</h1>
      <h2>Visited Country: {visitedCountry.length}</h2>
      <ol>
        {
            visitedCountry.map(country=> <li>{country.name.common}</li>)          
        }
      </ol>
      <div className="grid">
        {countries.map((country) => ( 
          <Country key={country.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
